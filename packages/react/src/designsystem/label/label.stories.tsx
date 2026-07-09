import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "../";

const meta: Meta<typeof Label> = {
  title: "Designsystem/Typography/Label",
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Fødselsnummer (11 sifre)",
    weight: "semibold",
  },
};
