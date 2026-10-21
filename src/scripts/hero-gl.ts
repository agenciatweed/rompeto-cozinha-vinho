// Abertura em WebGL: as fotos reais do salão com granulado analógico, vinheta,
// uma luz de vela que segue o cursor (ou a inclinação do celular) e uma dissolução
// que gira como vinho na taça. Sem WebGL, a abertura em CSS continua valendo.

const SLIDE_MS = 4000;
const FADE_MS = 1600;
const KB_MS = SLIDE_MS + FADE_MS;

const VERT = `
attribute vec2 p;
varying vec2 vUv;
void main() {
  vUv = p * 0.5 + 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;
varying vec2 vUv;
uniform sampler2D uA;
uniform sampler2D uB;
uniform vec2 uRes;
uniform vec2 uSizeA;
uniform vec2 uSizeB;
uniform float uKbA;
uniform float uKbB;
uniform float uDirA;
uniform float uDirB;
uniform float uMix;
uniform float uTime;
uniform vec2 uLight;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return v;
}

vec2 cover(vec2 uv, vec2 img, float kb, float dir) {
  float ca = uRes.x / uRes.y, ia = img.x / img.y;
  vec2 s = ca > ia ? vec2(1.0, ia / ca) : vec2(ca / ia, 1.0);
  uv = (uv - 0.5) * s;
  float zoom = 1.03 + 0.11 * kb;
  uv = uv / zoom + 0.5;
  uv += vec2(dir * -0.016, 0.01) * kb;
  return uv;
}

void main() {
  vec2 uv = vUv;
  vec2 asp = vec2(uRes.x / uRes.y, 1.0);

  // Redemoinho durante a troca: deforma levemente as duas fotos em torno do centro
  float swirl = sin(3.14159 * uMix);
  vec2 c = (uv - 0.5) * asp;
  float ang = swirl * 0.35 * (1.0 - smoothstep(0.0, 0.9, length(c)));
  mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
  vec2 w = (rot * c) / asp + 0.5;
  vec2 warp = (vec2(fbm(uv * 3.0 + uTime * 0.07), fbm(uv * 3.0 - uTime * 0.05)) - 0.5) * 0.035 * swirl;

  vec3 a = texture2D(uA, cover(w + warp, uSizeA, uKbA, uDirA)).rgb;
  vec3 b = texture2D(uB, cover(w - warp, uSizeB, uKbB, uDirB)).rgb;

  // Dissolução orgânica: a nova foto se espalha a partir de manchas, como vinho no vidro
  float n = fbm(uv * vec2(2.4, 1.6) * asp + vec2(uTime * 0.02, 0.0));
  float edge = smoothstep(uMix * 1.35 - 0.32, uMix * 1.35 - 0.02, n);
  vec3 col = mix(b, a, edge);

  // Luz de vela: halo quente que respira, a sala escurece longe dela
  vec2 lp = (uv - uLight) * asp;
  float d = length(lp);
  float flicker = 0.92 + 0.05 * sin(uTime * 7.3) + 0.03 * noise(vec2(uTime * 2.1, 3.0));
  float glow = exp(-d * d * 4.2) * flicker;
  col *= 0.88 * mix(0.62, 1.08, smoothstep(1.05, 0.08, d));
  col += vec3(1.0, 0.64, 0.3) * glow * 0.16;
  col = mix(col, col * vec3(1.12, 0.98, 0.82), glow * 0.75);

  // Vinheta de lente
  float vig = smoothstep(1.25, 0.35, length((uv - 0.5) * vec2(1.25, 1.0)));
  col *= mix(0.62, 1.0, vig);

  // Granulado analógico (o Granulado do manual), animado como filme
  float g = hash(gl_FragCoord.xy + fract(uTime * 13.0) * 917.0) - 0.5;
  col += g * 0.075 * (1.15 - dot(col, vec3(0.333)));

  gl_FragColor = vec4(col, 1.0);
}`;

export function startHeroGL(hero: HTMLElement) {
  const imgs = [...hero.querySelectorAll<HTMLImageElement>('.hero-slide')];
  const canvas = document.createElement('canvas');
  canvas.className = 'hero-gl';
  canvas.setAttribute('aria-hidden', 'true');
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl || imgs.length === 0) return false;

  const shader = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
  };
  const vs = shader(gl.VERTEX_SHADER, VERT);
  const fs = shader(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return false;
  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const u = (n: string) => gl.getUniformLocation(prog, n);
  const U = {
    a: u('uA'), b: u('uB'), res: u('uRes'), sizeA: u('uSizeA'), sizeB: u('uSizeB'),
    kbA: u('uKbA'), kbB: u('uKbB'), dirA: u('uDirA'), dirB: u('uDirB'),
    mix: u('uMix'), time: u('uTime'), light: u('uLight'),
  };
  gl.uniform1i(U.a, 0);
  gl.uniform1i(U.b, 1);

  type Tex = { tex: WebGLTexture; w: number; h: number } | null;
  const textures: Tex[] = imgs.map(() => null);
  const upload = (i: number) => {
    const img = imgs[i];
    const tex = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
    textures[i] = { tex, w: img.naturalWidth, h: img.naturalHeight };
  };
  const ready = (img: HTMLImageElement) =>
    img.complete && img.naturalWidth ? Promise.resolve() : new Promise<void>((r) => img.addEventListener('load', () => r(), { once: true }));

  // Tamanho do canvas acompanha a abertura, com densidade limitada para poupar a GPU
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const r = hero.getBoundingClientRect();
    canvas.width = Math.max(1, Math.round(r.width * dpr));
    canvas.height = Math.max(1, Math.round(r.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  new ResizeObserver(resize).observe(hero);

  // Luz: cursor no computador, inclinação no celular, deriva lenta quando nada se move
  const target = { x: 0.62, y: 0.58 };
  const light = { x: 0.62, y: 0.58 };
  let lastInput = 0;
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    target.x = (e.clientX - r.left) / r.width;
    target.y = 1 - (e.clientY - r.top) / r.height;
    lastInput = performance.now();
  });
  window.addEventListener('deviceorientation', (e) => {
    if (e.gamma == null || e.beta == null) return;
    target.x = 0.5 + Math.max(-1, Math.min(1, e.gamma / 35)) * 0.38;
    target.y = 0.55 - Math.max(-1, Math.min(1, (e.beta - 45) / 35)) * 0.3;
    lastInput = performance.now();
  });

  let running = false;
  let visible = true;
  let start = 0;
  let raf = 0;
  const n = imgs.length;

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    const t = now - start;
    const idx = Math.floor(t / SLIDE_MS);
    const into = t - idx * SLIDE_MS;
    const cur = idx % n;
    const prev = (idx - 1 + n) % n;
    const fading = idx > 0 && into < FADE_MS;
    const mixRaw = fading ? into / FADE_MS : 1;
    const mixed = mixRaw * mixRaw * (3 - 2 * mixRaw);

    const texB = textures[cur] ?? textures[0];
    const texA = fading ? textures[prev] ?? texB : texB;
    if (!texA || !texB) return;

    if (now - lastInput > 2500) {
      target.x = 0.58 + Math.sin(now / 5200) * 0.16;
      target.y = 0.56 + Math.cos(now / 6900) * 0.09;
    }
    light.x += (target.x - light.x) * 0.06;
    light.y += (target.y - light.y) * 0.06;

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texA.tex);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texB.tex);
    gl.uniform2f(U.res, canvas.width, canvas.height);
    gl.uniform2f(U.sizeA, texA.w, texA.h);
    gl.uniform2f(U.sizeB, texB.w, texB.h);
    gl.uniform1f(U.kbA, Math.min(1, (into + SLIDE_MS) / KB_MS));
    gl.uniform1f(U.kbB, Math.min(1, into / KB_MS));
    gl.uniform1f(U.dirA, prev % 2 ? -1 : 1);
    gl.uniform1f(U.dirB, cur % 2 ? -1 : 1);
    gl.uniform1f(U.mix, fading ? mixed : 1);
    gl.uniform1f(U.time, now / 1000);
    gl.uniform2f(U.light, light.x, light.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  // Pausada, a sequência guarda onde parou e retoma do mesmo ponto
  let elapsed = 0;
  const play = () => {
    if (running || !visible || document.hidden || !textures[0]) return;
    running = true;
    start = performance.now() - elapsed;
    raf = requestAnimationFrame(frame);
  };
  const pause = () => {
    if (!running) return;
    running = false;
    cancelAnimationFrame(raf);
    elapsed = performance.now() - start;
  };

  ready(imgs[0]).then(() => {
    upload(0);
    resize();
    hero.querySelector('.hero-slides')?.appendChild(canvas);
    hero.classList.add('gl-on');
    play();
    // As outras fotos sobem para a GPU uma a uma, depois da primeira
    imgs.slice(1).forEach((img, i) => ready(img).then(() => setTimeout(() => upload(i + 1), 300 * (i + 1))));
  });

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    visible ? play() : pause();
  }).observe(hero);
  document.addEventListener('visibilitychange', () => (document.hidden ? pause() : play()));
  canvas.addEventListener('webglcontextlost', () => {
    pause();
    hero.classList.remove('gl-on');
  });
  return true;
}
