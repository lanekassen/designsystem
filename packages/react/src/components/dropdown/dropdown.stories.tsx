import { ChevronDownIcon, ChevronUpIcon, LinkIcon } from "@navikt/aksel-icons";
import { useState } from "react";
import preview from "../../../../../apps/storybook/.storybook/preview";
import { Button, Dialog, Dropdown } from "../";

const meta = preview.meta({
  title: "Designsystem/Dropdown",
  component: Dropdown,
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
  },
});

export const Default = meta.story({
  render: (args) => {
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
  },

  args: {
    placement: "bottom-end",
  },
});

export const Icons = meta.story({
  render: (args) => {
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
  },
});

export const Controlled = meta.story(() => {
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
});

export const ControlledExternalTrigger = meta.story(() => {
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
});

export const WithoutTrigger = meta.story(() => {
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
});

export const WithNestedDialog = meta.story({
  render: (args) => {
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
  },
});
