# @lanekassen/ds-icons

Lånekassen's icon package for React applications.

The package is set up to publish React icon components from its main entry
point and SVG assets from the `@lanekassen/ds-icons/assets/` subpath.

```tsx
import { PostponeIcon, RemoveDebtIcon } from "@lanekassen/ds-icons";

<PostponeIcon aria-hidden="true" />;
<RemoveDebtIcon aria-label="Remove debt" />;
```

Components accept standard SVG props without custom `title` or `titleId` props.
They default to `1em` dimensions and preserve the source `currentColor` fill,
so size and color can follow the surrounding text. Raw SVG assets are
published as optimized in `assets/`.

## Accessibility

Raw SVG assets do not include default titles because accessible names depend
on their usage and language. Biome's `noSvgWithoutTitle` rule is disabled for
SVGs in `assets/` and generated components in `src/generated/`, whose
accessible names are supplied where they are used. It remains enabled elsewhere.

When using an SVG as an image, provide meaningful `alt` text, or `alt=""` for
a decorative image. For inline SVGs, provide an accessible name (for example,
`role="img"` with `aria-label`) when meaningful, or `aria-hidden="true"` when
decorative. Icon-only buttons must have an accessible name on the button.

React components default to `role="img"`; this can be overridden through props.
Provide `aria-label` or `aria-labelledby` for meaningful icons, or
`aria-hidden="true"` for decorative icons. The default role does not provide
an accessible name.

## Development

Export icons from Figma as SVG and add them to `assets/` using PascalCase
filenames, for example `Postpone.svg` or `RemoveDebt.svg`. No manual editing
is needed. Then generate the React components:

```console
pnpm --filter @lanekassen/ds-icons generate
```

Generation first runs SVGO (configured in `svgo.config.mjs`), which optimizes
the SVG files in `assets/` in place. It removes editor metadata and replaces
all fill and stroke colors with `currentColor`, keeping `none`. Icons are
therefore monochrome. Avoid masks in source icons, because colors inside masks
are also replaced; flatten or outline them in Figma before exporting.
Optimization can be run separately with `pnpm --filter @lanekassen/ds-icons optimize`.

SVGR then generates TypeScript components and named exports in `src/generated/`.
For example, `Postpone.svg` becomes `PostponeIcon`. Commit both the optimized
assets and the generated files, and do not edit generated files manually.
Generation replaces the output directory so removed or renamed assets do not
leave stale components. SVGO is disabled inside SVGR because the assets are
already optimized.

The build and dev commands generate components before starting:

```console
pnpm --filter @lanekassen/ds-icons build
pnpm --filter @lanekassen/ds-icons dev
```

Dev watches the generated TypeScript files. Run `generate` again after changing
SVG assets.
