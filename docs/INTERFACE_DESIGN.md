# Interface Design Documentation

This document outlines the visual language and design system of the portfolio.

## 🎨 Color Palette
The site uses a monochromatic "Glassmorphism" theme with a single sharp accent.

| Token | Use Case | Value |
| :--- | :--- | :--- |
| `background` | Primary page background | `#ffffff` |
| `bg-secondary` | Card/Section container | `#f8f9fa` |
| `accent` | CTAs, Links, and Highlights | `#000000` (Modernist) |
| `text-primary` | Main titles and headers | `#0a0a0a` |
| `text-secondary` | Body text and descriptions | `#4b5563` |
| `border` | Subtle dividers and outlines | `rgba(0, 0, 0, 0.08)` |

## 📐 Spacing System (Design Tokens)
Consistent rhythm is maintained via a 4-pixel base grid.

- `var(--space-md)`: 16px
- `var(--space-lg)`: 24px
- `var(--space-xl)`: 32px (Site-wide Grid Gap)
- `var(--space-2xl)`: 48px
- `var(--space-3xl)`: 64px

## 🔡 Typography
- **Display**: Used for primary headers and your name (**Playfair Display**).
- **Sans**: Used for body text, UI elements, and the Hero tagline (**Inter**).
- **Light Accents**: The system supports an ultra-light **Inter 300** for secondary semantic details (like taglines).

### Typographic Rhythm
- `H1 (Name)`: 4rem / 700 weight / Playfair Display
- `H1 (Tagline)`: 1.5rem / 300 weight / Inter Italic (Paired for contrast)
- `H2 (Sections)`: 2.25rem / 800 weight / Inter
- `Body text`: 1.125rem / 400 weight / Inter

## ✨ Interaction Patterns
- **Hover States**: Cards use `translateY(-6px)` and a deep box shadow for depth.
- **Transitions**: Controlled via `var(--transition-base)` (0.3s cubic-bezier).
- **Responsive Breakpoints**: 
    - Desktop: > 1024px
    - Tablet: 768px - 1024px
    - Mobile: < 768px
