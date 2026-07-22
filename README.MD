# AkshathKarthik.github.io

Personal portfolio website for Akshath Karthik — Healthcare Academy scholar, aspiring
physician–scientist, and research enthusiast. Built with **Next.js** (static export) and
deployed automatically to **GitHub Pages**.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [@fontsource/inter](https://fontsource.org/) (self-hosted Inter font — no external font requests)
- TypeScript
- GitHub Actions for CI/CD to GitHub Pages

## Project structure

```
.
├── app/                  # Pages (App Router)
│   ├── page.tsx          # Home
│   ├── about/
│   ├── academics/
│   ├── research/
│   ├── healthcare/
│   ├── projects/
│   ├── leadership/
│   ├── blog/
│   ├── resume/
│   ├── contact/
│   ├── layout.tsx        # Shared layout (Navbar + Footer + dark mode)
│   ├── globals.css       # Design tokens (colors, fonts) + theme
│   └── not-found.tsx     # 404 page
├── components/           # Navbar, Footer, ThemeToggle, shared UI primitives
├── public/
│   └── assets/
│       ├── images/       # Add your photos here
│       ├── docs/         # Add Resume.pdf and ResearchProfile.pdf here
│       └── icons/        # Icon source files
├── .github/workflows/
│   └── deploy.yml        # Builds and deploys to GitHub Pages on every push to main
└── next.config.ts        # Configured for static export (output: "export")
```

> Note: because this site is built with Next.js instead of hand-written HTML, the
> `assets/css` and `assets/js` folders from the original plan aren't needed — Next.js/
> Tailwind compile and bundle CSS/JS automatically. The `assets/images`, `assets/docs`,
> and `assets/icons` folders are kept exactly as planned for your own files.

## Getting started locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Building for production

```bash
npm run build
```

This generates a fully static site in the `out/` folder (via `output: "export"` in
`next.config.ts`), which is what gets deployed to GitHub Pages.

## Deploying to GitHub Pages

1. Push this repository to **github.com/AkshathKarthik/AkshathKarthik.github.io**
   (the repo name must match exactly for a user site).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to the `main` branch — the included workflow (`.github/workflows/deploy.yml`)
   will automatically build and deploy the site. You can also trigger it manually from
   the **Actions** tab.
4. Your site will be live at `https://akshathkarthik.github.io/`.

## Adding your content

- **Photo**: drop an image in `public/assets/images/` and reference it on the About page
  (`app/about/page.tsx`), replacing the placeholder box.
- **Resume / Research Profile**: replace the placeholder files in `public/assets/docs/`
  with your real `Resume.pdf` and `ResearchProfile.pdf` — the Resume page already links
  to `/assets/docs/Resume.pdf` and `/assets/docs/ResearchProfile.pdf`.
- **Text content**: every page currently has clearly-marked placeholder copy — just
  search each `app/*/page.tsx` file and replace the placeholder paragraphs with your own
  writing.
- **Email**: update the `mailto:` link in `app/contact/page.tsx`.

## Design system

| Token       | Value      | Use                         |
|-------------|------------|------------------------------|
| Navy        | `#0B1F3A`  | Primary text / headlines     |
| Accent      | `#0056D2`  | Links, buttons, highlights   |
| Light Gray  | `#F8F9FB`  | Section backgrounds          |
| Slate       | `#5A6675`  | Secondary/muted text         |

Font: **Inter**. All tokens live in `app/globals.css` and are wired into Tailwind via
`@theme inline`, so classes like `text-accent`, `bg-surface`, and `text-muted` are
available throughout the app. Dark mode is a class-based toggle (`.dark` on `<html>`)
persisted to `localStorage`.

## Roadmap (not yet built)

- Timeline components for volunteer hours, research milestones, and awards
- Working contact form (will need a static-friendly backend like Formspree, since
  GitHub Pages can't run server code)
- Gallery page
- Custom domain (`akshathkarthik.com`) — once ready, add a `CNAME` file to `public/`
  containing the domain and configure DNS per GitHub's custom domain docs
