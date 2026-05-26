import '@lanekassen/ds-css';
import '@lanekassen/ds-theme';
import './style.css';

import { MDXProvider } from "@mdx-js/react";
import { definePreview } from '@storybook/react-vite'
import addonDocs from '@storybook/addon-docs';
import addonThemes from '@storybook/addon-themes';
import { DocsContainer, DocsContainerProps, Unstyled } from '@storybook/addon-docs/blocks';

export default definePreview({
  addons: [addonDocs(), addonThemes()],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduksjon', 'Komponenter'],
      },
    },
    docs: {
      codePanel: true,
      container: (props: DocsContainerProps) => (
        <Unstyled>
          <MDXProvider
            components={{
              h1: (props) => (
                <h1 {...props} className="ds-heading" data-size="lg" style={{ marginBottom: "var(--ds-size-4)" }} />
              ),
              h2: (props) => (
                <h2 {...props} className="ds-heading" data-size="md" style={{ marginBottom: "var(--ds-size-4)" }} />
              ),
              h3: (props) => (
                <h3 {...props} className="ds-heading" data-size="sm" style={{ marginBottom: "var(--ds-size-4)" }} />
              ),
              h4: (props) => (
                <h4 {...props} className="ds-heading" data-size="xs" style={{ marginBottom: "var(--ds-size-4)" }} />
              ),
              ol: (props) => <ol {...props} className="ds-list" />,
              ul: (props) => <ul {...props} className="ds-list" />,
              p: (props) => <p {...props} className="ds-paragraph" />,
              a: (props) => <a {...props} className="ds-link" />,
            }}
          >
            <DocsContainer {...props} />
          </MDXProvider>
        </Unstyled>
      )
    },
  },
});
