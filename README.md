# Sapphire — Luxury Jewellery Atelier

A faithful editorial recreation of the high-end luxury jewellery landing page design for **Sapphire**. Built with React 19, Vite, semantic HTML5, and Tailwind CSS.

## Design Highlights

- **Dark Chocolate / Espresso Canvas**: Rich `--bg-page` (`#200D0B`) with subtle silk radial gradient lighting and warm terracotta accents.
- **Editorial Typography**:
  - **Bebas Neue**: Architectural, high-impact campaign headlines and labels.
  - **Cormorant Garamond (Italic 500)**: Singular emphasis words in headlines (`Unleash`, `jewellery`, `exclusive`, `Glamour`, `differently`, `best`, `you.`).
  - **Inter**: Precision body, micro-labels, tags, and e-commerce UI.
- **Ordered Sections**:
  0. **Header**: Minimalist dark header with hairline separator and accessible dialog on mobile.
  1. **Hero**: 12-column editorial layout featuring inline circular ring crop, presentation box card, and 3-tile bottom row (Avatars, 18K Gold Plated video portrait, and grey plinth ring).
  2. **New Jewellery Collections**: Smooth drag-and-scroll carousel of ivory cards (`#F5E9D5`) with isolated jewelry photography and pagination dots.
  3. **Exclusive Diamond Designs**: 3-zone layout with terracotta portrait, overlapping headline, ring on satin, and golden earring card.
  4. **Glamour / Handcrafted**: Full-height vertical hairline, chunky gold chain on plinth, and right-aligned campaign title.
  5. **New Arrivals**: Framed terracotta panel (`135deg` gradient), portrait, ruby earrings, and intertwined wedding bands.
  6. **Infinite Sparkle**: Atelier showcase featuring architectural envelope ring display, blonde portrait with overlapping card, and store finder.
  7. **Personalised Banner & Footer**: Continuous terracotta exhibition with hanging crescent pendant, bespoke typography, navigation columns, and social links.

## Getting Started

### Prerequisites
- Node.js 18+ or 22
- npm

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Launches the development server on `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates optimized static production assets into `/dist`.

### Preview Production Build
```bash
npm run preview
```

## Vercel Deployment

This project is fully static and zero-server. To deploy to Vercel:
1. Connect this repository to your Vercel account.
2. Set Framework Preset: **Vite**.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy!
