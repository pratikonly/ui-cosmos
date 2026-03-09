# 🌌 UI Cosmos — Next.js

> 30 UI design styles. Each gets its own dedicated showcase page with a clean slug URL.

## File Structure

```
ui-cosmos/
├── pages/
│   ├── index.js              ← Homepage: grid of all 30 styles
│   ├── _app.js               ← Global styles injected
│   ├── _document.js          ← HTML head / favicon
│   └── styles/
│       └── [slug].js         ← Dynamic page for each style
│
├── components/
│   ├── Navbar.js             ← Shared top navigation
│   ├── StyleCard.js          ← Card on homepage with preview + redirect
│   └── StylePreview.js       ← Live mini preview rendered in each card
│
├── lib/
│   └── styles-data.js        ← Master data: all 30 styles, slugs, metadata
│
├── styles/
│   └── globals.css           ← Base CSS reset + font imports
│
├── package.json
└── next.config.js
```

## All 30 Slug URLs

| # | Style | URL |
|---|-------|-----|
| 01 | Neumorphism | `/styles/neumorphism` |
| 02 | Glassmorphism | `/styles/glassmorphism` |
| 03 | Neo-Brutalism | `/styles/neo-brutalism` |
| 04 | Flat Design 2.0 | `/styles/flat-design` |
| 05 | Material Design 3 | `/styles/material-design` |
| 06 | Skeuomorphism | `/styles/skeuomorphism` |
| 07 | Aurora / Mesh | `/styles/aurora` |
| 08 | Dark Minimal | `/styles/dark-minimal` |
| 09 | Retro / Y2K | `/styles/retro-y2k` |
| 10 | Claymorphism | `/styles/claymorphism` |
| 11 | Bento Grid | `/styles/bento-grid` |
| 12 | Dopamine UI | `/styles/dopamine-ui` |
| 13 | Terminal / CLI | `/styles/terminal-cli` |
| 14 | Swiss / International | `/styles/swiss-international` |
| 15 | Pastel / Soft UI | `/styles/pastel-soft` |
| 16 | Maximalism | `/styles/maximalism` |
| 17 | Monochromatic | `/styles/monochromatic` |
| 18 | Typographic UI | `/styles/typographic` |
| 19 | Grain Texture | `/styles/grain-texture` |
| 20 | Geometric | `/styles/geometric` |
| 21 | Organic Blob | `/styles/organic-blob` |
| 22 | Card-Based UI | `/styles/card-based` |
| 23 | Dashboard UI | `/styles/dashboard-ui` |
| 24 | Magazine / Editorial | `/styles/magazine-editorial` |
| 25 | Parallax / Scroll | `/styles/parallax-scroll` |
| 26 | Micro-Interaction | `/styles/micro-interaction` |
| 27 | Vaporwave | `/styles/vaporwave` |
| 28 | Cottagecore | `/styles/cottagecore` |
| 29 | Memphis Design | `/styles/memphis-design` |
| 30 | Pixel Art | `/styles/pixel-art` |

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## Deploy to Vercel (Recommended)

### Option A — GitHub + Vercel (easiest)
```bash
git init
git add .
git commit -m "🚀 UI Cosmos - 30 design styles"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ui-cosmos.git
git push -u origin main
```
Then: **vercel.com/new** → Import `ui-cosmos` → Framework: **Next.js** → Deploy ✅

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

Your site goes live at: `ui-cosmos.vercel.app`

---

## Homepage Features
- Live mini previews for each of the 30 styles (no images, pure CSS/JS)
- Search by style name, slug, or website type
- Filter by category (Visual, Functional, Niche, Dev, etc.)
- Each card shows: preview, slug URL, best-for website suggestions, redirect button

## Style Page Features
- Full-page showcase landing page for each style
- Fixed nav with slug displayed
- Meta bar showing category, tag, and top 3 best-use cases  
- Prev / Next navigation between styles
- Back to home CTA

---

Built with Next.js 14 · Zero external UI libraries · Deploy on Vercel
