# IseFDK Digital Museum

Isolated public first-version preview: https://isefdk.github.io/museum/

The existing portfolio and case URLs remain unchanged. The museum is static, Russian-first and progressively enhanced, with five architectural rooms and six complete exhibit close-ups. Hash URLs open rooms directly; browser Back/Forward preserves the gallery position. The foldout plan links every room and exhibit. Without JavaScript the entire collection is available as a normal document. Without WebGL the bronze abstract sculpture remains visible as a geometry-derived SVG.

## Build and verify

Run `npm run check` from the repository root. The original portfolio is built first; `museum/scripts/build.mjs` adds only `docs/museum`. The original audit continues checking original routes; the museum has its own audit and six Node test groups, included in the normal test command. `docs/museum/qa.html` is an unlisted noindex viewport harness for 320, 390, 768 and 1440px, 200% text and reduced motion.

No npm runtime dependencies, account, backend, analytics or data submission. Architecture images are original generated decorative visualizations. Text, exhibits, controls and navigation are ordinary HTML. Sculpture geometry and WebGL shading are original code, lazily loaded only in the atrium; rotation starts only when the visitor chooses it and pauses outside the atrium/background tab. It has buttons instead of drag-only interaction and honors reduced motion. A lost context restores the static fallback.

## Content and assets

Project descriptions, actual technology and limitations come from the existing verified `src/projects.mjs` collection. All public author references use IseFDK. LEDGER has source-only access, no fictional live demo. The games wing honestly states that nothing is published yet. AURA retains its unofficial Pokémon disclaimer. NOCTURNE and LEDGER visuals are author-created diagrams, labeled as diagrams rather than screenshots. Existing project imagery is reused from `docs/art` and its provenance is in the root ASSETS.md.

New facade, atrium and gallery renders were generated with the built-in image-generation tool. Full prompts and file metadata are in ART.json. Mobile versions are ordinary responsive crops; the layout moves text outside the room scene instead of shrinking desktop copy. No particular generator model is claimed. No new license grant is introduced.
