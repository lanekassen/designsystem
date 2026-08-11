import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Divider,
  Fieldset,
  Paragraph,
  Radio,
  type UseRadioGroupProps,
  useRadioGroup,
  ValidationMessage,
} from "../..";

const meta = {
  tags: ["!dev"],
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
} satisfies Meta;

export default meta;

const ageGroups = [
  { value: "10-20", label: "10-20 år" },
  { value: "21-45", label: "21-45 år" },
  { value: "46-80", label: "46-80 år" },
];

export const Default: StoryObj<UseRadioGroupProps> = {
  args: {
    name: "my-group",
    value: "10-20",
  },
  render: (args) => {
    const { getRadioProps, validationMessageProps } = useRadioGroup({
      ...args,
    });

    return (
      <Fieldset>
        <Fieldset.Legend>Velg din aldersgruppe</Fieldset.Legend>
        {ageGroups.map((group) => (
          <Radio
            key={group.value}
            label={group.label}
            {...getRadioProps(group.value)}
          />
        ))}
        <ValidationMessage {...validationMessageProps} />
      </Fieldset>
    );
  },
};

const educationLevels = [
  { value: "kindergarten", label: "Barnehage" },
  { value: "primary", label: "Grunnskole" },
  { value: "secondary", label: "Videregående" },
  { value: "higher", label: "Høyere utdanning" },
];

export const Controlled: StoryObj<UseRadioGroupProps> = {
  parameters: {
    customStyles: {
      display: "flex",
      gap: "var(--ds-size-2)",
      flexDirection: "column",
    },
  },
  render: (args) => {
    const { value, setValue, getRadioProps } = useRadioGroup({
      ...args,
    });
    return (
      <>
        <style>
          {`
        .radio-group-controlled-button__group {
          display: flex;
          gap: var(--ds-size-2);
        }`}
        </style>
        <Fieldset>
          <Fieldset.Legend>Utdanningsnivå</Fieldset.Legend>
          <Fieldset.Description>
            Velg det høyeste utdanningsnivået du har fullført.
          </Fieldset.Description>
          {educationLevels.map((level) => (
            <Radio
              key={level.value}
              label={level.label}
              {...getRadioProps(level.value)}
            />
          ))}
        </Fieldset>
        <Divider />
        <Paragraph>
          Du har valgt:{" "}
          {educationLevels.find((level) => level.value === value)?.label}
        </Paragraph>
        <div className="radio-group-controlled-button__group">
          <Button variant="secondary" onClick={() => setValue("kindergarten")}>
            Velg Barnehage
          </Button>
          <Button variant="secondary" onClick={() => setValue("primary")}>
            Velg Grunnskole
          </Button>
        </div>
      </>
    );
  },
};

const GroupBase: StoryObj<UseRadioGroupProps> = {
  args: {
    name: "my-group",
    value: "sjokolade",
  },
  render: (args: UseRadioGroupProps) => {
    const { getRadioProps, validationMessageProps } = useRadioGroup({
      ...args,
    });

    return (
      <Fieldset>
        <Fieldset.Legend>Velg din aldersgruppe</Fieldset.Legend>
        <Fieldset.Description>
          Informasjonen blir brukt til å tilpasse innholdet på siden.
        </Fieldset.Description>
        {ageGroups.map((group) => (
          <Radio
            key={group.value}
            label={group.label}
            {...getRadioProps(group.value)}
          />
        ))}
        <ValidationMessage {...validationMessageProps} />
      </Fieldset>
    );
  },
};

export const Group: StoryObj<UseRadioGroupProps> = {
  ...GroupBase,
};

export const Outline: StoryObj<UseRadioGroupProps> = {
  ...Group,
  args: {
    ...Group.args,
    variant: "outline",
  },
};

export const WithError: StoryObj<UseRadioGroupProps> = {
  args: {
    ...GroupBase.args,
    error: "Du må velge en aldersgruppe",
    name: "my-error",
  },
  render: GroupBase.render,
};

export const Disabled: StoryObj<UseRadioGroupProps> = {
  args: { ...GroupBase.args, disabled: true, name: "my-disabled" },
  render: GroupBase.render,
  parameters: {
    // Disabled inputs don't pass text contrast requirements
    a11y: { config: { rules: [{ id: "color-contrast", enabled: false }] } },
  },
};

export const ReadOnly: StoryObj<UseRadioGroupProps> = {
  args: { ...GroupBase.args, readOnly: true, name: "my-readonly" },
  render: GroupBase.render,
};
