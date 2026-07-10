# marksivan.github.io — Portfolio source

**Live site:** https://marksivan.github.io/

This codebase belongs in **[marksivan/marksivan.github.io](https://github.com/marksivan/marksivan.github.io)** only. The old `portfolio` repo is retired.

## Local development

```bash
git clone https://github.com/marksivan/marksivan.github.io.git
cd marksivan.github.io
npm install
cp .env.example .env   # optional; Formspree URL is already in the deploy workflow
npm run dev
```

## Deploy

Pushes to `main` on `marksivan.github.io` trigger GitHub Actions → GitHub Pages.

Contact form endpoint: `https://formspree.io/f/mkoldbbo`

## One-time sync (if your user-site repo is behind)

If you still have pending changes on the old `portfolio` branch, run **once** from your machine:

```bash
curl -sL https://raw.githubusercontent.com/marksivan/portfolio/cursor/portfolio-edits-f759/migrate-to-user-site.sh | bash
```

Then delete the `portfolio` repo and point Cursor Cloud Agents at `marksivan.github.io`.
