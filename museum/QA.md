# Digital Museum verification

2026-10-06, final implementation revision e88c60089d2e8686d33841e8c6fe530871ea9e5d. Public preview: https://isefdk.github.io/museum/

## Passed code and publication checks

- Full `npm run check`: 12 Node tests, original portfolio build/audit, museum build/audit
- Original 13 HTML files and every existing `docs/` asset remain byte-for-byte identical to the remote baseline 4b84dea735a7786f00a03d4f656700aae6ff6746
- Museum output: 866,265 bytes for HTML, CSS, JavaScript, three desktop architectural images, three mobile crops, diagrams and static sculpture. Project art and fonts reuse existing portfolio assets
- App module is 5.5KB; sculpture code is lazy-loaded in the atrium. Rotation is opt-in and pauses outside its room or in a background tab
- Exact-revision GitHub Actions portfolio verification and GitHub Pages build/deployment succeeded

## Passed live Chrome checks

- All eleven views (five rooms, six exhibit close-ups) at 320, 390, 768 and 1440px iframe viewport widths
- The same 44-view sweep at 200% root text size: 88 final checks total, no horizontal overflow, exactly one active room and reduced-motion state active
- 320px, 200%-text plan dialog: client and scroll widths both 264px. Content uses vertical scrolling; room and exhibit links stay available
- Keyboard activation of architectural map links, Escape dismissal and focus restoration to the plan opener
- Gallery → LAST SIGNAL → browser Back → Forward: Back restored gallery scroll to 694px and focus to the artwork link; Forward restored the exhibit heading at the top
- Repeated native disclosure toggles, plan reopening, navigation between rooms, and profile-link copying
- Complete six-work collection, source-only LEDGER, unofficial AURA disclaimer and honest unpublished-games wing
- Static sculpture remains visible and navigation/content stay functional without WebGL
- No site-origin JavaScript errors in the inspected console
- Matched desktop entrance, atrium, gallery and bureau pixels were reviewed. Side-wall artwork bounds were measured from the original render, corrected and checked again; clickable scene plaques and hover/focus feedback were added. Mobile gallery framing and readable plaque layout were checked

## Limits and fallback

The cloud Chrome browser could not create a WebGL context, so hardware 3D rendering, rotation controls and GPU context restoration were not visually verified. Geometry, shaders and lifecycle code were checked statically, and the visible SVG fallback was exercised. No claim of hardware-rendered 3D QA is made.

No-JavaScript support is a static/progressive-enhancement guarantee checked in source and output: room text, six complete exhibits, normal anchors and native disclosures are present in HTML; script-only controls start hidden. A browser session with JavaScript disabled was not run.

Localhost preview was blocked by the cloud browser (ERR_BLOCKED_BY_CLIENT), so live GitHub Pages was used for browser QA. No bypass was attempted. Actual desktop screenshots used the available cloud browser's 1180px viewport; all four requested CSS widths were also measured in the live viewport harness. The harness is unlisted and noindex.
