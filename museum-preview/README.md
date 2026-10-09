# IseFDK Museum preview

Isolated product slice. Build only this preview with `node museum-preview/scripts/build.mjs`; output is `docs/museum-preview/`. This command does not touch the portfolio or any other museum version. Serve `docs` with `python3 -m http.server 4176 --directory docs`.

Entrance and Rotunda use frozen Blender renders and camera-projected polygon targets exported from that exact geometry. They are 2.5D still views, with independent mobile cameras, not live WebGL rooms. Gallery is one rough segment with actual CPU-projected geometry/camera traversal, three panels belonging to LAST SIGNAL, focus and a paper dossier. Interactive Exhibition is one small light-study demo, not a full migrated collection.

Physical Visitor Folio: folded map, Creator Card (IseFDK), independent EN/RU, Full/Light quality, reduced motion. No sound. Native dialog focus containment. Location hash and history preserve inspection and corridor position.

Run `node --test museum-preview/test/*.test.mjs && node museum-preview/scripts/build.mjs && node museum-preview/scripts/audit.mjs` for focused tests, build and local reference audit. No deployment is performed by these scripts. Publish only `docs/museum-preview/` to `/museum-preview/` after restoring/verifying other published assets from the current remote tree.
