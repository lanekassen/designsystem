// Strongly inspired by Utdanningsdirektoratet's and Mattilsynet's ProgressBar components
// https://github.com/Utdanningsdirektoratet/designsystem/blob/2742ec96ee4b980a1d2373aad2f88a113483be3d/%40udir-design/react/src/components/progressBar/ProgressBar.tsx
// https://github.com/Mattilsynet/design/blob/2e552aabab15e962e88ff76b5c1420609d429e4b/designsystem/progress/progress.tsx

import "@u-elements/u-progress";
import { UHTMLProgressShadowRoot } from "@u-elements/u-progress";
import cl from "clsx/lite";

export type ProgressProps = React.ComponentPropsWithRef<"progress">;

export function Progress({ className, ...rest }: ProgressProps) {
  return (
    <u-progress
      className={cl(`lkds-progress`, className)}
      // Ensure shadow dom is server rendered
      // see https://u-elements.github.io/u-elements/elements/u-progress#server-side-rendering
      // biome-ignore lint/security/noDangerouslySetInnerHtml: read above
      dangerouslySetInnerHTML={{ __html: UHTMLProgressShadowRoot }}
      suppressHydrationWarning
      {...rest}
    />
  );
}
