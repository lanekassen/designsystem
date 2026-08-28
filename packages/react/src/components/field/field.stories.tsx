import preview from "../../../../../apps/storybook/.storybook/preview";
import {
  Divider,
  Field,
  Input,
  Label,
  Tag,
  Textarea,
  ValidationMessage,
} from "../";

const meta = preview.meta({
  title: "Designsystem/Field",
  component: Field,
  parameters: {
    customStyles: {
      maxWidth: 600,
      width: "90vw",
    },
  },
});

export const Default = meta.story(() => {
  return (
    <Field>
      <Label>Ledetekst</Label>
      <Field.Description>Beskrivelse</Field.Description>
      <Input />
    </Field>
  );
});

export const Affix = meta.story(() => (
  <Field>
    <Label>Hvor mange kroner koster det per måned?</Label>
    <Field.Affixes>
      <Field.Affix>NOK</Field.Affix>
      <Input />
      <Field.Affix>pr. mnd.</Field.Affix>
    </Field.Affixes>
  </Field>
));

export const Counter = meta.story(() => (
  <Field>
    <Label>Legg til en beskrivelse</Label>
    <Textarea rows={2} />
    <Field.Counter limit={10} />
  </Field>
));

export const Position = meta.story({
  render: () => (
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
  ),

  decorators: [
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
  ],
});

export const Required = meta.story(() => (
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
));

export const WithValidationMessage = meta.story(() => {
  return (
    <Field>
      <Label>Ledetekst</Label>
      <Field.Description>Beskrivelse</Field.Description>
      <Input />
      <ValidationMessage>Feilmelding</ValidationMessage>
    </Field>
  );
});
