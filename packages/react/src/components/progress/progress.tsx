// Strongly inspired by Utdanningsdirektoratet's ProgressBar component
// https://github.com/Utdanningsdirektoratet/designsystem/blob/2742ec96ee4b980a1d2373aad2f88a113483be3d/%40udir-design/react/src/components/progressBar/ProgressBar.tsx

import '@u-elements/u-progress';
import { type Size } from '@digdir/designsystemet-react';
import type { Color } from '@digdir/designsystemet-types';
import { UHTMLProgressShadowRoot } from '@u-elements/u-progress';
import cl from 'clsx/lite';
import type { AriaRole, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

export type ProgressProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> & {
  /**
   * Changes size for descendant Designsystemet components.
   * Select from predefined sizes.
   */
  'data-size'?: Size;
  /**
   * Changes color of the bar and background
   */
  'data-color'?: Color;
  /**
   * Total number of steps in the process
   */
  max: number;
  /**
   * Current step in the process
   */
  value: number;
  /**
   * Format the progress text with `value`, `max` and `percentage` as arguments: `progressText: ({ value, max, percentage }) => \`Steg ${value} av ${max}\``
   */
  progressText?: (args: {
    value: number;
    max: number;
    percentage: number;
  }) => string;
};

// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label#associated_roles
const nonNameableAriaRoles: AriaRole[] = [
  'caption',
  'code',
  'definition',
  'deletion',
  'emphasis',
  'generic',
  'insertion',
  'mark',
  'paragraph',
  'presentation',
  'none',
  'strong',
  'subscript',
  'suggestion',
  'superscript',
  'term',
  'time',
];

export function Progress(
    { className, max, value, progressText, 'aria-label': ariaLabel, ...rest }: HTMLDivElement,
  ) {
    let screenreaderText: string | undefined;
    // aria-label is not permitted on div without a role, and only certain roles can use it.
    if (!rest.role || (nonNameableAriaRoles.includes(rest.role) && ariaLabel)) {
      screenreaderText = ariaLabel;
    }
    const percentage = max > 0 ? Math.round((value / max) * 100) : 0;
    const text =
      progressText?.({ value, max, percentage }) ?? (value && max) ? `${value} av ${max}` : '';
    return (
      <div
        className={cl(`lkds-progress`, className)}
        aria-label={screenreaderText ? undefined : ariaLabel}
        {...rest}
      >
        {screenreaderText && (
          <span className="ds-sr-only">{screenreaderText}</span>
        )}
        {text && <span>{text}</span>}
        <u-progress
          value={value}
          max={max}
          aria-hidden="true"
          aria-label="..." // only because ARC Toolkit reports empty label as an error, but this will never be read
          // Ensure shadow dom is server rendered
          // see https://u-elements.github.io/u-elements/elements/u-progress#server-side-rendering
          dangerouslySetInnerHTML={{ __html: UHTMLProgressShadowRoot }}
        />
      </div>
    );
};

