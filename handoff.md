# Urban Axis Studio - Project Handoff

This document tracks all changes, bug fixes, design decisions, and architectural updates made to the Urban Axis Studio website. It serves as context for future sessions.

## Project Stack
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Animation/Motion:** Framer Motion, GSAP (with ScrollTrigger)
- **Scrolling:** Lenis (Smooth Scroll)
- **Routing:** `react-router-dom`
- **Feedback Tool:** Agentation

---

## Work Completed

### 1. Feature Cleanup
- **Completely removed the "Projects" section:**
  - Deleted `src/Catalogue.jsx`.
  - Removed `Projects` component and associated routing (`/projects`, `/project/:projectId`) from `src/App.jsx`.
  - Removed "View Projects" CTAs and links from the Hero section, Navbar (Desktop & Mobile), and Footer.

### 2. Branding & Typography Integration
- **Logo Design (Image Integration):**
  - Copied a custom transparent logo provided by the user (`Screenshot_2026-10-01_191255-removebg-preview.png`) into `public/images/logo.png`.
  - Replaced the initial CSS-based bespoke logo with this actual image asset.
  - Integrated the logo smoothly into the Desktop Navbar, Mobile Navbar, and Footer using responsive `img` tags (styled with `w-48` / `w-36` and `object-contain drop-shadow-md`).
- **Design Tokens (Tailwind Config):**
  - Configured custom font-families in `tailwind.config.js`: `logo-main`, `logo-sub`, and switched body text from `Space Grotesk` to `Manrope` to avoid generic startup UI clichés.
  - Added semantic color token: `brand-gold` (`#cda96d`).

### 3. UI & UX Refinements
- **Global Loader Fix:** 
  - Modified `<GlobalLoader />` in `App.jsx` to run *only* on the initial application load by removing `[location.pathname]` from its `useEffect` dependency array. This eliminated the frustrating 5-second video delay during internal navigation.
- **Dark Theme Consistency:** 
  - Overhauled `src/AboutFounder.jsx` to use native dark theme tokens (`bg-surface-container-lowest`, `text-on-surface`, `border-white/5`), replacing the jarring white background.
- **Cinematic Hover States (Ken Burns):** 
  - Replaced abrupt image scale bumps in the Practice section with an ultra-slow (10000ms), continuous linear zoom to create an expensive, voluminous feel.
- **Hero Readability:** 
  - Added a deep drop shadow (`drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]`) to the hero text ("Architecture of Quiet Intent") to ensure legibility across varying background images.

### 4. Advanced Motion Architecture
- **Fluid Page Transitions:** 
  - Refactored routing in `App.jsx` to use Framer Motion's `<AnimatePresence mode="wait">`. 
  - Created a custom `<AnimatedRoutes>` and `<PageTransition>` component to apply a seamless blur-fade effect when navigating between pages (Home, About Us, Practice, Narrative).
- **Mobile Menu Stagger Animation:** 
  - Rewrote the mobile menu rendering logic using `<AnimatePresence>` and `<motion.div>` variants to create a smooth, staggered "waterfall" slide-up effect for navigation links.

### 5. Tooling & Documentation
- **Agentation Setup:** 
  - Installed `agentation` via npm and integrated `<Agentation />` into the root layout of `App.jsx` for visual AI feedback.
- **Brand Guidelines Deck:** 
  - Created `public/brand-guidelines.html`, a standalone interactive HTML presentation documenting the design system, typography architecture, color palette, and UX motion principles. (Moved to `public/` so Vite serves it statically without routing conflicts).

---

## Known Behaviors & Notes for Next Session
- **Routing:** All routes are strictly animated. Ensure any new `<Route>` is wrapped inside the `<AnimatedRoutes>` component to maintain transition fidelity.
- **Styling Clichés:** We are strictly avoiding the "30 Web Design Choices to Avoid" (e.g., pure white backgrounds, overused startup fonts, liquid glass everywhere). Stick to the established dark `surface-container` palette and `Manrope` typography.
- **Background Assets:** The `loadingscreen.mp4` video and `background.jpeg` are currently relied upon for the immersive feel.

---
*Last Updated: 2026-10-01*
