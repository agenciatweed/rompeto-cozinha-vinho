// A carta que se abre: os tempos viram a foto da seção e cada cardápio
// se desdobra numa carta inteira, com View Transitions quando o navegador tem.

type VTDoc = Document & { startViewTransition?: (cb: () => void) => { finished: Promise<void> } };
const doc = document as VTDoc;
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canMorph = () => typeof doc.startViewTransition === 'function' && !still;

const morph = (from: HTMLElement | null, to: HTMLElement | null, update: () => void, cls = '') => {
  if (!canMorph()) {
    update();
    return;
  }
  const root = document.documentElement;
  if (cls) root.classList.add(cls);
  if (from) from.style.viewTransitionName = 'morph';
  const vt = doc.startViewTransition!(() => {
    if (from) from.style.viewTransitionName = '';
    update();
    if (to) to.style.viewTransitionName = 'morph';
  });
  vt.finished.finally(() => {
    if (to) to.style.viewTransitionName = '';
    if (cls) root.classList.remove(cls);
  });
};

// Tempo da carta → a seção, com a foto do quadradinho se expandindo até a foto da seção
document.querySelectorAll<HTMLAnchorElement>('.tempo').forEach((tempo) => {
  tempo.addEventListener('click', (e) => {
    if (!canMorph() || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const id = tempo.getAttribute('href')?.slice(1);
    const section = id ? document.getElementById(id) : null;
    if (!section) return;
    e.preventDefault();
    const photo = tempo.querySelector<HTMLElement>('.tempo-frame');
    const dest = section.querySelector<HTMLElement>('[data-morph]');
    morph(photo, dest, () => {
      section.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
      history.replaceState(null, '', `#${id}`);
    }, 'vt-tempo');
  });
});

// Cardápio → carta inteira em tela cheia
let opener: HTMLElement | null = null;

// Posição de uma seção dentro da carta, descontando o cabeçalho fixo dela
const sectionTop = (paper: HTMLElement, target: HTMLElement) => {
  const head = paper.querySelector<HTMLElement>('.sheet-head');
  return target.offsetTop - (head?.offsetHeight ?? 140) - 8;
};

const openSheet = (trigger: HTMLElement, sheetId: string, anchor?: string) => {
  const dialog = document.getElementById(`sheet-${sheetId}`) as HTMLDialogElement | null;
  if (!dialog) return false;
  const block = trigger.closest<HTMLElement>('.menu');
  const paper = dialog.querySelector<HTMLElement>('.sheet-paper');
  opener = trigger;
  morph(block, paper, () => {
    dialog.showModal();
    document.documentElement.classList.add('sheet-open');
    const target = anchor ? dialog.querySelector<HTMLElement>(`#${sheetId}-${anchor}`) : null;
    if (paper) paper.scrollTop = target ? sectionTop(paper, target) : 0;
  }, 'vt-sheet');
  return true;
};

const closeSheet = (dialog: HTMLDialogElement) => {
  const paper = dialog.querySelector<HTMLElement>('.sheet-paper');
  const block = opener?.closest<HTMLElement>('.menu') ?? null;
  morph(paper, block, () => {
    dialog.close();
    document.documentElement.classList.remove('sheet-open');
  }, 'vt-sheet');
};

document.querySelectorAll<HTMLAnchorElement>('[data-sheet]').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    if (openSheet(link, link.dataset.sheet!, link.dataset.anchor)) e.preventDefault();
  });
});

document.querySelectorAll<HTMLDialogElement>('dialog.sheet').forEach((dialog) => {
  dialog.querySelector('[data-close]')?.addEventListener('click', () => closeSheet(dialog));
  dialog.addEventListener('cancel', (e) => {
    e.preventDefault();
    closeSheet(dialog);
  });
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) closeSheet(dialog);
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('sheet-open');
    opener?.focus({ preventScroll: true });
  });
  dialog.querySelectorAll<HTMLAnchorElement>('[data-jump]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = dialog.querySelector<HTMLElement>(a.getAttribute('href')!);
      const paper = dialog.querySelector<HTMLElement>('.sheet-paper');
      if (target && paper) paper.scrollTo({ top: sectionTop(paper, target), behavior: still ? 'auto' : 'smooth' });
    });
  });
});
