import { BriefcaseIcon, PersonIcon } from "@navikt/aksel-icons";
import preview from "../../../../../apps/storybook/.storybook/preview";
import { person2Img } from "../../../stories/constants";

import { Avatar, Badge, Dropdown } from "../";

const meta = preview.meta({
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
});

export const Default = meta.story({
  args: {
    "aria-label": "Ola Nordmann",
  },
});

export const NoName = meta.story(() => <Avatar aria-label="Ola" />);

export const Sizes = meta.story(() => (
  <>
    <Avatar data-size="xs" aria-label="extra small">
      xs
    </Avatar>
    <Avatar data-size="xs" aria-label="extra small" />
    <Avatar data-size="xs" aria-label="extra small" />
    <Avatar data-size="sm" aria-label="small">
      sm
    </Avatar>
    <Avatar data-size="sm" aria-label="small" />
    <Avatar data-size="sm" aria-label="small" />
    <Avatar data-size="md" aria-label="medium">
      md
    </Avatar>
    <Avatar data-size="md" aria-label="medium" />
    <Avatar data-size="md" aria-label="medium" />
    <Avatar data-size="lg" aria-label="large">
      lg
    </Avatar>
    <Avatar data-size="lg" aria-label="large" />
    <Avatar data-size="lg" aria-label="large" />
  </>
));

export const WithImage = meta.story(() => (
  <Avatar aria-label="Ola Nordmann">{person2Img}</Avatar>
));

export const InDropdown = meta.story({
  render: () => (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger variant="tertiary">
        <Avatar aria-label="Ola Nordmann" data-size="sm">
          ON
        </Avatar>
        Velg Profil
      </Dropdown.Trigger>
      <Dropdown
        placement="bottom-end"
        autoPlacement={false}
        data-size="md"
        open
      >
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
  ),

  parameters: {
    layout: "fullscreen",
    customStyles: {
      height: "320px",
    },
  },
});

export const AsLink = meta.story(() => (
  <Avatar aria-label="Ola Nordmann" asChild>
    <a href="#link">
      <PersonIcon aria-hidden />
    </a>
  </Avatar>
));

export const AsButton = meta.story(() => (
  <Avatar aria-label="Ola Nordmann" asChild>
    <button type="button">
      <PersonIcon aria-hidden />
    </button>
  </Avatar>
));
