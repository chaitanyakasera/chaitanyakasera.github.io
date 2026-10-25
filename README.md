# Chetanya Prakash Kasera — Portfolio

Personal portfolio built with **React + Vite**. Dark/light theme, responsive, scroll animations.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit content

Everything shown on the site lives in [`src/data.js`](src/data.js).
To show a photo, add `public/profile.jpg` (square image works best) — initials are shown until then.

## Deploy to GitHub Pages

1. Create a GitHub repo (e.g. `portfolio`) and push this folder to its `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/chaitanyakasera/portfolio.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and publishes on every push.
   The site will be live at `https://chaitanyakasera.github.io/portfolio/`.
