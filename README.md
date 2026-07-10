# Mark Sivan Tamakloe — Portfolio

Personal portfolio site — **https://marksivan.github.io/**

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and React Three Fiber.

## Quick start

```bash
git clone https://github.com/marksivan/marksivan.github.io.git
cd marksivan.github.io
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Make changes

Edit files, then:

```bash
git add .
git commit -m "Describe your change"
git push origin main
```

Pushing to `main` automatically builds and deploys to **https://marksivan.github.io/** via GitHub Actions.

## What to edit

| Change | File |
|--------|------|
| Projects, experience, skills, hobbies | `src/data/*.ts` |
| Name, email, education | `src/data/personal.ts` |
| Social links | `src/data/socialLinks.ts` |
| Photography | `public/images/photography/` + `src/data/hobbies.ts` |
| Profile photo | `public/images/profile.jpg` |
| Résumé | `public/resume.pdf` |
| Layout, styling, animations | `src/components/`, `src/styles/` |

## Commands

```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # lint check
```

## Migrating from the old two-repo setup

If you still have code only in `marksivan/portfolio`, run once:

```bash
curl -sL https://raw.githubusercontent.com/marksivan/portfolio/main/migrate-to-user-site.sh | bash
```

That copies everything into `marksivan.github.io`. After migration, use **only** `marksivan.github.io` going forward.

## Tech stack

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · Framer Motion · React Three Fiber · React Router
