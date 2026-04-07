# OneClickMed — Next.js + Tailwind CSS

A pixel-perfect Next.js 14 + Tailwind CSS implementation of the OneClickMed landing page.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS 3**
- **TypeScript**
- **Fonts**: Avenir (primary text) + Operatta 8 (selected emphasized words)

## Brand Colors

| Token | Hex |
|-------|-----|
| Navy Blue | `#0124AA` |
| Cobalt | `#0A50E1` |
| Ice Blue | `#D8EFFC` |
| Beige | `#FFEAC9` |
| White | `#FFFFFF` |
| Salmon Red | `#E55C38` |
| Light Yellow | `#FFF6A5` |
| Lavender | `#A888F9` |
| Blush Pink | `#F5C9CA` |
| Black | `#000000` |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
oneclickmed/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with font setup
│   └── page.tsx             # Home page (assembles all sections)
├── components/
│   ├── Header.tsx           # Sticky header with nav + dropdown
│   ├── Hero.tsx             # Hero section
│   ├── Stats.tsx            # 3-column stats cards
│   ├── Backers.tsx          # Backer logos
│   ├── Products.tsx         # Digital Health / Beta Health tabs
│   ├── About.tsx            # Who We Are section
│   ├── Mission.tsx          # Mission hover cards
│   ├── Services.tsx         # Auto-scrolling services carousel
│   ├── HowToStart.tsx       # Accordion getting started steps
│   ├── CTA.tsx              # Early access CTA banner
│   ├── Resources.tsx        # Featured blog posts grid
│   └── Footer.tsx           # Full footer with subscribe form
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```
