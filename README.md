# IseFDK

Public portfolio: **https://isefdk.github.io/**

A Russian-first editorial archive of six projects: ABYSS, RISO RIOT, AURA ATLAS, NOCTURNE, LEDGER and LAST SIGNAL. Eleven actual static pages: home, work archive, six case studies, about, process and contact. Each case describes the idea, actual interaction, technical decisions, sources and limits.

## Run

Node.js 22+; no npm dependencies or remote runtime services.

```sh
npm test
npm run build
npm run check
npm run serve
```

Local server: http://localhost:4176. Output is `docs/`; GitHub Pages uses `main /docs`. Root portfolio links use the user-site origin, while project demos retain their repository subpaths.

## Interaction

- Selectable six-project stage, with LAST SIGNAL initially featured; no autoplay
- Search and category intersection in the archive, URL state, browser Back/Forward and explicit reset/empty state
- Native-dialog mobile menu and command palette; Ctrl/⌘ K, arrows, Enter and Escape with focus restoration
- Three keyboard-operated walkthrough tabs per case
- Real GitHub contact and optional clipboard copy with a visible failure fallback

No contact form, invented client/employment history, analytics, cookies, backend or account signup. Concept projects are disclosed as conceptual/AI-assisted. LEDGER has a source link; no public running demo is claimed.

## Maintain the archive

Project records live in `src/projects.mjs`. Add a record, make sure its sources and factual scope are verified, supply an authorized asset or honest diagram, and rebuild. The build generates the case, archive, stage, next-project navigation and sitemap. Update tests when intentionally changing the authorized collection.

`src/style.css` controls the editorial design. `src/app.mjs` handles interaction. `scripts/build.mjs` renders deterministic HTML and hashes both stylesheet and module URLs. `scripts/audit.mjs` checks output, direct routes and local references.

## Artwork, accuracy and licensing

The image assets are reused from the author's project workspaces, not stock illustrations or fabricated screenshots. They were generated with the built-in image-generation tool; no particular image model version is asserted. Their originals remain in the project creation workspace. Portfolio versions are ordinary resized/compressed WebP exports. Provenance and upstream source references are in `ASSETS.md`. LAST SIGNAL adds three original landscape panels and one portrait edition to its case study, reused unchanged from the story project.

NOCTURNE's portfolio visual is a diagram of its actual three-stop observation sequence. LEDGER's visual is a diagram based on its README. They are explicitly labeled as diagrams, not screenshots.

AURA is an unofficial noncommercial Pokémon fan project. Pokémon, Greninja and all related characters/names belong to the corresponding rights holders. This portfolio does not imply affiliation, endorsement or a franchise license. MIT applies to portfolio source code only, not franchise assets or third-party fonts. The existing portfolio source license does not grant a license to the LAST SIGNAL story or its upstream assets. No new license grant is added; generated imagery makes no exclusive-copyright claim.

Manrope fonts are self-hosted under the SIL Open Font License 1.1 (`public/fonts/OFL.txt`). No runtime font CDN.

## Verification

Tests cover the authorized collection, filtering, intersection, zero results, URL parsing/round trips and safe text queries. `npm run check` also builds and audits every HTML route and local asset. The unlinked, noindex `qa.html` tests 320/390/768/1440 px and 200% root text size. Actual browser evidence and remaining limits are recorded in `QA.md`.
