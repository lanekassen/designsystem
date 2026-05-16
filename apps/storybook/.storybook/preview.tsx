import '@lanekassen/ds-css';
import '@lanekassen/ds-theme';
import './style.css';

import type { Preview } from '@storybook/react-vite'
import { useDarkMode } from 'storybook-dark-mode';
import { useEffect } from "react";
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
  decorators: [
    (Story) => {
      const darkMode = useDarkMode();
      useEffect(() => {
        document.documentElement.dataset.colorScheme = darkMode ? "dark" : "light";
      }, [darkMode]);
      return <Story />
    }
  ]
};

export default preview;
