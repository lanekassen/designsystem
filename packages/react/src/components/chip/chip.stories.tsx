import preview from "../../../../../apps/storybook/.storybook/preview";

import { Chip, type ChipButtonProps, type ChipRemovableProps } from "../";

const meta = preview.meta({
  title: "Designsystem/Chip",
  component: Chip.Radio,
  parameters: {
    customStyles: { display: "flex", gap: "var(--ds-size-2)" },
  },
});

export const Default = meta.story({
  render: (args) => (
    <>
      <Chip.Radio {...args} name="my-radio" value="nynorsk" defaultChecked>
        Nynorsk
      </Chip.Radio>
      <Chip.Radio {...args} name="my-radio" value="bokmål">
        Bokmål
      </Chip.Radio>
    </>
  ),
});

export const Checkbox = meta.story({
  render: (args) => <Chip.Checkbox {...args}>Nynorsk</Chip.Checkbox>,
});

export const Removable = meta.story({
  render: (args) => (
    <Chip.Removable {...(args as ChipRemovableProps)}>Norge</Chip.Removable>
  ),

  args: {
    "aria-label": "Slett Norge",
  },
});

export const Button = meta.story({
  render: (args) => (
    <Chip.Button {...(args as ChipButtonProps)}>Tøm alle filtre</Chip.Button>
  ),

  parameters: {
    customStyles: {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
});
