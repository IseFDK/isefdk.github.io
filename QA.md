# Portfolio verification

## LAST SIGNAL update — 2026-10-06 UTC

The archive now contains six projects and eleven public routes. The prior five project records were compared against the remote baseline `d96a7a1f78ac1175ca9ffbdf76ce9a3d3da658f2` and remain unchanged.

Pre-publication automated checks passed on Node 24: six tests, deterministic build, thirteen-HTML static audit, local references, unique IDs, in-page targets, image alternatives and Last Signal integration. The new case includes the live story, reading edition, creation notes, source, three landscape panels and a separately composed portrait illustration. The four reused art assets match the upstream Last Signal commit `a73eb30a2019ec5ca83d2b0a3f2e18a1ceb1c2f0` byte-for-byte.

Cloud browser localhost preview was blocked by network policy. Updated rendered layout, interaction and deployment checks must be verified on the published Pages site before this update is reported complete. The historical evidence below applies to the earlier five-project build, not the new code.

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
