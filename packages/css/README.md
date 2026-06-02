# @lanekassen/ds-css

Lånekassen's CSS components to be used in internal and external applications.

> [!WARNING]
> While this package only contains CSS files, it is primarly developed with React and `@lanekassen/ds-react` in mind. Please consider using React for your application.

> [!CAUTION]
> This package is in it's early stages of development and is not ready to be used yet.

> [!CAUTION]
> This package cannot be used with the internal `@lanekassen/ui` package. Please migrate your entire app at the same time

## Getting Started

This package is intended to be used for single page applications as well as server side rendered applications. Most commonly used with [vite](https://vite.dev/).

### 1. Install the package

```console
$ pnpm add @lanekassen/ds-css
```

### 2. Import CSS

CSS can be imported through Javascript

```js
import "@lanekassen/ds-css";
```

Or CSS

```css
@import "@lanekassen/ds-css";
```

Or HTML

```html
<head>
  <link rel="stylesheet" href="@lanekassen/ds-css" />
  <link rel="stylesheet" href="@lanekassen/ds-css/theme" />
</head>
```

### 3. Use it

```html
<button class="ds-button" data-variant="secondary">Button</button>
```

### 4. Import a theme

Read more below for use of the standard theme. If you need your own theme, now is a good time to import it

```css
@import "@internal/my-theme";
```

## @lanekassen/ds-css/theme

Lånekassen's CSS theme to be used in internal and external applications.

> [!WARNING]
> While this package only contains CSS files, it is primarly developed with React and `@lanekassen/ds-react` and `@lanekassen/ds-css` in mind. Please consider using React for your application.

## 2. Import CSS

CSS can be imported through Javascript

```js
import "@lanekassen/ds-css/theme";
```

Or CSS

```css
@import "@lanekassen/ds-css/theme";
```

Or HTML

```html
<head>
  <link rel="stylesheet" href="@lanekassen/ds-css/theme" />
</head>
```

## 3. Use it

```html
<style>
.my-button {
    padding: var(--ds-size-2);
    background-color: var(--ds-color-accent-base-default);
}
</style>
<button class="my-button">Button</button>
```
