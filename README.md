# Mark Sivan Tamakloe — Portfolio

Personal portfolio site — **https://marksivan.github.io/**

## Which repo to use?

| Repo | Purpose |
|------|---------|
| **[marksivan.github.io](https://github.com/marksivan/marksivan.github.io)** | **Primary** — edit here, push here, site deploys automatically |
| [portfolio](https://github.com/marksivan/portfolio) | Mirror — auto-syncs to `marksivan.github.io` on every push to `main` |

After initial setup below, **only clone and edit `marksivan.github.io`**.

## Quick start

```bash
git clone https://github.com/marksivan/marksivan.github.io.git
cd marksivan.github.io
npm install
npm run dev
```

Push to `main` → GitHub Actions builds and deploys to **https://marksivan.github.io/**

## One-time sync setup (if marksivan.github.io is missing source files)

### Option A — Run locally (fastest)

```bash
curl -sL https://raw.githubusercontent.com/marksivan/portfolio/main/migrate-to-user-site.sh | bash
```

### Option B — Automatic sync from portfolio (no terminal after setup)

1. Create a [GitHub Personal Access Token](https://github.com/settings/tokens) with **repo** scope
2. On **marksivan/portfolio** → Settings → Secrets → Actions, add:
   - `USER_SITE_SYNC_TOKEN` = your PAT
3. Go to **portfolio → Actions → Sync to marksivan.github.io → Run workflow**

Every future push to `portfolio/main` will also sync to `marksivan.github.io`.

## Contact form

1. Create a form at [formspree.io](https://formspree.io) (Forms tab → + New Form)
2. Set notifications to **marktamakloe21@gmail.com**
3. On **marksivan.github.io** → Settings → Secrets → Actions, add:
   - `VITE_CONTACT_FORM_URL` = `https://formspree.io/f/your-id`
4. Re-run **Deploy to GitHub Pages**

## What to edit

| Change | File |
|--------|------|
| Projects, experience, skills, hobbies | `src/data/*.ts` |
| Name, bio | `src/data/personal.ts` |
| Social links | `src/data/socialLinks.ts` |
| Photography | `public/images/photography/` + `src/data/hobbies.ts` |
| Profile photo | `public/images/profile.jpg` |

## Commands

```bash
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # preview build
npm run lint
```
