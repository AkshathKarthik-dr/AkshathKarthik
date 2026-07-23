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
│   ├── research/         # includes Projects (Python/science fair work)
│   ├── healthcare/       # includes Leadership & Community Service
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

## Editing site content (no coding needed)

Almost every piece of text on the site \u2014 bio, GPA, coursework, research interests,
volunteer work, awards, project descriptions, the home page snapshot, even the contact
email \u2014 lives in **one file**: `content/site-content.json`.

To update anything: open that file, find the field, and edit the text between the
quotes. Save, commit, push \u2014 nothing else needs to change. You never need to touch a
`.tsx` file for ordinary content updates.

**How the file is organized** (matches the site's pages):

| Section in the file | Shows up on |
|---|---|
| `home` | Home page \u2014 role tags in the hero, mission blurb, academic snapshot stats, Milestones timeline, optional featured projects, optional news |
| `about` | About page \u2014 biography, mission, career vision, values |
| `academics` | Academics page \u2014 GPA, class rank, honors, coursework, AP classes, program description, certifications, awards |
| `research` | Research page \u2014 status note, interests, faculty interests, current reading, projects (web/Python/healthcare-app/science-fair), coding skills, future projects |
| `healthcare` | Healthcare page \u2014 volunteer work, clinical experience, shadowing, certifications, leadership, community service, journey timeline |
| `contact` | Contact page and footer \u2014 your email address |

**Empty lists hide themselves.** `home.featuredProjects`, `home.news`, and every list under
`research` (Python projects, web projects, healthcare apps, science fair, future
projects) will simply not render a section if left as `[]` \u2014 so it's safe to leave
things empty until you have real content, instead of showing "add something here"
placeholder text to visitors.

**Adding or removing list items** (awards, projects, coursework tags, values, etc.):
these are all written as a list in `[ ]` brackets. Copy one existing entry inside the
brackets (including its `{ }` if it's an object), edit the text, and add or remove a
comma-separated entry. For example, to add a fourth value on the About page:
```json
"values": [
  { "title": "Curiosity", "description": "..." },
  { "title": "Integrity", "description": "..." },
  { "title": "Service", "description": "..." },
  { "title": "Resilience", "description": "Add your description here." }
]
```

**One formatting rule to watch for**: JSON requires a comma after every item except the
last one in a list, and no trailing comma after the very last item. If the site fails
to build after an edit, this is the most common cause \u2014 check the Actions tab for the
error, or paste the file back to me and I'll spot it.

## Adding a blog post (no JSX/coding needed)

Blog posts live as plain Markdown files in `content/blog/`. To publish a new one:

1. Duplicate `content/blog/_template.md` in the same folder.
2. Rename it to a URL-friendly slug, e.g. `content/blog/my-new-post.md` (this becomes
   the page's web address: `/blog/my-new-post`).
3. Edit the top section (between the `---` lines) — this is called "frontmatter":
   ```
   ---
   title: "Your Post Title Here"
   date: "2026-08-01"
   tag: "Medicine"
   excerpt: "One or two sentence summary shown on the blog listing page."
   draft: true
   ---
   ```
4. Write the post body below the second `---` using normal Markdown: `## ` for
   subheadings, blank lines between paragraphs, `- ` for bullet points, `**bold**`,
   `_italic_`, `[link text](https://...)`.
5. When it's ready to go live, change `draft: true` to `draft: false`.
6. Commit and push — the post appears automatically on `/blog` and gets its own page
   at `/blog/your-slug`. No other file needs to change.

The five starter posts already in `content/blog/` (AI in healthcare, cardiology, etc.)
are set to `draft: true` — write the content and flip that flag when each is ready.

## Photo, resume, and PDFs (not text — handled separately)

The content JSON above covers all text. A few things live as files instead:

- **Photo**: drop an image in `public/assets/images/` and reference it on the About page
  (`app/about/page.tsx`), replacing the placeholder box.
- **Resume / Research Profile**: replace the placeholder files in `public/assets/docs/`
  with your real `Resume.pdf` and `ResearchProfile.pdf` — the Resume page already links
  to `/assets/docs/Resume.pdf` and `/assets/docs/ResearchProfile.pdf`.
- **Email**: set in `content/site-content.json` under `contact.email` — used by both the
  Contact page and the footer automatically.

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
