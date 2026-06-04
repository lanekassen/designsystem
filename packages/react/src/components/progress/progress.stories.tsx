import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "../../";
import { Progress } from "./progress";

const meta = {
  title: "Komponenter/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
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
