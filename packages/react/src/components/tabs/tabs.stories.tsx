import {
  PersonCircleIcon,
  EnvelopeClosedIcon,
  HouseIcon
} from "@navikt/aksel-icons";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import { expect } from "storybook/test";
import { Button, Tabs, Tooltip } from "../";

export default {
  title: "Designsystem/Tabs",
  component: Tabs,
} as Meta;

export const Default: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Tab value="value1">Din side</Tabs.Tab>
      <Tabs.Tab value="value2">Innboks</Tabs.Tab>
      <Tabs.Tab value="value3">Profil</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="value1">Innhold din side</Tabs.Panel>
    <Tabs.Panel value="value2">Innhold innboks</Tabs.Panel>
    <Tabs.Panel value="value3">Innhold profil</Tabs.Panel>
  </Tabs>
);

Default.args = {
  defaultValue: "value1",
};

export const IconsWithText: StoryFn<typeof Tabs> = () => (
  <Tabs defaultValue="car">
    <Tabs.List>
      <Tabs.Tab value="car">
        <HouseIcon aria-hidden="true" />
        Din side
      </Tabs.Tab>

      <Tabs.Tab value="bicycle">
        <EnvelopeClosedIcon aria-hidden="true" />
        Innboks
      </Tabs.Tab>

      <Tabs.Tab value="motorcycle">
        <PersonCircleIcon aria-hidden="true" />
        Profil
      </Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="car">
      Du har ingen av denne typen registrert hos oss
    </Tabs.Panel>
    <Tabs.Panel value="bicycle">
      Du har ingen av denne typen registrert hos oss
    </Tabs.Panel>
    <Tabs.Panel value="motorcycle">
      Du har ingen av denne typen registrert hos oss
    </Tabs.Panel>
  </Tabs>
);


export const DefaultValue: StoryFn<typeof Tabs> = () => (
  <Tabs defaultValue="value2">
    <Tabs.List>
      <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
      <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
      <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="value1">content 1</Tabs.Panel>
    <Tabs.Panel value="value2">content 2</Tabs.Panel>
    <Tabs.Panel value="value3">content 3</Tabs.Panel>
  </Tabs>
);
