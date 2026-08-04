# Broughton Web Development

**🌐 [jacoblbagent.github.io/broughton-web-development](https://jacoblbagent.github.io/broughton-web-development/)**

A marketing landing page for a small-business web presence service serving Brevard, NC and the surrounding WNC area.

Built with **React + TypeScript + Vite**. No external UI libraries or Tailwind — custom CSS with CSS custom properties for theming.

## Features

- **Live CMS demo** — Interactive side-by-side CMS and website preview. Click any preview element to focus the corresponding input. Presets for 8 business types (cafe, restaurant, bike shop, mechanic, barber, bakery, lawn care, pet grooming). Live preview updates as you type.
- **Dark mode** — Theme toggle with light/dark color schemes.
- **Mobile responsive** — Fully responsive down to phone-sized viewports.
- **Multi-page** — Home, Work, About, Contact pages with React Router.

## Sections

- Hero with town cycler animation
- Problem section — visual cards with SVG icons
- Services — service category cards
- CMS demo — live content editor with presets
- Testimonials
- Process steps (Talk → Build → Launch)
- FAQ accordion
- CTA / Contact

## Usage

```bash
npm install
npm run dev      # development server
npm run build    # production build to dist/
npm run preview  # preview production build
```

## Deployment

Deployed via GitHub Pages. Push to `main` triggers the build action.

**GitHub:** https://github.com/jacoblbagent/broughton-web-development