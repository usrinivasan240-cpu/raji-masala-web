# Professional Portfolio — Next.js

A modern, responsive portfolio starter for a developer, designer, or creative professional.

## Stack
- Next.js + React + TypeScript
- CSS-only visual system and animations
- Responsive semantic HTML
- IntersectionObserver scroll reveals
- GitHub Actions CI
- Vercel-ready deployment

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Customize
Edit `app/page.tsx` and `components/Portfolio.tsx` to replace the demo identity, projects, skills, experience, social links and contact details. Replace the portrait placeholder with a real optimized image before launch.

## GitHub and deployment
Push to `main`; the included GitHub Actions workflow runs the production build on pushes and pull requests. Import the repository into Vercel for automatic production deployments and preview deployments for pull requests. Configure the custom domain and HTTPS in Vercel.

## Environment
Copy `.env.example` to `.env.local` for local development. Never commit real secrets. Set production environment variables in Vercel.

## Contact form
The included form is a front-end demo. Connect it to an email/form service or a secure server action before production.

## SEO and analytics
Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain and update metadata in `app/layout.tsx`. Add GA4 or Plausible only after configuring the appropriate privacy/consent flow.

## Accessibility and performance
The site uses semantic sections, labels, keyboard-focusable controls, responsive layouts, and minimal dependencies. Before launch, run Lighthouse and an accessibility checker, test keyboard navigation and focus states, and compress real image assets.

## Branch protection
In GitHub repository settings, protect `main` with pull-request review and require the `CI` status check before merging.