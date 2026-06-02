import { create } from 'storybook/theming';

export const theme = create({
  brandTitle: 'Lånekassen Designsystem',
  brandImage: 'logo.svg',
  fontBase: '"Nunito Sans", sans-serif',
  // Colors
  base: 'light',
  colorSecondary: '#410464',
  textColor: '#1e2b3c', // TODO does not work with css vars atm. bug? (propstable, <Markdown />, show code btn)
  inputTextColor: 'var(--ds-color-neutral-text-default)',
  appBg: 'var(--ds-color-neutral-background-tinted)',
  appPreviewBg: 'var(--ds-color-neutral-background-tinted)',
  appContentBg: 'transparent',
  barBg: 'var(--ds-color-neutral-background-tinted)',
});