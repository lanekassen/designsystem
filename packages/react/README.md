# @lanekassen/ds-react

Lånekassen's React components to be used in internal and external React applications.

> [!CAUTION]
> This package is in it's early stages of development and is not ready to be used yet.

> [!CAUTION]
> This package cannot be used with the internal `@lanekassen/ui` package. Please migrate your entire app at the same time

## Getting Started

This package is intended to be used for single page applications as well as server side rendered applications. Most commonly used with [vite](https://vite.dev/).

### 1. Install the packages

Most apps should need both packages, but depending on your needs they can be swapped in and out.

```console
$ pnpm add @lanekassen/ds-react @lanekassen/ds-css
```

### 2. Import JavaScript

Import React components from `@lanekassen/ds-react`.

```js
import { Button } from "@lanekassen/ds-react";
```

### 3. Import CSS

CSS can be imported through Javascript

```js
import "@lanekassen/ds-css";
import "@lanekassen/ds-css/theme";
```

Or CSS

```css
@import "@lanekassen/ds-css";
@import "@lanekassen/ds-css/theme";
```
