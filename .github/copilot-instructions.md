# Copilot Instructions for HillsView Portfolio

## Project Overview
- **Framework:** Next.js 14 (App Router)
- **Languages:** TypeScript, React
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, React Three Fiber
- **Theme:** Dark/Light via `next-themes`
- **Icons:** Lucide React

## Key Architecture & Patterns
- **App Directory:**
  - `src/app/` uses Next.js App Router. Each subfolder is a route (e.g., `services/`, `portfolio/`, `contact/`).
  - `layout.tsx` is the root layout; `globals.css` for global styles.
- **Components:**
  - All UI sections are modular React components in `src/components/` (e.g., `navbar.tsx`, `hero.tsx`, `services.tsx`).
  - Professional components include: `testimonials.tsx`, `credentials.tsx` for trust-building.
  - Theme context/provider in `theme-provider.tsx`.
- **Utilities:**
  - Shared helpers in `src/lib/utils.ts`.
- **Static Assets:**
  - Images and static files in `public/`.

## Developer Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production server:** `npm start`
- **Styling:** Use Tailwind utility classes. Configure in `tailwind.config.js`.
- **Type checking:** TypeScript enforced via `tsconfig.json`.

## Content Management
- **Portfolio Items:**
  - Add/update in `src/app/portfolio/page.tsx` (`portfolioItems` array).
  - Place images in `public/`.
- **Services:**
  - Edit `services` array in `src/components/services.tsx`.
- **Contact Info:**
  - Update in `src/components/contact.tsx`, `footer.tsx`, and `src/app/contact/page.tsx`.
  - Use company emails: `info@hillsviewproduction.com`, `bookings@hillsviewproduction.com`

## Project Conventions
- **Component Naming:** PascalCase for React components.
- **File Structure:**
  - Route = folder in `src/app/`.
  - Section/component = file in `src/components/`.
- **Styling:** Prefer Tailwind classes; use professional utility classes like `btn-primary`, `container-padding`, `section-spacing`.
- **Branding:** Focus on company identity (HillsView Productions) rather than individual personalities.
- **Typography:** Use `font-heading` (Playfair Display) for headings, `font-body` (Source Sans 3) for content.

## Professional Elements
- **Trust Indicators:** Testimonials, credentials, client stats, certifications
- **Company Focus:** All content emphasizes team/company rather than individual ownership
- **Contact:** Professional email addresses and business information
- **SEO:** Company-focused metadata and descriptions

## Integration & External Dependencies
- **Vercel:** Recommended for deployment. Build command: `npm run build`, output: `.next`.
- **Framer Motion/React Three Fiber:** Used for advanced UI/UX.
- **next-themes:** For theme switching.

## Examples
- To add a new service: Edit `services` array in `src/components/services.tsx`.
- To add a portfolio project: Update `portfolioItems` in `src/app/portfolio/page.tsx` and add images to `public/`.
- To update contact info: Use company emails like `info@hillsviewproduction.com`

---

For more details, see `README.md` and config files in the project root.
