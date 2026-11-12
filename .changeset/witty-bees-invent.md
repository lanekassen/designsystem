---
"@lanekassen/ds-css": minor
---

**BREAKING CHANGE**: Tailwind theme now requires Tailwind CSS v4. It uses `@theme inline`, so Tailwind utilities reference the `--ds-*` variables directly, and `data-color`, `data-color-scheme` and `data-size` also apply to them, at any depth in the DOM.
