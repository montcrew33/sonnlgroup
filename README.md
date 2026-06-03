# Handoff: Sonn Law Group Website

## Overview
A fully built marketing website for Sonn Law Group (securities fraud & investment loss recovery law firm), adapted from the "Vort" private-markets template with a navy-blue brand palette, serif SONN Law Group logo, and interactive sections. The site is complete and ready to deploy — the task here is to **push it to GitHub and fix the Vercel deployment**.

## About the Design Files
The files in this bundle are **production-ready static HTML/CSS/JSX** — not just mockups. They use React + Babel loaded from CDN (no build step required). The site can be deployed as-is to any static host (Vercel, Netlify, GitHub Pages).

## Fidelity
**High-fidelity**: Pixel-perfect implementation with final colors, typography, spacing, real logo assets, and full interactivity (nav, carousel, FAQ accordion, case-review modal).

## Immediate Task: Fix Deployment

### Problem
The GitHub repo `montcrew33/SONNlawgroup` is either empty or has files in the wrong structure, causing a 404 on Vercel.

### Solution
1. Ensure these files are at the **root** of the `montcrew33/SONNlawgroup` repo:
   ```
   index.html          ← must be at root
   kit.css
   colors_and_type.css
   components.jsx
   sections.jsx
   app.jsx
   image-slot.js
   assets/
     sonn-law-logo.png
     sonn-law-logo-white.png
   ```

2. Push to GitHub:
   ```bash
   git init
   git remote add origin https://github.com/montcrew33/SONNlawgroup.git
   git add .
   git commit -m "Initial deploy: Sonn Law Group website"
   git branch -M main
   git push -u origin main --force
   ```

3. On Vercel:
   - Import `montcrew33/SONNlawgroup`
   - **Framework Preset**: Other (static)
   - **Build Command**: (leave empty)
   - **Output Directory**: `.` (root)
   - Deploy

## Site Structure

| File | Purpose |
|------|---------|
| `index.html` | Entry point — loads React, Lucide, Babel, and all JSX components |
| `colors_and_type.css` | All design tokens: brand navy palette, Hanken Grotesk type scale, spacing, radii, shadows |
| `kit.css` | Component styles: nav, hero, sections, cards, buttons, footer |
| `components.jsx` | Nav, Hero, CtaBand, Footer, CaseModal components |
| `sections.jsx` | InsightIntro, Approach, Cases, Trusted, Leadership, Insights, Faq |
| `app.jsx` | Root App component — composes all sections |
| `image-slot.js` | Drag-and-drop image placeholder web component |
| `assets/` | Logo PNGs (navy + white knockout) |

## Screens / Views

### Hero
- Full-bleed background image (`https://i.imgur.com/uVN0MfJ.jpg`) with navy overlay + blue tint sheet
- 3-column floating nav: white SONN logo left | dark glass pill (links) center | "Get In Touch" CTA right
- Nav is `position:absolute` (scrolls away with hero, not fixed)
- H1: weight 300, "Recovering What's Yours / When Trust Is Broken" (two-line, two-tone)
- Glass stat card bottom-right: "$2.3B+ recovered for harmed investors"

### Every Case Begins With Insight
- Two-column grid: photo card (lawyers image) with glass float-stat overlay | right column with two tiles (Nationwide Reach + Disciplined Process)

### Our Approach
- Background: `https://i.imgur.com/XTYhrYJ.jpg` faded with `rgba(238,243,247,0.91)` overlay
- Feature rows with Lucide icons, logos strip below

### Leadership
- 3-column portrait grid
- Jeffrey R. Sonn, Esq. — `https://i.imgur.com/pvMonzy.jpg`
- Adolfo J. Anzola — `https://i.imgur.com/oiPTlVP.jpg`
- Brian B. Pastor, Esq. — `https://i.imgur.com/hGf5daa.jpg`

### Insights / Blog
- 3-column article card grid with image-slot placeholders

### FAQ Accordion
- Left: heading + CTA | Right: expandable Q&A items

### Footer
- Dark navy (`#152a47`), white logo, 3 column link groups, legal disclaimer

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--blue-900` | `#152a47` | Dark sections, footer |
| `--blue-700` | `#1e3f6e` | Primary CTA buttons |
| `--blue-400` | `#7097c8` | Accent (heading 2nd line) |
| `--blue-50` | `#f3f6fc` | Tinted section bg |
| `--font-display` | Hanken Grotesk | All headings |
| `--radius-lg` | `22px` | Standard cards |
| `--radius-pill` | `999px` | Buttons |

## Dependencies (all CDN — no npm needed)
- React 18.3.1
- ReactDOM 18.3.1
- Babel Standalone 7.29.0
- Lucide (latest) — thin line icons
- Google Fonts: Hanken Grotesk (300, 400, 500, 600, 700, 800)

## Assets
- `assets/sonn-law-logo.png` — navy serif wordmark (1613×644, transparent PNG)
- `assets/sonn-law-logo-white.png` — white knockout version (for dark/hero backgrounds)
- Hero image: imgur `uVN0MfJ` (financial/Ben Franklin)
- Approach bg: imgur `XTYhrYJ`
- Leadership portraits: imgur `pvMonzy`, `oiPTlVP`, `hGf5daa`

## Known Issues to Fix
1. **Imgur images** may occasionally be blocked in some CSP environments — replace with self-hosted images if needed
2. **Runtime Babel** is used for JSX (fine for this site, but for production scale, a proper build step with Vite/Next.js would be better)
