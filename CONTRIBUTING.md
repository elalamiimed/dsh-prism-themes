# Contributing

Thanks for wanting to add a palette or improve the studio.

1. Fork and clone the repository.
2. Run `npm test` before changing anything. Node.js 18+ is the only requirement.
3. Add or edit a palette in the `THEMES` array in `client.js`. Each theme needs `id`, `name`,
   `family`, `tagline`, and complete `light` and `dark` objects with the thirteen seed colors used
   by the test suite.
4. Run `npm test`. The suite checks catalog shape and WCAG contrast floors for text, muted text,
   accents, state colors, and accent ink.
5. Keep the Settings page consistent with the Harness theme: use host tokens such as
   `var(--dsw-alias-*)` for the plugin UI, and keep preview colors as data on the card.
6. Open a pull request that describes the palette and includes the contrast report from the local
   test run.

Do not add runtime dependencies. The browser module must stay self-contained and must not
import Harness Client packages.
