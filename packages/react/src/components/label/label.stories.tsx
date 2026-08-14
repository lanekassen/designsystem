import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "../";

const meta: Meta<typeof Label> = {
  title: "Designsystem/Typography/Label",
  component: Label,
  parameters: {
    customStyles: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--ds-size-2)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Fødselsnummer (11 sifre)",
    weight: "semibold",
  },
};

export const Weights: Story = {
  render: (args) => (
    <>
      <Label {...args} weight="regular">
        Regular weight
      </Label>
      <Label {...args} weight="medium">
        Medium weight
      </Label>
      <Label {...args} weight="semibold">
        Semibold weight
      </Label>
      <Label {...args} weight="bold">
        Bold weight
      </Label>
    </>
  ),
};
