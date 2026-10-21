// Fatos da casa. Fonte: PRODUCT.md (Horarios.jpg, telefone para reservas.md, cardápios Inverno 2026).

export const whatsapp =
  'https://api.whatsapp.com/send/?phone=5551992927823&text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20Rompeto.&type=phone_number&app_absent=0';

export const instagram = 'https://www.instagram.com/rompeto.restaurante/';

export const address = {
  street: 'Anita Garibaldi, Nº 448',
  district: "Mont'Serrat",
  city: 'Porto Alegre/RS',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Anita+Garibaldi+448+Mont%27Serrat+Porto+Alegre+RS',
};

export const hours = [
  {
    service: 'Bar',
    slots: [
      { days: 'Ter–Qui', time: '17h–22h30' },
      { days: 'Sex–Sáb', time: '12h–23h' },
    ],
  },
  {
    service: 'Jantar',
    slots: [
      { days: 'Ter–Qui', time: '19h–22h30' },
      { days: 'Sex–Sáb', time: '19h–23h' },
    ],
  },
  {
    service: 'Almoço',
    slots: [{ days: 'Sex–Sáb', time: '12h–15h' }],
  },
];

export const season = 'Inverno 2026';

export const menus = [
  {
    id: 'restaurante',
    title: 'Menu do Restaurante',
    note: 'Aperitivos, entradas e principais',
    pdf: '/cardapios/menu-restaurante.pdf',
    items: [
      { name: 'Crudo', desc: 'Peixe cru, cítricos, mini alcaparras', price: '84' },
      { name: 'Fettuccine com trufa', desc: 'Creme leve de trufas Savitar', price: '144' },
      { name: 'Rigatoni e camarão rosa', desc: 'Tomate, pimentão vermelho e chouriço português. Levemente picante', price: '138' },
      { name: 'Bacalhau', desc: 'Purê de cebolada e pil pil', price: '198' },
    ],
  },
  {
    id: 'sobremesas',
    title: 'Sobremesas',
    note: 'Para terminar a refeição',
    pdf: '/cardapios/menu-restaurante.pdf',
    items: [
      { name: 'Queijos', desc: '', price: '29' },
      { name: 'Bergamota', desc: 'Sorbet e tomilho', price: '35' },
      { name: 'Floresta negra', desc: 'Chocolate 70%, chantilly e Amarena Fabbri', price: '49' },
      { name: 'Tartelette de maçã', desc: 'Sorvete de caramelo salgado e streusel', price: '39' },
      { name: 'Tiramisù', desc: '', price: '44' },
    ],
  },
  {
    id: 'bar',
    title: 'Menu de Bar',
    note: 'Para acompanhar a taça no balcão',
    pdf: '/cardapios/menu-bar.pdf',
    items: [
      { name: 'Gilda', desc: 'Piparra, anchova e azeitona Gordal', price: '19' },
      { name: 'Presunto San Daniele DOP', desc: 'Fatiado na hora', price: '45' },
      { name: 'Labneh', desc: 'Coalhada, ervas frescas, pimentas secas e sumagre', price: '39' },
    ],
  },
  {
    id: 'bebidas',
    title: 'Carta de Bebidas',
    note: 'Cocktails, mocktails, amari, aguardentes e whiskies',
    pdf: '/cardapios/carta-bebidas.pdf',
    items: [
      { name: 'Negroni', desc: 'Roku, Campari, vermutes (blend Rompeto)', price: '49' },
      { name: 'Hemingway Daiquiri', desc: 'Lamas Apraz, Angostura 5 anos, Luxardo Maraschino', price: '49' },
      { name: 'Betsy Ross', desc: 'Alves de Sousa Tawny, Hennessy VSOP, Cointreau', price: '94' },
    ],
  },
  {
    id: 'vinhos',
    title: 'Carta de Vinhos',
    note: 'Vinhos em taça e garrafa, do Brasil ao Velho Mundo',
    pdf: '/cardapios/carta-vinhos.pdf',
    items: [
      { name: 'Lírica Brut', desc: 'Hermann · Serra do Sudeste, RS · Chardonnay · 120ml', price: '38' },
      { name: 'Alvarinho Jovem 2026', desc: 'Hermann · Serra do Sudeste, RS · Alvarinho · 120ml', price: '37' },
      { name: 'Stoneburn Riesling 2023', desc: "Hunter's Wines · Marlborough, Nova Zelândia · Riesling · 120ml", price: '57' },
      { name: 'Chablis Vieilles Vignes 2023', desc: 'Domaine Alain Geoffroy · Borgonha · 120ml', price: '112' },
      { name: 'Orange from the Basement 2022', desc: 'Armani · Vêneto, Itália · Pinot Grigio (laranja) · 120ml', price: '75' },
      { name: 'Barbaresco Convivio 2021', desc: 'Bel Colle · Piemonte · Nebbiolo · 120ml', price: '97' },
      { name: 'Brunello di Montalcino 2021', desc: 'Caprili · Toscana · Sangiovese Grosso · 120ml', price: '199' },
      { name: "Taylor's Porto Tawny 20 anos", desc: 'Taylor Fladgate · Douro, Portugal · 50ml', price: '71' },
    ],
  },
];
