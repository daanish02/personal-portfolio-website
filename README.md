# AI Engineer Portfolio

A data-driven, high-performance personal portfolio built with **Next.js 16**, **React 18**, and **TypeScript 5**. This project features a modular design, dynamic particle animations, and a centralized JSON-based content management system.

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v20.x or higher
- **npm**: v10.x or higher

### Installation
```bash
npm install
```

### Development
Launch the development server with Hot Module Replacement:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
Generate a static export for deployment:
```bash
npm run build
```
The output will be in the `out/` directory.

## 🛠️ Tech Stack
- **Framework**: Next.js 16.0.10 (App Router)
- **Language**: TypeScript 5.x
- **UI & Logic**: React 18.x
- **Styling**: Vanilla CSS Modules (Design Tokens)
- **Analytics**: Google Analytics 4 (Custom Integration)
- **Deployment**: Azure Static Web Apps

## 📁 Project Structure
- `src/app/`: App Router handles page routing and global layouts.
- `src/components/`: Reusable UI components (Modals, Navigation, Analytics).
- `src/sections/`: Page-specific content blocks (Hero, Skills, Projects).
- `src/data/`: **Centralized JSON store** for all website content.
- `src/utils/`: Logic helpers for icons, formatting, and data parsing.
- `src/types/`: Strict TypeScript interface definitions.

## 📖 Documentation Suite
- [ARCHITECTURE.md](./docs/ARCHITECTURE.md): Technical system design and build flow.
- [COMPONENT_DESIGN.md](./docs/COMPONENT_DESIGN.md): UI component architecture.
- [INTERFACE_DESIGN.md](./docs/INTERFACE_DESIGN.md): Design system and visual language.
- [SCHEMA.md](./docs/SCHEMA.md): Data structures and typing guides.
- [SAMPLE_DATA.md](./docs/SAMPLE_DATA.md): Comprehensive mock data reference.
- [CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md): Workflow for adding/editing content.
- [DEPLOYMENT.md](./docs/DEPLOYMENT.md): Azure Static Web Apps setup.

## ⚖️ License
This project is proprietary and contains private intellectual property. See [LICENSE](./LICENSE) for details.
