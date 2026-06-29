import "@lanekassen/ds-css";
import "@lanekassen/ds-css/theme";
import "./preview.css";

import { Divider, List, Paragraph } from "@lanekassen/ds-react";
import { MDXProvider } from "@mdx-js/react";
import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import {
  DocsContainer,
  type DocsContainerProps,
  Unstyled,
} from "@storybook/addon-docs/blocks";
import addonThemes, { withThemeByDataAttribute } from "@storybook/addon-themes";
import { definePreview, type ReactRenderer } from "@storybook/react-vite";
import { useEffect, useRef } from "react";
import { HeadingSelfLink, StorybookLink } from "./docs/components";
import componentStyles from "./docs/components.module.css";
import { theme } from "./theme";

const defaultTheme = "light";

export default definePreview({
  addons: [addonA11y(), addonDocs(), addonThemes()],
  decorators: [
    // --- 1. DYNAMIC DECORATOR TRACKS IF USER IS LOOKING AT MDX OR STORIES ---
    (Story, context) => {
      if (typeof window !== "undefined" && window.top) {
        const topDoc = window.top.document.documentElement;
        if (context.viewMode === "docs") {
          topDoc.classList.add("sb-hide-tools-on-mdx");
        } else {
          topDoc.classList.remove("sb-hide-tools-on-mdx");
        }
      }
      return <Story />;
    },
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

    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Introduksjon",
          "Tokens",
          "Komponenter",
          "Utvikling",
          ["Changelog", "Introduction"],
        ],
      },
    },

    controls: { disable: true },
    actions: { disable: true },
    backgrounds: { disable: true }, // Keeps backgrounds disabled globally if required

    a11y: {
      test: "error",
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
                    />
                  ),
                  h2: (props) => (
                    <HeadingSelfLink
                      {...props}
                      className={componentStyles.heading}
                      data-size="md"
                    />
                  ),
                  h3: (props) => (
                    <HeadingSelfLink
                      {...props}
                      className={componentStyles.heading}
                      data-size="sm"
                    />
                  ),
                  h4: (props) => (
                    <HeadingSelfLink
                      {...props}
                      className={componentStyles.heading}
                      data-size="xs"
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
                  hr: (props) => (
                    <Divider {...props} className={componentStyles.hr} />
                  ),
                  a: StorybookLink,
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
