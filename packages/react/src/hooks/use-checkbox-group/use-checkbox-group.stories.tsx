import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Checkbox,
  Chip,
  Divider,
  Fieldset,
  Paragraph,
  Table,
  ValidationMessage,
} from "../../";
import {
  type UseCheckboxGroupProps,
  useCheckboxGroup,
} from "./use-checkbox-group";

const meta = {
  tags: ["!dev"],
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
} satisfies Meta;

export default meta;

export const Default: StoryObj<UseCheckboxGroupProps> = {
  args: {
    name: "my-group",
    value: ["epost"],
  },
  render: (args) => {
    const { getCheckboxProps, validationMessageProps } = useCheckboxGroup({
      ...args,
    });

    return (
      <Fieldset>
        <Checkbox label="E-post" {...getCheckboxProps("epost")} />
        <Checkbox label="Telefon" {...getCheckboxProps("telefon")} />
        <Checkbox label="SMS" {...getCheckboxProps({ value: "sms" })} />
        <ValidationMessage {...validationMessageProps} />
      </Fieldset>
    );
  },
};

const GroupBase = {
  args: {
    name: "my-group",
    value: ["epost"],
  } as UseCheckboxGroupProps,
  render: (args: UseCheckboxGroupProps) => {
    const { getCheckboxProps, validationMessageProps } = useCheckboxGroup({
      ...args,
    });

    return (
      <Fieldset>
        <Fieldset.Legend>
          Hvordan vil du helst at vi skal kontakte deg?
        </Fieldset.Legend>
        <Fieldset.Description>
          Velg de alternativene som er relevante for deg.
        </Fieldset.Description>
        <Checkbox label="E-post" {...getCheckboxProps("epost")} />
        <Checkbox label="Telefon" {...getCheckboxProps("telefon")} />
        <Checkbox label="SMS" {...getCheckboxProps("sms")} />
        <ValidationMessage {...validationMessageProps} />
      </Fieldset>
    );
  },
};

export const Group: StoryObj<UseCheckboxGroupProps> = {
  ...GroupBase,
};

export const Outline: StoryObj<UseCheckboxGroupProps> = {
  ...Group,
  args: {
    ...Group.args,
    variant: "outline",
  },
};

export const WithError: StoryObj<UseCheckboxGroupProps> = {
  args: {
    ...GroupBase.args,
    name: "my-error",
    error: "Du må velge minst to kontaktalternativ", // TODO: useCheckbox when hook is ready
  },
  render: GroupBase.render,
};

export const ReadOnly: StoryObj<UseCheckboxGroupProps> = {
  args: {
    ...GroupBase.args,
    name: "my-readonly",
    readOnly: true,
  },
  render: GroupBase.render,
};

export const Disabled: StoryObj<UseCheckboxGroupProps> = {
  args: {
    ...GroupBase.args,
    name: "my-disabled",
    disabled: true,
  },
  render: GroupBase.render,
};

export const IndeterminateInTable: StoryObj<UseCheckboxGroupProps> = {
  render: (args, context) => {
    const { getCheckboxProps } = useCheckboxGroup({
      name: context.id,
      value: ["2", "3"],
      ...args,
    });
    const people = [
      { id: 1, name: "Lise Nordmann", education: "Barnehage" },
      { id: 2, name: "Ola Nordmann", education: "Grunnskole" },
      { id: 3, name: "Kari Nordmann", education: "Videregående" },
      { id: 4, name: "Per Nordmann", education: "Barnehage" },
    ];
    return (
      <>
        <style>
          {`
        .checkbox-group-col-1 {
          width: 1px;
        }
        .checkbox-group-col-2 {
          width: 10em;
        }`}
        </style>
        <Table>
          <colgroup>
            {/* ensure the first column only takes up the necessary space */}
            <col className="checkbox-group-col-1" />
            <col className="checkbox-group-col-2" />
            <col />
          </colgroup>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>
                <Checkbox
                  aria-label="Velg alle"
                  {...getCheckboxProps({
                    allowIndeterminate: true,
                    value: "all",
                  })}
                />
              </Table.HeaderCell>
              <Table.HeaderCell>Navn</Table.HeaderCell>
              <Table.HeaderCell>Utdanningsnivå</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {people.map((person) => (
              <Table.Row key={person.name}>
                <Table.Cell>
                  <Checkbox
                    aria-labelledby={`${context.id}-${person.id}-name`}
                    {...getCheckboxProps(person.id.toString())}
                  />
                </Table.Cell>
                <Table.Cell id={`${context.id}-${person.id}-name`}>
                  {person.name}
                </Table.Cell>
                <Table.Cell>{person.education}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </>
    );
  },
};

type Choices = {
  [key: string]: {
    label: string;
  };
};

export const Controlled: StoryObj<UseCheckboxGroupProps> = {
  parameters: {
    customStyles: {
      display: "flex",
      gap: "var(--ds-size-4)",
      flexDirection: "column",
    },
  },
  render: (args) => {
    const choices: Choices = {
      barnehage: { label: "Barnehage" },
      grunnskole: { label: "Grunnskole" },
      videregaende: { label: "Videregående" },
    };
    const { getCheckboxProps, validationMessageProps, value, setValue } =
      useCheckboxGroup({
        name: "my-controlled",
        value: ["barnehage", "videregaende"],
        ...args,
      });

    const toggle = (haystack: string[], needle: string) =>
      haystack.includes(needle)
        ? haystack.filter((value) => value !== needle)
        : haystack.concat(needle);

    const isFiltered = value.length > 0;

    return (
      <>
        <style>
          {`
.checkbox-group-controlled-section {
  display: flex;
  gap: var(--ds-size-2);
}
.checkbox-group-controlled-button {
  width: fit-content;
}`}
        </style>
        <Fieldset>
          <Fieldset.Legend>Utdanningsnivå</Fieldset.Legend>
          {Object.entries(choices).map(([value, { label }]) => (
            <Checkbox key={value} label={label} {...getCheckboxProps(value)} />
          ))}
        </Fieldset>
        <ValidationMessage {...validationMessageProps} />
        <Divider />
        <Paragraph>(Annet innhold)</Paragraph>
        <Divider />
        <div className="checkbox-group-controlled-section">
          <Paragraph>
            {isFiltered ? "Viser innhold for:" : "Viser alt innhold"}
          </Paragraph>
          {isFiltered &&
            value.map((v) => (
              <Chip.Removable
                key={v}
                aria-label={`Slett ${choices[v].label}`}
                onClick={() => setValue(toggle(value, v))}
              >
                {choices[v].label}
              </Chip.Removable>
            ))}
        </div>
        {isFiltered && (
          <Button
            className="checkbox-group-controlled-button"
            variant="secondary"
            onClick={() => setValue([])}
          >
            Tøm filtre
          </Button>
        )}
      </>
    );
  },
};
