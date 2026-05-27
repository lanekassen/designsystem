import '@lanekassen/ds-css';
import '@lanekassen/ds-theme';
import './preview.css';

import { MDXProvider } from "@mdx-js/react";
import { definePreview } from '@storybook/react-vite'
import addonDocs from '@storybook/addon-docs';
import addonThemes from '@storybook/addon-themes';
import { DocsContainer, DocsContainerProps, Unstyled } from '@storybook/addon-docs/blocks';
import { Link, List, Paragraph } from '@lanekassen/ds-react';
import componentStyles from './docs/components.module.css';
import { HeadingSelfLink } from './docs/components';

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
        order: ['Introduksjon', 'Tokens', 'Komponenter'],
      },
    },
    docs: {
      codePanel: true,
      container: (props: DocsContainerProps) => (
        <Unstyled>
          <MDXProvider
            components={{
              h1: (props) => (
                <HeadingSelfLink {...props} className={componentStyles.heading} data-size="lg" data-typography="secondary" />
              ),
              h2: (props) => (
                <HeadingSelfLink {...props} className={componentStyles.heading} data-size="md" data-typography="secondary" />
              ),
              h3: (props) => (
                <HeadingSelfLink {...props} className={componentStyles.heading} data-size="sm" data-typography="secondary" />
              ),
              h4: (props) => (
                <HeadingSelfLink {...props} className={componentStyles.heading} data-size="xs" data-typography="secondary" />
              ),
              ol: (props) => <List.Ordered {...props} className={componentStyles.list} />,
              ul: (props) => <List.Unordered {...props} className={componentStyles.list} />,
              p: (props) => <Paragraph {...props} className={componentStyles.paragraph} />,
              a: (props) => <Link {...props} className={componentStyles.link}>{props.children}</Link>,
            }}
          >
            <DocsContainer {...props} />
          </MDXProvider>
        </Unstyled>
      ),
    },
  },
});
