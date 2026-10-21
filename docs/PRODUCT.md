# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro with static output. The site is mostly content (four menus/cartas that change each season, history, hours), so menus live as structured data files rendered to HTML instead of PDFs, the build ships near-zero JavaScript, and the output deploys to any static host. Hosting target not yet decided.

## Users

- **Guests planning a visit** (mostly on mobile, often from Instagram @rompeto.restaurante): want to know hours, see what is served and what it costs, and book a table.
- **Guests already deciding** (at home or on the way): read the restaurant menu, bar menu, drinks list, and wine list in detail before or during the visit.
- **People discovering the house**: want to understand what Rompeto is, its story and its place in Porto Alegre's high-end enogastronomy scene.

## Product Purpose

Rompeto's website is where a demanding guest goes from curiosity to a booked table. Its three jobs, in order of weight:

1. **Reservar mesa**: get the visitor to the WhatsApp reservation link with minimal friction.
2. **Consultar cardápios**: make the four menus readable and current on a phone.
3. **Contar a história**: convey the family legacy and the house's standard of service.

Success: more WhatsApp reservations, menus read on the site instead of PDFs, and a first impression consistent with the brand's quiet-luxury positioning.

## Positioning

Rompeto is the revival of a real family wine brand: founded in the 1990s by Romeu, Pedro and Toasa (Rom-Pe-To), who made artisanal wine in the south zone of Porto Alegre until the last harvest in 1998. Today it is a restaurant and wine cellar (adega) devoted to high enogastronomy, connected to Armazém dos Importados (its Night Harvest blue is inherited from that brand, and guests get a reduced corkage fee on Armazém wines). The house pairs a chef-led cuisine with a serious wine program: Riedel/Spiegelau glassware for all wine and bar service, Coravin by-the-glass pours, natural/biodynamic/low-intervention selections.

## Operating Context

- **Address**: Anita Garibaldi, Nº 448, Mont'Serrat, Porto Alegre/RS.
- **Reservations**: WhatsApp only, `https://api.whatsapp.com/send/?phone=555192927823&text&type=phone_number&app_absent=0` (source: `telefone para reservas.md`).
- **Hours** (source: `Horarios.jpg`):
  - Bar: Ter–Qui 17h–22h30 · Sex–Sáb 12h–23h
  - Jantar: Ter–Qui 19h–22h30 · Sex–Sáb 19h–23h
  - Almoço: Sex–Sáb 12h–15h
  - Closed Sunday and Monday (implied by the schedule; confirm before stating it explicitly).
- **Menus are seasonal**: current edition is "Inverno 2026". Content must be easy to replace each season.
- **Instagram**: @rompeto.restaurante.

## Capabilities and Constraints

- Four menus, currently as PDFs, to be rendered as real HTML:
  - `Rompeto - Menu Restaurante.pdf`: Aperitivos de bar, Entradas, Principais, Sobremesas, Extras.
  - `Rompeto - Menu de Bar.pdf`: Aperitivos de bar.
  - `Rompeto - Carta de Bebidas.pdf`: Cocktails, Mocktails, Aperitivos & Amari, Aguardentes, Whisky & Whiskey, and more.
  - `Rompeto - Carta de Vinhos (1).pdf`: Vinhos em taça (by style, 50ml/120ml) plus the bottle list. Each entry has producer, region, country and grape. Marks for natural/biodynamic/low-intervention and Coravin.
- Prices are in reais and written without the "R$" symbol in the printed menus. Fixed footnotes to keep: dietary restrictions notice, corkage fees (R$ 98/garrafa; R$ 49/garrafa for Armazém dos Importados wines), Riedel/Spiegelau service note.
- Language: Brazilian Portuguese. No English version requested.
- **Not decided yet**: hosting/domain, whether an online booking system will ever replace WhatsApp, private events/groups page (not one of the site's jobs for now), and the chef's name or bio (not in the materials; do not invent).

## Brand Commitments

Source of truth: `Rompeto_Manual_IDV - Final.pdf` (Manual de Identidade Visual v1.0). Binding points:

- **Name and logo**: "Rompeto", cursive signature logotype with tagline "COZINHA & VINHO". Four versions (01 preferred, with tagline; 02 without tagline; 03; 04 icon). Never alter colors, proportions, typeface, or spacing. Keep the protection area, and use a box in an institutional color when the background hurts legibility. Files: `Logo Rompeto CREAM.pdf`, `Logo Rompeto NIGHT HARVEST.pdf`.
- **Institutional colors**: Night Harvest #0F293E (predominant), Cream #FDF7D8 (instead of white), Antique Gold #B88B4A (accent), Porto Tawny #68302A, Greige #9B8F80 (transition), Warm Black #1E1B18 (body text on cream). The manual provides 5 tonal variations per color for web use. Night/blue+gold for dinners and evenings; cream/greige/tawny for daytime.
- **Typography**: Affogato (titles/campaigns, uppercase with wide tracking), Oliver Quin (script for accents and humanizing touches), Playfair Display (support titles, paired with Affogato), EB Garamond (body, menus, wine lists, fine print). Font files in `Fontes/` (Affogato OTF; Oliver Quin OTF plus webfont kit). Playfair and EB Garamond are Google Fonts.
- **Textures**: Granulado (grain; recommended for digital), Granito (backgrounds, blended over a palette color; `Textura---Granito(AZUL).jpg`, `Textura---Granito-(CREAM).jpg`), Aço Corten P&B (dense backgrounds).
- **Illustrations**: proprietary one-line illustration library in `Ilustracoes/` (Cozinha 1, Cozinha 2, Decanter, Drinks, Taças, Variados), in color and mono/line versions. Usable as patterns, scattered support, or icons.
- **Photography**: quiet luxury, focus on texture, intimate lighting, clean composition, human factor. **AI-generated images of dishes or spaces are strictly prohibited.** AI is allowed only for minor technical post-production fixes. Photo credit: Fábio Mattos.
- **Voice**: sober, refined, warm. Generous whitespace ("respiro"), no excess.

## Evidence on Hand

- `Fotos Rompeto/`: 57 real photos (series "260810 - Rompeto - Salão e Bar"): dining room at night with city view, wooden chairs and rugs, the red vintage slicer, banquette under the wine wall, backlit bar counter with bottle shelves, a red cocktail and white wine on the bar, table settings with the "RESERVADO" plate and Riedel glasses. **No photos of dishes, the chef, or the team in action**; do not fabricate or generate them.
- `Horarios.jpg`: official hours story card.
- Four current menus (PDF, Inverno 2026) with real items and prices.
- Brand manual, palette (`Rompeto palette.png`), logos, fonts, textures, illustrations.
- **Absent, do not invent**: testimonials, reviews, awards, press, chef name/bio, team names, event offerings.

## Product Principles

1. **Booking is never more than one tap away.** Every page leads to the WhatsApp reservation link and shows hours and address without hunting.
2. **Menus are content, not downloads.** Readable on a phone, searchable, current with the season, and faithful to the printed cartas' detail (producer, region, grape).
3. **Truth over spectacle.** Only real photography, real menu items, real story. No staged or generated imagery, no invented claims.
4. **Quiet luxury.** Restraint, whitespace and material texture carry the prestige. The wine program and the family story are the differentiators; let them speak calmly.
5. **The brand manual is binding.** Logo, colors, typefaces, textures and illustrations follow the IDV manual.

## Accessibility & Inclusion

No specific standard was set. Baseline: WCAG 2.2 AA contrast (watch Antique Gold and Greige on Cream for small text), legible menu type sizes on mobile, and real text in HTML (never menus as images).
