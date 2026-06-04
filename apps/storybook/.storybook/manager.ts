import { addons } from "storybook/manager-api";
import "@lanekassen/ds-css";
import "@lanekassen/ds-css/theme";
import { theme } from "./theme";

addons.setConfig({
  theme,
});
