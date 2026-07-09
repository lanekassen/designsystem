import { BriefcaseIcon } from "@navikt/aksel-icons";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { person2Img } from "../../../stories/constants";

import { Avatar, type AvatarProps, Badge, Dropdown } from "../";

type Story = StoryFn<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
  title: "Designsystem/Avatar",
  component: Avatar,
  parameters: {
    layout: "padded",
    customStyles: {
      display: "flex",
      gap: "var(--ds-size-2)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
  },
};

export default meta;

export const Default: Story = (args) => <Avatar {...args} />;

Default.args = {
  "aria-label": "Ola Nordmann",
  variant: "circle",
  children: "",
};

export const NoName: Story = () => <Avatar aria-label="Ola" />;

export const Sizes: Story = () => (
  <>
    <Avatar data-size="xs" aria-label="extra small" initials="xs" />
    <Avatar data-size="xs" aria-label="extra small" />
    <Avatar data-size="sm" aria-label="small" initials="sm" />
    <Avatar data-size="sm" aria-label="small" />
    <Avatar data-size="md" aria-label="medium" initials="md" />
    <Avatar data-size="md" aria-label="medium" />
    <Avatar data-size="lg" aria-label="large" initials="lg" />
    <Avatar data-size="lg" aria-label="large" />
  </>
);

export const WithImage: Story = () => (
  <Avatar aria-label="Ola Nordmann">{person2Img}</Avatar>
);

export const InDropdown: Story = () => (
  <Dropdown.TriggerContext>
    <Dropdown.Trigger variant="tertiary">
      <Avatar aria-label="Ola Nordmann" data-size="sm">
        ON
      </Avatar>
      Velg Profil
    </Dropdown.Trigger>
    <Dropdown placement="bottom-end" autoPlacement={false} data-size="md" open>
      <Dropdown.List>
        <Dropdown.Item>
          <Dropdown.Button>
            <Badge.Position overlap="circle">
              <Badge data-color="danger" data-size="sm"></Badge>
              <Avatar aria-hidden={true} data-size="xs">
                ON
              </Avatar>
            </Badge.Position>
            Ola Nordmann
          </Dropdown.Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Dropdown.Button>
            <Avatar aria-hidden data-size="xs">
              <BriefcaseIcon />
            </Avatar>
            Høyskolen Kristiania
          </Dropdown.Button>
        </Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  </Dropdown.TriggerContext>
);
InDropdown.parameters = {
  layout: "fullscreen",
  customStyles: {
    height: "320px",
  },
};

export const AsLink: Story = () => (
  <a href="#link">
    <Avatar aria-label="Ola Nordmann" />
  </a>
);
