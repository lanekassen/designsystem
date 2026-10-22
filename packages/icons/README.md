# @lanekassen/ds-icons

Lånekassen's icon package for React applications.

The package is set up to publish React icon components from its main entry
point and SVG assets from the `@lanekassen/ds-icons/assets/` subpath. Add
components under `src/`, export them from `src/index.ts`, and place raw SVG
files under `assets/`. No icons are included in this initial package setup.

## Development

```console
pnpm --filter @lanekassen/ds-icons build
```
