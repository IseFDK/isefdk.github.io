# Spatial foundation verification

Review checkpoint, 7 October 2026. Live prototype: https://isefdk.github.io/museum/ . The first museum remains at https://isefdk.github.io/museum-v1/ . The existing portfolio and project routes are preserved. This checkpoint contains LAST SIGNAL and the explicitly labeled LIGHT STUDY interaction sample only; the remaining collection is retained for migration after review.

## Automated checks

`npm run check` passes: 19 Node tests, deterministic builds for the portfolio and both museum versions, and both static audits. Coverage includes safe work routes, continuous/reversible scroll mapping, near-plane clipping, wall inspection, source-aspect texture mapping, geometry-derived sculpture fallback, separate quality/reduced-motion behavior and gentle, non-forced magnetism. Local module imports carry the same build version as the entry module, including lazy sculpture imports.

## Live cloud Chrome checks

- Entrance and Rotunda fit exactly one viewport. Rotunda was measured at 757px document/viewport height, without scrolling
- Three actual corridor captures at camera 0, 658.26 and 1228.70 show forward depth progression. Vertical input moves the projected scene while its viewport stays fixed
- Artwork is mapped onto its physical wall plane with the source image aspect preserved. Distant plaque text is withheld; keyboard focus reveals a legible plaque
- Keyboard Page Down, Home, work activation, visible focus, Escape, Browser Back/Forward and wing return were exercised. Skip to museum focuses main without replacing the current room route
- A non-default inspection returned to scrollY 1211 / camera 1053.04 exactly. A later settled recheck retained the same values. Projected scenes exclude browser scroll anchoring, and native artwork focus is held at the prior camera position
- Direct website and interaction-sample links bypass Entrance and open the correct wing/dossier. Closing a direct website link leaves the visitor at camera 1470 in its corridor
- Folio Guide navigation, numbered catalogue, keyboard tab selection, Escape/focus restoration and EN/RU preferences work. Full/Light quality is independent of Normal/Reduced motion
- LIGHT STUDY changes between Daylight and Evening. Its dossier states that it is a museum interaction sample, with no finished-game, release or store claim
- All six view states were checked at 320×740, 390×844, 768×1024 and 1440×900. No horizontal document overflow was found. Entrance/Rotunda remain viewport-height; only exhibition corridors have traversal scroll length
- 390px mobile inspection uses a wall-facing view above a separate readable dossier. Escape returned to camera 570.43 exactly. Folio occupies almost the full mobile viewport
- At 320px and 200% text, the dossier description grows to 28px and remains scrollable inside the viewport. Reduced motion changes corridor progression into still camera views, with raw traversal position retained
- A script-disabled sandbox displays the ordinary text collection immediately, with museum-v1, verified GitHub and live-project links. WebGL failure also leaves the full spatial navigation usable

Matched screenshots of the Rotunda, three corridor positions, website/sample dossiers, Folio and mobile views were captured for review. Dossier backdrop blur was removed so the selected exhibit remains sharp. Folio retains its own backdrop treatment. Mobile signs are separated from the small wallet trigger.

## Limits of this checkpoint

Cloud Chrome reports WebGL unavailable. The visible sculpture fallback and all navigation were verified; hardware rendering of the actual WebGL sculpture was not visually verified. Mobile checks use responsive browser viewports, keyboard and native scrolling, not a physical touchscreen. The phone Rotunda uses a closer central composition and passage signs. The corridor architecture remains deliberately schematic at this foundation-review stage. There is no sound, no free-walking control scheme, and no full six-project migration yet.
