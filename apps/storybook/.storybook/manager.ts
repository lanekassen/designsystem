import { addons } from "storybook/manager-api";
import "@lanekassen/ds-css";
import "@lanekassen/ds-css/theme";
import { theme } from "./theme";

addons.setConfig({
  theme,
  rightPanelWidth: 0,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
    remount: { hidden: true },
  } as any,
});

addons.register("lanekassen/panel-manager", (api) => {
  api.togglePanel(true);
  api.setSelectedPanel("storybook/docs/panel");
});

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    /* HIDE SPECIFIC TABS IN THE BOTTOM PANEL */
    button[id*="addon-tab-storybook/controls"],
    button[id*="addon-tab-storybook/actions"],
    button[id*="addon-tab-storybook/interactions"],
    button[id*="addon-tab-interactions"],
    button[id*="interactions"] {
      display: none !important;
    }

    /* HIDES THE ENTIRE BOTTOM PANEL REGION ON MDX PAGES ONLY */
    .sb-hide-tools-on-mdx [id^="storybook-panel-root"],
    .sb-hide-tools-on-mdx [class*="panel"],
    .sb-hide-tools-on-mdx div[role="main"] + div {
      display: none !important;
    }
    
    .sb-hide-tools-on-mdx #storybook-root {
      height: 100vh !important;
    }

    /* Hides toolbar items on MDX documentation */
    .sb-hide-tools-on-mdx button[title*="measure"], 
    .sb-hide-tools-on-mdx button[aria-label*="measure"],
    .sb-hide-tools-on-mdx button[title*="viewport"], 
    .sb-hide-tools-on-mdx button[aria-label*="viewport"],
    .sb-hide-tools-on-mdx button[title*="parameters"],
    .sb-hide-tools-on-mdx button[aria-label*="parameters"] {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}
