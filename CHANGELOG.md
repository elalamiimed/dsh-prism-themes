# Changelog

## 1.0.1 — 2026-11-02

- Fixed added/deleted diff line colors: diff backgrounds are now tinted surface
  colors instead of solid status fills, so code text stays readable.
- Success and error foregrounds now meet text contrast on base and raised surfaces.
- Added regression tests for diff line contrast.

## 1.0.0 — 2026-11-02

- First public release of Prism Theme Studio.
- 24 paired light/dark palettes across six families: Signature, Nocturne, Botanical,
  Nostalgia, Minimal, and Playful.
- Full host alias-token expansion (surfaces, borders, labels, brand, buttons, interactive
  states, markdown, diffs, scrollbars, toasts, tooltips, sidebar).
- Host-static overlay text stays readable: tooltip and toast surfaces stay dark for the
  Harness's fixed white tooltip text, and warning labels are chosen against the warning tint.
- Theme studio settings page with instant apply, search, family filters, favorites,
  palette-mode control, accent character, accent override, export, and native restore.
- Preferences persist in the browser; uninstalling the bundle removes the override layer.
- Tests for catalog shape, contrast floors, token composition, packaging, and plugin apply.
