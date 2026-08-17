# Personal Portfolio

Personal portfolio website built with [Astro](https://astro.build). Live at [danishahmed.me](https://danishahmed.me).

## Stack

- [Astro 5](https://astro.build) — static site generator
- TypeScript
- Deployed via GitHub Actions to GitHub Pages

## Local dev

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
bun run preview
```

## Updating content

All site content lives in `src/data/*.json`. See [CONTENT.md](CONTENT.md) for field rules and examples.

## Deploy

Automatic on push to `main` → GitHub Actions builds and deploys to GitHub Pages at `danishahmed.me`.

## License

[LICENSE](LICENSE)
