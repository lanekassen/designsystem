import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  severityColors,
  sizenames,
  themeColors,
} from "../../../stories/constants";
import { Label } from "../../";
import { Progress } from "./progress";

const meta = {
  title: "Designsystem/Progress",
  component: Progress,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
};

export const Indeterminate: Story = {
  render: ({ ...args }) => (
    <Label>
      Ubestemt
      <Progress {...args} />
    </Label>
  ),
};

export const Colors: Story = {
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
};

export const Sizes: Story = {
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
};
