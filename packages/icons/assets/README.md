Place SVG files exported from Figma here using PascalCase filenames, such as
`Postpone.svg`. Run `pnpm --filter @lanekassen/ds-icons generate` afterwards:
SVGO optimizes the files in place and replaces all fill and stroke colors with
`currentColor` (keeping `none`) before React components are generated.
Avoid masks, since colors inside masks are replaced too.

These optimized files are published as raw assets and can be imported through
the `@lanekassen/ds-icons/assets/` package subpath.
