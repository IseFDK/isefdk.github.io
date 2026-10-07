# IseFDK Spatial Museum Foundation

Public working prototype: https://isefdk.github.io/museum/
Preserved first version: https://isefdk.github.io/museum-v1/

This revision stops at the user’s review gate: Entrance, a single-viewport Central Rotunda, two shared-engine exhibition corridors, Visitor Folio, one real web work (LAST SIGNAL) and one explicitly labeled interaction-sample diorama. The six-project source collection, artwork, original portfolio and v1 are preserved. Full migration awaits review of the spatial foundation.

Native vertical scroll moves a CSS-perspective camera forward/backward through the corridor. The room remains in the viewport. Landscape art is mounted asymmetrically on both walls; the three images belong to the same real web story. Inspection turns the camera toward the selected wall and opens a museum dossier inside that scene. Close and browser Back restore the prior corridor position. Deep work links bypass Entrance. Keyboard arrows, Page Up/Down and Home/End control traversal; normal links and buttons handle inspection.

The Visitor Folio contains a folded guide, numbered catalogue, Creator Card and independent language, quality and reduced-motion preferences. English is default; Russian is available. Full/Light quality is separate from reduced motion. Reduced motion uses still camera positions and removes transition flights. The rotunda sculpture is lazy WebGL with a geometry-derived static fallback. The interaction sample is a CSS 3D diorama, with light controls, not a claim of a finished game or release.

Run `npm run check` at the root. The deterministic build preserves the first museum under /museum-v1/ and writes the new prototype under /museum/. No runtime dependencies, account, backend, tracking or sound. Artwork provenance remains in ART.json and ROTUNDA-ART.json; no new license is added. Browser verification and known limits are recorded in QA.md.
