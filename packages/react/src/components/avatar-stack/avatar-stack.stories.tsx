import preview from "../../../../../apps/storybook/.storybook/preview";
import { person1Img, person2Img } from "../../../stories/constants";
import { Avatar, EXPERIMENTAL_AvatarStack as AvatarStack, Tooltip } from "../";

const meta = preview.meta({
  title: "Designsystem/AvatarStack",
  component: AvatarStack,
  parameters: {
    layout: "padded",
  },
  args: {
    "aria-label": "Test av aria label",
  },
});

export const Default = meta.story({
  render: (args) => (
    <AvatarStack {...args}>
      <li>
        <Avatar aria-label="Navn">{person1Img}</Avatar>
      </li>
      <li>
        <Avatar aria-label="Navn">sm</Avatar>
      </li>
      <li>
        <Avatar aria-label="Navn">Ry</Avatar>
      </li>
    </AvatarStack>
  ),
});

export const WithTooltip = meta.story({
  render: (args) => (
    <div
      style={{ display: "flex", flexDirection: "row", gap: "var(--ds-size-4)" }}
    >
      <AvatarStack {...args}>
        <li>
          <Tooltip content="Ola Nordmann">
            <Avatar aria-label="Navn">ON</Avatar>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Person 3">
            <Avatar aria-label="Navn">{person1Img}</Avatar>
          </Tooltip>
        </li>
        <li>
          <Tooltip content="Person 4">
            <Avatar aria-label="Navn">{person2Img}</Avatar>
          </Tooltip>
        </li>
      </AvatarStack>
    </div>
  ),
});
