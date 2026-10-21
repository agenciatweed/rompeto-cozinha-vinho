---
name: Rompeto
description: Cozinha & Vinho, Porto Alegre. The house's own carta, set on granite.
colors:
  night: "#0f293e"
  night-deep: "#0b1f30"
  cream: "#fdf7d8"
  cream-soft: "#fefbec"
  gold: "#b88b4a"
  gold-soft: "#c6a06c"
  gold-ink: "#7a5a2c"
  tawny: "#68302a"
  greige-ink: "#6b6052"
  ink: "#1e1b18"
typography:
  headline:
    fontFamily: "Affogato, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.26em"
  title:
    fontFamily: "Affogato, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(0.95rem, 0.3rem + 1.4vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.2em"
  subtitle:
    fontFamily: "EB Garamond, Garamond, Georgia, serif"
    fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "EB Garamond, Garamond, Georgia, serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'kern', 'liga', 'onum'"
  label:
    fontFamily: "Affogato, Futura, Century Gothic, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    letterSpacing: "0.32em"
  script:
    fontFamily: "Oliver Quin, Brush Script MT, cursive"
    fontSize: "clamp(2.4rem, 1.8rem + 2vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4.2vw, 72px)"
  max: "1440px"
  section: "clamp(72px, 10vw, 152px)"
components:
  button-solid:
    backgroundColor: "{colors.night}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95em 2.4em"
    height: "48px"
  button-solid-hover:
    backgroundColor: "{colors.night-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.night}"
    rounded: "{rounded.none}"
    padding: "0.85em 2.2em"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.night}"
    textColor: "{colors.cream}"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.night-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95em 2.4em"
    height: "48px"
  button-gold-hover:
    backgroundColor: "{colors.gold-soft}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95em 2.4em"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.night-deep}"
  reserve-dock:
    backgroundColor: "{colors.night}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "15px 20px"
    height: "52px"
---

# Design System: Rompeto

## Overview

**Creative North Star: "A Carta da Casa"**

Every surface is set like the house's printed carta: a cream or night granite ground, a navy signature logotype, wide-tracked Affogato capitals for heads, Garamond italic for the voice underneath, and fine gold rules that divide the page the way a menu divides its courses. Content is organized in numbered tempos named for what they hold (I Reserva, II A casa, III Cardápios, IV Visite), never for menu courses, which visitors would read as dish sections; the numeral is part of the heading, not a label stacked above it.

The page opens on a full-viewport hero: real horizontal photos of the salão, lightly darkened by a navy veil, crossfading every 4 seconds with a slow Ken Burns drift, the cream logotype centered and one gold-line Reservar mesa button. Under reduced motion the first photo holds still. Below it, the carta keeps a small navy logotype as its masthead. Each content section carries exactly one brand line illustration in its top padding, alternating sides (Reserva left, A casa right, Cardápios left, Visite right), cream on night grounds and navy on cream, sliding in from its own edge as its continuous trailing line draws to that edge.

The density is calm. Sections breathe with tall vertical padding, type stays mostly at one weight, and the prestige comes from material (granite, real night photography, one-line illustrations) rather than from effects. Two grounds alternate: cream for daylight content (story, menus) and Night Harvest for evening content (hours, visit, footer). Gold is the only accent and lives in hairlines, numerals and one button.

Photography is real and credited (Fábio Mattos). It sits in square-cornered frames on a night-deep backing, cropped deliberately with object-position, never full-bleed behind text, with one exception: the panoramic dining-room plate that opens IV Visite runs edge to edge as its own band. The brand manual (Manual de Identidade Visual) is binding over this file.

**Key Characteristics:**
- Two granite grounds, cream and night, alternating by section.
- Affogato tracked capitals for heads and actions, EB Garamond for everything read, Oliver Quin for one humanizing script line per section at most.
- Gold hairlines (1px) as the structural device: column rules with diamond ends, menu title underlines, row dividers.
- Square corners everywhere (0px). No cards, no rounded chips.
- Real photography in framed plates; navy one-line illustrations in the margins.

## Colors

A two-ground institutional palette: deep navy and warm cream carry the page, antique gold is the single accent, tawny and greige-ink are quiet supporting voices.

### Primary
- **Night Harvest** (#0f293e): the predominant brand color. Evening grounds (with granite), logotype, headings on cream, solid buttons, the mobile reservation dock, selection highlight on cream.
- **Night Deep** (#0b1f30): pressed and hover state of navy buttons, text on gold fills, backing color behind photo frames while images load.

### Secondary
- **Antique Gold** (#b88b4a): hairlines, diamond rule ends, section numerals, focus ring (1.5px outline, 4px offset), the gold button fill. Translucent gold (`rgb(184 139 74 / 0.35–0.5)`) for divider rows on both grounds.
- **Soft Gold** (#c6a06c): gold for text on night grounds (italic subtitles, hours labels, visit links, the closing script line) and gold-button hover.
- **Gold Ink** (#7a5a2c): the darkened gold for small text on cream, where Antique Gold fails AA contrast (the season tag beside the menus subtitle).

### Tertiary
- **Porto Tawny** (#68302a): the warm wine accent on cream: the Rom·Pe·To script and menu-link hover. Never on night.

### Neutral
- **Cream** (#fdf7d8): the base ground, under granite, used instead of white; text and logotype on night.
- **Cream Soft** (#fefbec): a lighter veil (at 55% alpha) laid over the granite to lift the menus section, the most-read surface.
- **Greige Ink** (#6b6052): italic subtitles, menu notes and service notes on cream.
- **Warm Black** (#1e1b18): body text on cream. Never pure black.
- Cream at reduced alpha (`rgb(253 247 216 / 0.7–0.82)`) is the secondary text color on night.

Declared in the stylesheet but not yet used by any surface: Night Line (#246194), Cream Deep (#fcf3c5) and Greige (#9b8f80, only on the scrollbar). They come from the manual's tonal variations; use them only when a new surface needs that role.

### Named Rules
**The Two Grounds Rule.** A section is either cream granite or night granite. Text color follows the ground: Night Harvest and Warm Black on cream, Cream and Soft Gold on night. Night is for evening content (hours, visit, footer); cream is for reading (story, menus).

**The Gold Is Hairline Rule.** Gold appears as 1px rules, numerals, focus rings, and at most one gold-filled button per night section. It is never a large fill or a text block color on cream.

## Typography

**Display Font:** the logotype is an image (`/brand/logo-night.svg`, `/brand/logo-cream.svg`), never typeset.
**Heading / Label Font:** Affogato (with Futura, Century Gothic), self-hosted at 300/400/500, always uppercase with wide tracking.
**Body Font:** EB Garamond (with Garamond, Georgia), 400, 400 italic, 500.
**Script Font:** Oliver Quin (with Brush Script MT).
**Support serif:** Playfair Display 500, used only on the first-view "Reserve sua mesa" button (provisional, one use).

**Character:** geometric tracked capitals give the house its signage voice; Garamond with old-style figures gives it the voice of a printed menu. The italic carries the warmth.

### Hierarchy
- **Headline** (Affogato 400, clamp(1.5rem → 2.5rem), 1.15, tracking 0.26em, uppercase): section heads, set as "numeral + tempo name". The Roman numeral sits inline at 0.62em in Antique Gold.
- **Title** (Affogato 400, clamp(0.95rem → 1.75rem), 1.2, tracking 0.2em): the four tempo heads in the first viewport; menu titles at clamp(0.95rem → 1.2rem) weight 500 with a gold underline.
- **Subtitle** (Garamond italic, clamp(1.25rem → 1.75rem)): the line under every head. Greige Ink on cream, Soft Gold on night.
- **Body** (Garamond 400, clamp(1.0625rem → 1.25rem), 1.55, old-style figures): prose capped at 34em. Prices, hours and phone numbers switch to lining tabular figures.
- **Label** (Affogato 400, 0.75–0.8125rem, tracking 0.32em, uppercase): buttons, top-line hours, the dock, menu item names (0.8125rem, 0.18em), menu links (0.75rem, 0.24em).
- **Script** (Oliver Quin, clamp(2.4rem → 3.6rem) up to clamp(3.2rem → 6rem), 1): one humanizing line, Tawny on cream or Soft Gold on night ("Rom·Pe·To", "Até breve.").

### Named Rules
**The Caps Speak, Garamond Reads Rule.** Affogato is for heads, labels and actions only, never for a sentence. Anything a guest reads in full (prose, dish descriptions, notes, addresses) is Garamond.

**The One Script Line Rule.** Oliver Quin appears at most once per section, short, as an accent. Never for headings or navigation.

## Layout

A centered column of `max 1440px` with fluid side gutters (clamp(20px, 4.2vw, 72px)). Sections are full-width bands with vertical padding of clamp(72px, 10vw, 152px); spacing is fluid clamp() throughout rather than a fixed step scale.

- **First viewport:** a top line (hours left, outlined Reservar right), the centered logotype at min(31vw, 500px), then four equal tempo columns divided by gold rules, then the centered solid CTA with the address. It fills `100svh - 80px` on desktop.
- **Split sections:** two-column grids at 5fr / 6fr with large gaps (up to 112–128px), text beside a portrait plate (4:5 or 3:4). Alternate the photo side between sections.
- **Menus:** two columns of menu blocks with dotted leaders between name and price.
- **Breakpoints:** at 899px and below, every split collapses to one column, tempos go 2 × 2 (the rule before column 3 drops), the third margin illustration hides, and the fixed reservation dock appears. At 479px and below, tempo heads shrink to 0.75rem and hours labels narrow.

**The Respiro Rule.** Whitespace is the luxury. Keep section padding at the section token and never pack two heads into one band.

## Elevation & Depth

Flat. Depth comes from material, not shadows: granite texture under each ground, tonal ground changes between sections, and photographs in plates. The only shadow is the mobile reservation dock, which floats over content and needs separation.

The granite is a 900px-wide tiled texture under a translucent veil of the ground color (cream veil at 42%, night veil at 55%). In the shipped build the grain reads subtler than in the approved comp; the client accepted it as is. Treat the current veil values as the shipped state, not as a ceiling: if the grain is revisited, the comp is the reference.

### Shadow Vocabulary
- **Dock lift** (`box-shadow: 0 10px 28px rgb(11 31 48 / 0.28)`): only on the fixed mobile reservation dock.

### Named Rules
**The Material, Not Shadow Rule.** Surfaces never lift with shadows. Separation comes from a ground change, a gold hairline or a framed photo.

## Shapes

Square everywhere: buttons, frames, the dock and photos have 0px corners. Form comes from lines: 1px gold verticals with 8px diamond terminals between columns, 1px gold underlines under menu titles, translucent gold rules between rows, 1px dotted navy leaders (35% alpha) in menu lines. The one-line illustrations (glass, decanter, corkscrew) extend into a continuous navy stroke (1.1px, round caps) that runs toward the page edge. Photography is clipped into fixed aspect ratios (1.07 for tempo plates, 4:5, 3:4, and a fluid panoramic band).

## Components

### Buttons
Tracked capitals in a square box, quiet until hovered.
- **Shape:** square (0px), 1px border slot always present, min height 48px (44px outline).
- **Solid (primary):** Night Harvest fill, Cream text, padding 0.95em 2.4em, Affogato 0.8125rem tracking 0.32em. Hover: Night Deep fill with a gold border. The main reservation action on cream.
- **Outline:** 1px Night Harvest border, navy text, fills navy on hover. The small Reservar in the top line.
- **Gold:** Antique Gold fill with Night Deep text, hover Soft Gold. The reservation action on a night ground.
- **Line:** 1px gold border, Cream text, fills gold on hover. Secondary reservation on night.
- **Focus:** global 1.5px gold outline at 4px offset. Transitions 0.35s on the house ease (`cubic-bezier(0.16, 1, 0.3, 1)`).

### Navigation: the tempo columns
The first viewport's navigation is the carta itself: four links, each a tracked Affogato head (numeral · name), an italic subtitle, and a framed photo plate on Night Deep. Gold rules with diamond ends separate columns. Hover/focus: the photo scales to 1.04 over 1.1s, the subtitle takes a gold underline. On load, plates unveil (clip from 16% bottom inset and brighten from 0.6) with a 110ms stagger.

### Menu block
An Affogato 500 title over a 1px gold rule, an italic Greige Ink note, then items: name in tracked caps, a dotted leader, lining tabular price (no R$ shown, screen-reader only), and the Garamond description below. Closes with an underlined caps link (gold underline, 0.6em offset, Tawny on hover) to the full menu.

### Hours list
Definition rows divided by translucent gold rules on night: caps service label in Soft Gold on the left, day ranges in 82% cream and times in lining tabular figures on the right.

### Reservation dock (mobile)
Fixed 12px from the bottom and sides (plus safe area), Night Harvest with a 1px gold border and the dock lift shadow. Caps "Reservar mesa" plus italic Soft Gold "pelo WhatsApp". It slides in only after the first-view CTA scrolls out of view.

## Do's and Don'ts

### Do:
- **Do** put every surface on cream or night granite, with text colors that follow the ground (The Two Grounds Rule).
- **Do** head sections as an inline gold Roman numeral plus the tracked Affogato name, followed by a Garamond italic subtitle.
- **Do** use 1px gold hairlines (with 8px diamond ends for vertical column rules) as the main structural device.
- **Do** use Gold Ink (#7a5a2c) or Greige Ink (#6b6052) for small text on cream; Antique Gold is for rules and large numerals.
- **Do** frame real, credited photography in square plates with deliberate object-position crops.
- **Do** keep the WhatsApp reservation one tap away: a reserve button in the first view and in each night tempo section, and the dock on mobile.
- **Do** switch to lining tabular figures for prices, hours and phone numbers.

### Don't:
- **Don't** use AI-generated images of dishes or spaces; the brand manual forbids them. Only real photography.
- **Don't** typeset, recolor or redraw the Rompeto logotype; use the cream or night SVG.
- **Don't** round corners or lift surfaces with shadows (the dock is the only exception).
- **Don't** set sentences in Affogato or use Oliver Quin for headings.
- **Don't** use pure white or pure black; Cream and Warm Black replace them.
- **Don't** put a small tracked-caps label above a heading; the numeral lives inside the heading.
