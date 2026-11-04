import preview from "../../../../../apps/storybook/.storybook/preview";
import {
  severityColors,
  sizenames,
  themeColors,
} from "../../../stories/constants";
import { Label } from "../../";
import { Progress } from "./progress";

const meta = preview.meta({
  title: "Designsystem/Progress",
  component: Progress,
});

export const Default = meta.story({
  args: {
    value: 33,
    max: 100,
  },
  render: ({ ...args }) => (
    <Label>
      Framdrift
      <Progress {...args} />
    </Label>
  ),
});

export const Indeterminate = meta.story({
  render: ({ ...args }) => (
    <Label>
      Ubestemt
      <Progress {...args} />
    </Label>
  ),
});

export const Colors = meta.story({
  args: {
    value: 50,
  },
  render: ({ ...args }) => (
    <div style={{ display: "flex", flexFlow: "wrap", gap: "var(--ds-size-2)" }}>
      {[...themeColors, ...severityColors].map((color) => (
        <Label key={color}>
          {color}
          <Progress data-color={color} {...args} />
        </Label>
      ))}
    </div>
  ),
});

export const Sizes = meta.story({
  args: {
    value: 50,
  },
  render: ({ ...args }) => (
    <div
      style={{ display: "flex", flexFlow: "column", gap: "var(--ds-size-2)" }}
    >
      {Object.entries(sizenames).map(([size, name]) => (
        <Label data-size={size as keyof typeof sizenames} key={size}>
          {name}
          <Progress {...args} />
        </Label>
      ))}
    </div>
  ),
});
