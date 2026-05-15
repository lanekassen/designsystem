import '@lanekassen/ds-css';
import '@lanekassen/ds-theme';
import './style.css';

import type { Preview } from '@storybook/react-vite'
import { theme } from './theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    docs: {
      theme,
    },
  },
};

export default preview;