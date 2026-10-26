# @lanekassen/ds-icons

Lånekassen's icons to be used in internal and external applications.

> [!WARNING]
> This package is in it's early stages of development. While it works
> and can be used, there are no guarantees made for API stability.

## Getting Started

The package provides icons as React components and SVG files. Prefer using
React components in React apps for consistency and ease of use.

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

### 3. Or use SVG files

SVG files can be imported from `@lanekassen/ds-icons/svg/` and referenced with
`<use>`. Each file has `id="icon"` on its root element.

```tsx
import postponeIcon from "@lanekassen/ds-icons/svg/Postpone.svg?no-inline";

<svg aria-hidden width="1em" height="1em">
  <use href={`${postponeIcon}#icon`} />
</svg>;
```

> [!NOTE]
> `<use>` only loads files from the same origin, and not from `data:` URLs.
> Make sure your bundler does not inline the file, for example with Vite's
> `?no-inline` query as shown above.

### 4. Set size and color

Icons are `1em` in size and use `currentColor`, so set `font-size` and `color`
on the icon or a parent element.

```tsx
<span style={{ fontSize: "1.5rem", color: "var(--ds-color-accent-text-default)" }}>
  <PostponeIcon aria-hidden />
</span>;
```

## Accessibility

Icons do not include a default title, because the accessible name depends on
how the icon is used and on the language.

- React components default to `role="img"`, following the same practice as
  [Aksel icons](https://aksel.nav.no/god-praksis/artikler/tilgjengelig-ikonbruk).
  Provide `aria-label` or `aria-labelledby` for meaningful icons, or
  `aria-hidden="true"` for decorative icons.
- For SVG files used with `<use>`, set `aria-hidden` on the outer `<svg>` for
  decorative icons, or `role="img"` with `aria-label` for meaningful icons.
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
metadata, replaces all fill and stroke colors with `currentColor`, so icons
are monochrome, sets `width` and `height` to `1em`, and adds `id="icon"` to
the root element for `<use>` support.

[SVGR](https://react-svgr.com/) (configured in `svgr.config.js`) then
replaces `src/generated/` with a component for each SVG file, so removed or
renamed icons do not leave stale components. SVGR removes the root `id`, so
components do not render duplicate ids.
