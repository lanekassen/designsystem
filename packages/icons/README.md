# @lanekassen/ds-icons

Lånekassen's icons to be used in internal and external applications.

> [!WARNING]
> This package is in it's early stages of development. While it works
> and can be used, there are no guarantees made for API stability.

## Getting Started

The package provides React icon components and the same icons as SVG files.
Prefer using React components in React apps for consistency and ease of use.

### 1. Install the package

```console
$ pnpm add @lanekassen/ds-icons
```

### 2. Use React components

Import icon components from `@lanekassen/ds-icons`.

```tsx
import { PostponeIcon, RemoveDebtIcon } from "@lanekassen/ds-icons";

<PostponeIcon aria-hidden />;
<RemoveDebtIcon aria-label="Remove debt" />;
```

Components accept standard SVG props. They are `1em` in size and use
`currentColor`, so size and color follow the surrounding text.

### 3. Or use SVG files

SVG files can be imported from `@lanekassen/ds-icons/svg/`, for example as
image URLs.

```tsx
import postponeUrl from "@lanekassen/ds-icons/svg/Postpone.svg";

<img src={postponeUrl} alt="Postpone" />;
```

## Accessibility

Icons do not include a default title, because the accessible name depends on
how the icon is used and on the language.

- React components default to `role="img"`, following the same practice as
  [Aksel icons](https://aksel.nav.no/god-praksis/artikler/tilgjengelig-ikonbruk).
  Provide `aria-label` or `aria-labelledby` for meaningful icons, or
  `aria-hidden="true"` for decorative icons.
- For SVG files used as images, provide meaningful `alt` text, or `alt=""` for
  decorative images.
- Icon-only buttons must have an accessible name on the button.

## Development

Export icons from Figma as SVG and add them to `svg/` using PascalCase
filenames, for example `RemoveDebt.svg`. Then generate the React components:

```console
$ pnpm --filter @lanekassen/ds-icons generate
```

Commit both the SVG files and the generated files in `src/generated/`. Do not
edit the generated files manually.

Generation first runs [SVGO](https://svgo.dev/) (configured in
`svgo.config.js`) to optimize the SVG files in place. It removes editor
metadata and replaces all fill and stroke colors with `currentColor`, so icons
are monochrome.

[SVGR](https://react-svgr.com/) (configured in `svgr.config.js`) then
replaces `src/generated/` with a component for each SVG file, so removed or
renamed icons do not leave stale components.
