import type {
  Color,
  ColorScheme,
  SeverityColors,
  Size,
} from "@digdir/designsystemet-types";

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      /**
       * Represents the recommended size options for the Designsystemet variables.
       * - `'sm'`: Use the small size.
       * - `'md'`: Use the medium size.
       * - `'lg'`: Use the large size.
       */
      "data-size"?: Size | (string & {});
      /**
       * Represents the available color options for the Designsystemet variables.
       *
       * Consist of both main, support and severity colors
       */
      "data-color"?: Color | SeverityColors | (string & {});
      /**
       * Represents the available color scheme options for the Designsystemet variables.
       * - `'light'`: Use the light color scheme.
       * - `'dark'`: Use the dark color scheme.
       * - `'auto'`: Automatically select the color scheme based on system preferences.
       */
      "data-color-scheme"?: ColorScheme | (string & {});
    }
  }
}
