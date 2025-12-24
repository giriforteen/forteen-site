# Forteen Consulting — Next.js Website

Bold, vibrant, multi-page site for Forteen Consulting.

## Stack
- Next.js 14 (pages router)
- Global CSS (no external frameworks)
- SEO: favicon, Open Graph, Twitter cards
- Contact form via EmailJS (CDN)

## Quick Start
1. Install Node 18+.
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill your EmailJS values.
4. `npm run dev`

## Deploy
- Vercel: import this repo, build command: `next build`, output: `.next`
- Netlify: use Next adapter or deploy as SSR.

## EmailJS Setup
- Create an EmailJS account (https://www.emailjs.com/).
- Create a service and template.
- In `.env.local`, add:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key`

The Contact page loads the EmailJS CDN and sends the form via `window.emailjs.sendForm(...)`.

## SEO Files
- `public/favicon.svg`
- `public/og-image.png` (1200×630)
- `public/twitter-card.png` (1200×630)
- `public/robots.txt`
- `public/sitemap.xml`

## Pages
- `/` Home
- `/about` About
- `/services` Services
- `/programs` Programs (with Active Listening program)
- `/contact` Contact (form + email)

## Notes
- Colors: Orange `#F28B30`, Navy `#1E293B`; gradients extended for web.
- Update footer links and social profiles as needed.
- Replace OG/Twitter images with your brand visuals when ready.
 
# Rollback to Dec 18
