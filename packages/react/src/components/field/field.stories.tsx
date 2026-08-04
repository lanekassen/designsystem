import type { Meta, StoryFn } from "@storybook/react-vite";
import {
  Divider,
  Field,
  Input,
  Label,
  Tag,
  Textarea,
  ValidationMessage,
} from "../";

type Story = StoryFn<typeof Field>;

export default {
  title: "Designsystem/Field",
  component: Field,
  parameters: {
    customStyles: {
      maxWidth: 600,
      width: "90vw",
    },
  },
} as Meta;

export const Default: Story = () => {
  return (
    <Field>
      <Label>Ledetekst</Label>
      <Field.Description>Beskrivelse</Field.Description>
      <Input />
    </Field>
  );
};

export const Affix: Story = () => (
  <Field>
    <Label>Hvor mange kroner koster det per måned?</Label>
    <Field.Affixes>
      <Field.Affix>NOK</Field.Affix>
      <Input />
      <Field.Affix>pr. mnd.</Field.Affix>
    </Field.Affixes>
  </Field>
);

Affix.parameters = {
  a11y: {
    test: "todo",
  },
};

export const Counter: Story = () => (
  <Field>
    <Label>Legg til en beskrivelse</Label>
    <Textarea rows={2} />
    <Field.Counter limit={10} />
  </Field>
);

export const Position: Story = () => (
  <>
    <Field position="end">
      <Label>Flymodus</Label>
      <Input type="checkbox" role="switch" />
    </Field>
    <Divider />
    <Field position="end">
      <Label>Lydløs</Label>
      <Input type="checkbox" role="switch" />
    </Field>
  </>
);

Position.decorators = [
  (Story) => (
    <div
      style={{
        maxWidth: 200,
        margin: "auto",
      }}
    >
      <Story />
    </div>
  ),
];

export const Required: Story = () => (
  <Field>
    <Label>
      Hvor bor du?
      <Tag
        data-color="warning"
        style={{ marginInlineStart: "var(--ds-size-2)" }}
      >
        Påkrevd
      </Tag>
    </Label>
    <Input />
  </Field>
);

export const WithValidationMessage: Story = () => {
  return (
    <Field>
      <Label>Ledetekst</Label>
      <Field.Description>Beskrivelse</Field.Description>
      <Input />
      <ValidationMessage>Feilmelding</ValidationMessage>
    </Field>
  );
};
