import { ChevronDownIcon, ChevronUpIcon, LinkIcon } from "@navikt/aksel-icons";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import { Button, Dialog, Dropdown } from "../";

const meta: Meta<typeof Dropdown> = {
  title: "Designsystem/Dropdown",
  component: Dropdown,
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
};

export default meta;

export const Default: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger data-color={args["data-color"]}>
        Dropdown
      </Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.Heading>First heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 1.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
        <Dropdown.Heading>Second heading</Dropdown.Heading>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.1</Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button>Button 2.2</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

Default.args = {
  placement: "bottom-end",
};

export const Icons: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button asChild>
              <a
                href="https://github.com/digdir/designsystemet"
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon aria-hidden />
                Github
              </a>
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button asChild>
              <a
                href="https://designsystemet.no"
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon aria-hidden />
                Designsystemet.no
              </a>
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

export const Controlled: StoryFn<typeof Dropdown> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger>
        Dropdown
        {open ? <ChevronDownIcon aria-hidden /> : <ChevronUpIcon aria-hidden />}
      </Dropdown.Trigger>
      <Dropdown
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>
              Trykk på meg lukker
            </Dropdown.Button>
          </Dropdown.Item>
          <Dropdown.Item>
            <Dropdown.Button onClick={() => setOpen(false)}>
              Eg lukker også
            </Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};

export const ControlledExternalTrigger: StoryFn<typeof Dropdown> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button popovertarget="dropdown">Dropdown</Button>
      <Dropdown
        id="dropdown"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  );
};

export const WithoutTrigger: StoryFn<typeof Dropdown> = () => {
  return (
    <>
      <Button popovertarget="dropdown">Dropdown</Button>
      <Dropdown id="dropdown">
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  );
};

export const WithNestedDialog: StoryFn<typeof Dropdown> = (args) => {
  return (
    <Dropdown.TriggerContext>
      <Dropdown.Trigger data-color={args["data-color"]}>
        Dropdown
      </Dropdown.Trigger>
      <Dropdown {...args}>
        <Dropdown.List>
          <Dropdown.Item>
            <Dialog.TriggerContext>
              <Dialog.Trigger asChild>
                <Dropdown.Button>Dialog</Dropdown.Button>
              </Dialog.Trigger>
              <Dialog>Min dialog</Dialog>
            </Dialog.TriggerContext>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </Dropdown.TriggerContext>
  );
};
