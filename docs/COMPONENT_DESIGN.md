# Component Design Documentation

This document provides a detailed breakdown of the core UI components used across the portfolio.

## 📇 ExpandableCard (`../src/components/ExpandableCard.tsx`)
The primary content container for Experience, Projects, Research, and Awards.

### Features
- **Collapsible State**: Uses `useState` to toggle between overview and detailed view.
- **Polymorphic Data**: Handles multiple data shapes (`Experience`, `Project`, `Research`) via conditional rendering.
- **Dynamic Badges**: Automatically generates status pills based on `.badge` or `.status` strings.
- **A11y**: Included ARIA tags for accessibility and keyboard navigation support.

## ✨ Hero Section (`../src/sections/Hero.tsx`)
The primary entry point of the website, featuring an interactive background.

### Features
- **Interactive Canvas**: Real-time particle connection system using HTML5 Canvas.
- **Dynamic Title Pairing**: Uses a multi-font title (`about.json` -> `name` + `tagline`) for high-impact personal branding.
- **Responsive Sizing**: Fluid typography and layout adjustments for mobile, tablet, and desktop.
- **Background Refinement**: Controlled opacity (`0.95`) for maximum text readability against moving particles.

## 🧭 Navigation (`../src/components/Header.tsx`)
A centralized navigation component.

### Configuration
Managed via a `NAV_LINKS` constant, making it trivial to add or rename pages without touching JSX:
```typescript
const NAV_LINKS = [
  { label: 'Portfolio', path: '/' },
  { label: 'Credentials', path: '/background' },
  { label: 'More', path: '/depth' },
];
```
- **Mobile Support**: Includes a slide-out mobile menu for smaller screens.
- **Active State**: Dynamically highlights links using `usePathname()`.

## 🛠️ Skill Icons & Utils (`../src/utils/skillIcons.ts`)
A specialized utility for handling technical branding.

### Logic
- **Slugification**: Automatically converts names (e.g., "Next.js") into slugs ("nextdotjs") to match the Simple Icons API.
- **Overrides**: Supports a manual mapping for non-standard icons or local asset paths.

## EmptyState (`../src/components/EmptyState.tsx`)
Used for graceful degradation when JSON files are empty or sections are hidden.
- Supports custom emojis and motivational messages.
