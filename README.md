# Mistria Field Notes

An English-only, independent guide prototype for **Fields of Mistria**. The first
version validates the complete content path from homepage to guide library to a
source-backed article page.

## Pages

- `/` — homepage targeting `fields of mistria`
- `/guides/` — guide navigation and topic filters
- `/guides/gift-guide/` — gift guide targeting `fields of mistria gift guide`

Other researched guides are visible as **Coming soon** and do not link to empty pages.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

The project uses Next.js App Router, TypeScript, and responsive CSS. Every live
page has its own metadata, one H1, and a structured H2/H3 hierarchy.

## Disclaimer

This is an unofficial fan project and is not affiliated with NPC Studio. Game
names and trademarks belong to their respective owners.
