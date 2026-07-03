import { addons } from "storybook/manager-api";
import "@lanekassen/ds-css";
import "@lanekassen/ds-css/theme";
import { theme } from "./theme";

addons.setConfig({
  theme,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
    remount: { hidden: true },
  },
});
