# Zhaoyuan Wan (万钊源) — Personal Homepage (`wanoful.com`)

Personal academic & developer portfolio for **Zhaoyuan Wan (万钊源)**, undergraduate student in the **ACM Honors Class**, **Zhiyuan College, Shanghai Jiao Tong University (SJTU)**.

- **Domain**: [https://wanoful.com](https://wanoful.com)
- **Stack**: TypeScript + Vite (zero-bloat static build, instant bilingual `EN / 中文` switch, Dark/Light theme, interactive project filter & figure lightbox)

## Quick Start

```bash
# Install dependencies
pnpm install

# Start local dev server
pnpm dev

# Build production static bundle into dist/
pnpm build

# Preview production build locally
pnpm preview
```

## Updating Content

All profile information, bilingual descriptions (`en` / `zh`), research experiences, projects, teaching assistantships, coursework, and honors are centralized in:

- [`src/data/profile.ts`](./src/data/profile.ts)

Static files (CV PDF, papers, and figure images) are located in:

- `public/cv.pdf`
- `public/papers/`
- `public/assets/`
- `public/CNAME` (`wanoful.com`)

## Deploying to `wanoful.com` (GitHub Pages)

1. Push this repository to `https://github.com/wanoful/wanoful.github.io` (or any repository on GitHub).
2. In repository **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
3. Configure DNS records at your domain registrar for `wanoful.com`:
   - `A` records (`@`) pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `CNAME` record (`www`) pointing to `wanoful.github.io`.
4. Every push to `main` automatically runs [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) and publishes `dist/` with `CNAME` (`wanoful.com`).
