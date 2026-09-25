import type { DefaultProps } from "@digdir/designsystemet-react";
import type { ColorScheme } from "@digdir/designsystemet-types";

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      "data-size"?: DefaultProps["data-size"];
      "data-color"?: DefaultProps["data-color"];
      "data-color-scheme"?: ColorScheme | (string & {});

      // Make React support focusgroup attributes
      focusgroup?: string;
      focusgroupstart?: boolean | undefined;
    }

    // Make React support command attributes
    interface ButtonHTMLAttributes<T> extends React.HTMLAttributes<T> {
      command?: string;
      commandfor?: string;
    }
  }
}
