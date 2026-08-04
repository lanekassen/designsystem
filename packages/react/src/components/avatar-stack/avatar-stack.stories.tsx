import type { Meta, StoryFn } from "@storybook/react-vite";
import { person1Img, person2Img } from "../../../stories/constants";
import {
  Avatar,
  EXPERIMENTAL_AvatarStack as AvatarStack,
  Tooltip,
} from "../";

type Story = StoryFn<typeof AvatarStack>;

const meta: Meta<typeof AvatarStack> = {
  title: "Designsystem/AvatarStack",
  component: AvatarStack,
  parameters: {
    layout: "padded",
  },
  args: {
    "aria-label": "Test av aria label",
  },
};

export default meta;

export const Default: Story = (args) => (
  <AvatarStack {...args} aria-hidden>
    <Avatar aria-label="Navn">{person1Img}</Avatar>
    <Avatar aria-label="Navn" initials="sm" />
    <Avatar aria-label="Navn">Ry</Avatar>
  </AvatarStack>
);


export const WithTooltip: Story = (args) => (
  <div
    style={{ display: "flex", flexDirection: "row", gap: "var(--ds-size-4)" }}
  >

      <AvatarStack {...args}>
        <Tooltip content="Ola Nordmann">
          <Avatar aria-label="Navn" initials="ry" />
        </Tooltip>
        <Tooltip content="Person 3">
          <Avatar aria-label="Navn">{person1Img}</Avatar>
        </Tooltip>
        <Tooltip content="Person 4">
          <Avatar aria-label="Navn">{person2Img}</Avatar>
        </Tooltip>
      </AvatarStack>

  </div>
);
