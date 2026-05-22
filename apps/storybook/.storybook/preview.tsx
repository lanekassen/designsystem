import '@lanekassen/ds-css';
import '@lanekassen/ds-theme';
import './style.css';

import { type Preview, ReactRenderer } from '@storybook/react-vite'
import { DocsContainer, DocsContainerProps, Unstyled } from "@storybook/addon-docs/blocks";
import { withThemeByDataAttribute } from '@storybook/addon-themes';
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
        order: ['Introduksjon', 'Komponenter'],
      },
    },
    docs: {
      theme,
      codePanel: true,
      container: (props: DocsContainerProps) => (
        <Unstyled>
          <DocsContainer {...props} />
        </Unstyled>
      ),
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-color-scheme',
    }),
  ]
};

export default preview;
