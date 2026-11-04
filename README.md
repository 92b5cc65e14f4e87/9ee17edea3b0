# Endpoint Warehouse Simulator

A guided warehouse game for learning Endpoint Cloud workflows with fictional
deliveries. The current lessons cover inbound receiving.

Review site: https://ethan-willingham.github.io/warehouse-preview-9ee17edea3b0/

Choose Inbound, select a receiving method, then enter the warehouse. Walk, carry
cartons and scan their physical labels. Receiving screens open on the handheld
or the office computer. The opening menus load before the game; changing lessons
reuses the same player.

The review link is public and requires no sign-in. The page requests that search
engines do not index it; this is not access control. It contains example data and
does not connect to company inventory. Progress lasts for the open page session.
Use Chrome with a keyboard and mouse; embedded browsers may reject mouse capture.

## Work on the app

- `web/` is the entire deployed site, with no dependency on another website.
- `web/js/one-shift-inbound-model.js` owns fixtures, receipts and order status.
- `web/js/one-shift-inbound.js` owns menus, guidance and receiving screens.
- `web/js/one-shift-inbound-warehouse.js` connects the browser to Unity.
- `unity/OneShiftRackLab/` contains the editable warehouse project and assets.
- `docs/RECEIVING.md` describes the receiving contracts and knowledge-base sources.

Serve `web/` with a static server, for example `python -m http.server 8765
--directory web`. Do not open `index.html` through a file URL.

Run `npm test` for the receiving model and browser-host checks. For the actual
gameplay check, install development dependencies with `npm install`, install
Chrome, then run `npm run test:browser`. The browser test serves the app beneath
`/warehouse-preview-9ee17edea3b0/` to exercise GitHub project-site paths. Its reports and
screenshots are written to the ignored `research/` directory.

Open the Unity project in Unity 6000.3.27f1 with Web Build Support. Read its
`README.md` and `WAREHOUSE_LIGHTING.md` before scene changes. Validate the native
receiving adapter, then run **One Shift > Build browser player**. This writes the
four compiled files into `web/assets/one-shift-unity/Build/`. Native changes need
a fresh export and the real browser check before release.

## Publish refinements

Push reviewed changes to `main`. The Publish Endpoint Warehouse Simulator workflow checks
the model and host, then deploys only `web/` to GitHub Pages. Source files and
Unity project assets remain in this repository without being copied into the
website artifact. Keep this repository's Pages source set to GitHub Actions.
There is no custom domain or connection to a portfolio site.

Bump changed frontend query versions. When rebuilding Unity, also bump
`BrowserLifecycle.BuildVersion` and the compiled build query version in the
browser host. Do not commit Unity caches, local reports, credentials or real
company data.
