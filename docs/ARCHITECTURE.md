# Architecture Documentation

This document describes the high-level technical architecture of the AI Engineer Portfolio.

## 🏗️ System Overview
The portfolio is designed as a **Static Site (SSG)** to ensure sub-second load times and zero-cost hosting. It leverages Next.js App Router's architectural pattern to separate data, logic, and presentation.

### Data-Driven Architecture
The application follows a "Data First" philosophy. All content is decoupled from the UI:
1. **JSON Store (`../src/data/*.json`)**: The source of truth.
2. **TypeScript Interfaces (`../src/types/index.ts`)**: Ensures data integrity.
3. **Sections (`../src/sections/*.tsx`)**: Consume JSON data and map them to UI patterns.

## ⚡ Deployment Pipeline
The build process is optimized for **Azure Static Web Apps**:
- **Output Mode**: `export` (configured in `next.config.mjs`).
- **Build Command**: `npm run build`.
- **Static Artifacts**: All pages are pre-rendered as HTML/CSS/JS, removing the need for a Node.js server in production.

## 🎨 Creative Engineering
### Hero Particle System (`src/sections/Hero.tsx`)
- **Canvas-based**: Uses HTML5 Canvas for high-performance rendering.
- **Dynamic Content Pairing**: Features a semantic `<h1>` that pairs the primary `name` (Playfair Serif) with a dynamic `tagline` (Inter 300 Italic), driven centrally by `about.json`.
- **Dynamic Connection Algorithm**: Calculates distances between nodes in real-time.
- **Performance Optimized**: Includes resize debounce logic, device-pixel-ratio scaling, and `prefers-reduced-motion` fallbacks.

## 🛠️ Section & Style Mapping
Use this table to quickly locate the code and styles for any part of the website.

| Section / Component | Logic File (.tsx) | Style File (.module.css) |
| :--- | :--- | :--- |
| **Global Theme** | `n/a` | `src/app/globals.css` |
| **Hero (Particles)** | `src/sections/Hero.tsx` | `src/sections/Hero.module.css` |
| **Experience** | `src/sections/UnifiedExperience.tsx` | `src/sections/UnifiedExperience.module.css` |
| **Projects** | `src/sections/UnifiedExperience.tsx` | `src/sections/UnifiedExperience.module.css` |
| **Research** | `src/sections/Research.tsx` | `src/sections/Research.module.css` |
| **Education** | `src/sections/Education.tsx` | `src/sections/Education.module.css` |
| **Skills** | `src/sections/UnifiedExperience.tsx` | `src/sections/Skills.module.css` |
| **Expandable Card** | `src/components/ExpandableCard.tsx` | `src/components/ExpandableCard.module.css` |
| **Header / Nav** | `src/components/Header.tsx` | `src/components/Header.module.css` |
| **Footer** | `src/components/Footer.tsx` | `src/components/Footer.module.css` |
| **Depth Page** | `src/app/depth/page.tsx` | `src/app/depth/depth.module.css` |

### Styling System
- **CSS Variables**: Defined in `globals.css` for centralized theme management.
- **Design Tokens**: `var(--space-*)`, `var(--text-*)`, and `var(--accent)` ensure a "premium" feel.
- **Scoped Styles**: Used CSS Modules (*.module.css) to prevent style leakage.

## 📊 Analytics & Performance
- **GA4 Integration**: Custom `../src/components/Analytics.tsx` component using `next/script`.
- **Image Optimization**: Local icons and assets are handled via standard `<img>` tags for static stability, while `unoptimized: true` in `../next.config.mjs` ensures compatibility with static hosting.
