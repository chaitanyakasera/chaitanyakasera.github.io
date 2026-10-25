# Chetanya Prakash Kasera — Portfolio

**Live:** https://chaitanyakasera.github.io/

Personal portfolio of a Senior Android Developer (Kotlin & Java). Built with **React + Vite** — dark/light theme, responsive, scroll animations.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit content

Everything shown on the site lives in [`src/data.js`](src/data.js).
To show a photo, add `public/profile.jpg` (square image works best) — initials are shown until then.

## Deploy

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to the `gh-pages` branch (GitHub Pages source: `gh-pages` / root).
