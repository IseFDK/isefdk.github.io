# Portfolio verification

## LAST SIGNAL update — 2026-10-06 UTC

Published portfolio: https://isefdk.github.io/
New case: https://isefdk.github.io/work/last-signal/

The archive contains six projects and eleven public routes. The prior five project records were compared against remote baseline `d96a7a1f78ac1175ca9ffbdf76ce9a3d3da658f2` and remain unchanged. Runtime interaction code and LICENSE were preserved.

### Automated checks

`npm run check` passes on Node 24: six tests, deterministic build, thirteen-HTML static audit, local references, unique IDs, in-page targets, image alternatives and Last Signal integration. The new case includes the live story, reading edition, creation notes, source, three landscape panels and a separately composed portrait illustration. The four reused art assets match upstream Last Signal commit `a73eb30a2019ec5ca83d2b0a3f2e18a1ceb1c2f0` byte-for-byte.

### Final live rendering

Cloud Chrome checked final code commit `2c5ac0b2c2eb4e24330e9741a2fa86f37c60bd33`, stylesheet revision `164bc703bca4`:

- 88 route checks: all eleven public routes at 320, 390, 768 and 1440 px, each with 100% and 200% root text size
- 24 selected-stage checks: all six projects at 320/390 px, each at 100% and 200% root text size
- No horizontal page overflow, measured element text overflow or measured text/control elements beyond the viewport edges across the final 112 checks
- The initial enlarged-tablet check exposed cramped next-case links in three cases. Intrinsic footer wrapping fixed them; all 88 route checks were rerun on the final stylesheet
- Artwork grids use intrinsic columns as text grows. The phone portrait displays its full original aspect ratio; all five case image instances loaded after traversing the gallery
- Actual desktop case hero/gallery, phone hero/portrait and enlarged tablet next-case link were visually inspected

### Live interaction checks

28 checks passed, covering:

- All six project-stage selections plus repeated LAST SIGNAL selection, with matching media, index, case link and pressed state
- Command-palette English/Russian search, arrow selection, empty state, Escape focus restoration, repeated reopening/Close, Ctrl K and Enter navigation to the new case
- Case walkthrough click, ArrowRight, End and Home with matching selected tab and visible panel
- Archive Russian search, incompatible-category empty state, editorial intersection, reset, Back/Forward restoration and opening the new case
- Mobile menu at 320 px with enlarged text: Escape/focus restoration, repeated Close and archive navigation with a closed destination menu
- Full portrait ratio and loaded gallery assets
- Reduced-motion fixture: automatic scrolling, no stage transform and zero transition duration

No site-origin console warnings/errors were observed in captured logs. Browser-extension metadata errors were unrelated to the site.

### Deployment evidence

- Final code: https://github.com/IseFDK/isefdk.github.io/commit/2c5ac0b2c2eb4e24330e9741a2fa86f37c60bd33
- Verify portfolio: https://github.com/IseFDK/isefdk.github.io/actions/runs/37422675708 — success for that exact commit
- Pages build and deployment: https://github.com/IseFDK/isefdk.github.io/actions/runs/37422674966 — success for that exact commit

The following documentation-only commit records these checks; it does not alter the tested production files.

### Limits

Responsive checks used the live site in same-origin cloud Chrome iframes. Safari, Firefox, physical phones/touch hardware, browser-native zoom and Core Web Vitals were not separately tested. Text enlargement changes the fixture's root font size. System reduced-motion support was source-inspected; the equivalent fixture behavior was browser-tested. These checks do not imply a full accessibility audit or certify external projects.

Localhost preview was blocked by network policy, so rendered checks were performed on the actual published Pages site. The historical evidence below applies to the earlier five-project build.

## Earlier five-project verification

Date: 2026-10-04 UTC. Published site: https://isefdk.github.io/.

## Automated checks

`npm run check` passes with Node 24:

- 5 tests for the authorized project collection, category/query intersection, whitespace/zero results, URL state round trips and text-safe query handling
- Deterministic production build: 10 public routes, custom 404 and an unlinked noindex viewport harness
- Static audit of 12 HTML files, one H1 per page, local links/assets/fonts, module and stylesheet cache hashes, reduced-motion/focus primitives and the five-project collection
- GitHub Actions rebuilds the same output and checks `git diff --exit-code -- docs`

## Published browser checks

Chrome in the cloud browser. The exact tested stylesheet is `ba2d6bccd466`.

### Responsive matrix: 62 passes

- 40 normal-size cases: all 10 public routes at 320, 390, 768 and 1440 px
- 12 enlarged-text cases: home, work, NOCTURNE, LEDGER, about and contact at 320/390 px with a 200% root text size
- 10 enlarged-stage cases: all five selected home-stage projects at 320/390 px with a 200% root text size

Route identity and stylesheet version were checked before measurements. Checks covered document width, actual text fragments, significant overlap, clipping by overflow-hidden ancestors and loaded image assets. The final matrix has no horizontal page overflow, text overflow/overlap, hidden text clipping or broken images.

The diagrams use intrinsic grid flow instead of fixed-height overlays. Photo provenance labels sit below the image in document flow. Header/footer, selectors, tabs and metadata grids reflow when text grows. The decorative monogram and archive symbols stay inside their containers.

### Interaction

- Project stage switches name, summary, index, media, provenance and case link for all five projects; no automatic progression
- Archive category/query intersection, zero results, reset, Back and Forward restore the expected URL and visible collection
- Command palette: query, empty state, arrows including wraparound, Enter navigation, Escape dismissal, repeated reopening, Ctrl/Command K and focus restoration
- Case walkthrough: click, left/right arrows, Home and the corresponding selected tab/panel/focus state
- Mobile menu: repeated open/Escape, Close, focus restoration and navigation to Work with a closed modal, including enlarged text
- GitHub clipboard copy succeeds in the tested browser; the explicit unavailable-copy fallback is present in code
- Custom 404 displays the portfolio recovery page; its Work link reaches the actual archive
- The reduced-motion harness removes smooth scrolling, perspective transform and transitions; the same behavior is included in the `prefers-reduced-motion` media rule

## Sources and boundaries

All five project repositories were verified as public repositories owned by IseFDK. Copy was checked against their README files. LEDGER has a repository/README link and does not claim a public running demo or commercial deployment. Conceptual worlds/vehicle/club, AI assistance, generated artwork, fan-art rights and model limits are disclosed in the relevant cases. No clients, awards, employment history, performance metrics or availability are invented.

## Deployment evidence

The visually and functionally tested code commit is `4cd68ce552bd835e55d77bd7a4c2aa6ddf8c6769`:

- Verify portfolio: https://github.com/IseFDK/isefdk.github.io/actions/runs/37169115642 — success
- Pages build and deployment: https://github.com/IseFDK/isefdk.github.io/actions/runs/37169115398 — success

The following documentation-only commit records this verification. Its own workflow and Pages results can be read from the repository's Actions page.

## Limits

Testing used cloud Chrome and the same-origin viewport/text-size harness. Safari, Firefox and physical touch hardware were not independently exercised. Reduced motion was checked through the harness and stylesheet, not by changing the operating system's preference. Clipboard-denial behavior was reviewed in source, not simulated. This portfolio itself does not use WebGL; no claim about external projects' GPU rendering is added by these checks.
