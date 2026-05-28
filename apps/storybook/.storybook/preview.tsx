import "@lanekassen/ds-css";
import "@lanekassen/ds-css/theme";
import "./preview.css";

import { MDXProvider } from "@mdx-js/react";
import { definePreview, type ReactRenderer } from "@storybook/react-vite";
import addonDocs from "@storybook/addon-docs";
import addonThemes, { withThemeByDataAttribute } from "@storybook/addon-themes";
import {
  DocsContainer,
  type DocsContainerProps,
  Unstyled,
} from "@storybook/addon-docs/blocks";
import { Link, List, Paragraph } from "@lanekassen/ds-react";
import componentStyles from "./docs/components.module.css";
import { HeadingSelfLink } from "./docs/components";
import { theme } from "./theme";
import { useEffect, useRef } from "react";

const defaultTheme = "light";

export default definePreview({
  addons: [addonDocs(), addonThemes()],
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme,
      attributeName: "data-color-scheme",
    }),
  ],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Introduksjon", "Tokens", "Komponenter"],
      },
    },
    docs: {
      theme,
      codePanel: true,
      container: (props: DocsContainerProps<ReactRenderer>) => {
        const container = useRef<HTMLDivElement>(null);

        useEffect(() => {
          const theme = getTheme();
          document.documentElement.setAttribute("data-color-scheme", theme);
          container.current
            ?.querySelectorAll(
              ".markdown-alert-caution, .markdown-alert-note, .markdown-alert-tip, .markdown-alert-important, .markdown-alert-warning",
            )
            .forEach((x) => {
              x.classList.add("ds-alert");
              if (x instanceof HTMLElement) {
                if (x.classList.contains("markdown-alert-caution"))
                  x.dataset.color = "danger";
                if (x.classList.contains("markdown-alert-tip"))
                  x.dataset.color = "success";
                if (x.classList.contains("markdown-alert-note"))
                  x.dataset.color = "info";
                if (x.classList.contains("markdown-alert-important"))
                  x.dataset.color = "primary";
                if (x.classList.contains("markdown-alert-warning"))
                  x.dataset.color = "warning";
              }
            });
        });
        return (
          <div ref={container}>
            <Unstyled>
              <MDXProvider
                components={{
                  h1: (props) => (
                    <HeadingSelfLink
                      {...props}
                      className={componentStyles.heading}
                      data-size="lg"
                      data-typography="secondary"
                    />
                  ),
                  h2: (props) => (
                    <HeadingSelfLink
                      {...props}
                      className={componentStyles.heading}
                      data-size="md"
                      data-typography="secondary"
                    />
                  ),
                  h3: (props) => (
                    <HeadingSelfLink
                      {...props}
                      className={componentStyles.heading}
                      data-size="sm"
                      data-typography="secondary"
                    />
                  ),
                  h4: (props) => (
                    <HeadingSelfLink
                      {...props}
                      className={componentStyles.heading}
                      data-size="xs"
                      data-typography="secondary"
                    />
                  ),
                  ol: (props) => (
                    <List.Ordered {...props} className={componentStyles.list} />
                  ),
                  ul: (props) => (
                    <List.Unordered
                      {...props}
                      className={componentStyles.list}
                    />
                  ),
                  p: (props) => (
                    <Paragraph
                      {...props}
                      className={componentStyles.paragraph}
                    />
                  ),
                  a: (props) => (
                    <Link {...props} className={componentStyles.link}>
                      {props.children}
                    </Link>
                  ),
                }}
              >
                <DocsContainer {...props} />
              </MDXProvider>
            </Unstyled>
          </div>
        );
      },
    },
  },
});

function getTheme() {
  const top = window.top?.location || window.location;
  const url = new URL(top.href);
  const globals = new URLSearchParams(
    url.searchParams.get("globals")?.replace(/;/g, "&").replace(/:/g, "="),
  );
  const theme = globals.get("theme") || defaultTheme;
  return theme;
}
