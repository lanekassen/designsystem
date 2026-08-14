import {
  Label as DigdirLabel,
  LabelProps as DigdirLabelProps,
} from "@digdir/designsystemet-react";

/**
 * @see {@link DigdirLabelProps}
 */
export type LabelProps = Omit<
  React.ComponentPropsWithRef<typeof DigdirLabel>,
  "weight"
> & {
  weight?: "regular" | "medium" | "semibold" | "bold";
};

/**
 * @see {@link DigdirLabel}
 */
export function Label({ weight, ...rest }: LabelProps) {
  return <DigdirLabel data-weight={weight} {...rest} />;
}
