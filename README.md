# Conquest by edept: Tech Olympiad 2026

React 19 + Vite + TypeScript + Tailwind CSS v4 + React Router 7.
(Converted from the original Next.js App Router project.)

## Scripts

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve dist/ locally
npm run lint
```

## Routes

| Path                | Component                                        |
| ------------------- | ------------------------------------------------ |
| `/`                 | `src/pages/HomePage.tsx`                         |
| `/register`         | `src/pages/register/RegisterPage.tsx`            |
| `/register/success` | `src/pages/register/RegistrationSuccessPage.tsx` |
| `/terms`            | `src/pages/TermsPage.tsx`                        |
| `/privacy`          | `src/pages/PrivacyPage.tsx`                      |
| `*`                 | `src/pages/NotFoundPage.tsx`                     |

Routes are declared in `src/App.tsx`.

## Deploying

This is a single-page app, so the host must serve `index.html` for every path
(otherwise refreshing `/register` returns 404). Included:

- `vercel.json` (Vercel rewrites)
- `public/_redirects` (Netlify)

For Apache/Nginx/S3, add an equivalent fallback to `index.html`.

## What changed vs. Next.js

| Next.js                        | Vite version                                |
| ------------------------------ | ------------------------------------------- |
| `app/` file-based routing      | `react-router-dom` routes in `src/App.tsx`  |
| `next/link` `href`             | `Link` `to` (hash links stay plain `<a>`)   |
| `useRouter().push()`           | `useNavigate()`                             |
| `export const metadata`        | `useDocumentTitle()` hook (`src/hooks`)     |
| `next/font/google` (Geist)     | Google Fonts `<link>` in `index.html`       |
| `app/layout.tsx`               | `index.html` + `src/main.tsx`               |
| `app/globals.css`              | `src/index.css`                             |
| `@tailwindcss/turbopack`       | `@tailwindcss/vite`                         |
| Auto scroll-to-top on navigate | `src/components/routing/ScrollToTop.tsx`    |

Note: titles and descriptions are set client-side. If you need per-page meta
tags for social previews or crawlers that don't run JS, add prerendering
or keep those pages on SSR.
