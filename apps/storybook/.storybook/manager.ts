import { addons } from 'storybook/manager-api';
import '@lanekassen/ds-css';
import '@lanekassen/ds-theme';
import { theme } from './theme';

addons.setConfig({
  theme,
});