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

1. Push this folder to the `main` branch of `chaitanyakasera.github.io`:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/chaitanyakasera/chaitanyakasera.github.io.git
   git push -u origin main
   ```
2. The included workflow (`.github/workflows/deploy.yml`) builds the site and pushes it to the `gh-pages` branch on every push.
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` / `(root)` → Save**.
   The site will be live at `https://chaitanyakasera.github.io/`.
