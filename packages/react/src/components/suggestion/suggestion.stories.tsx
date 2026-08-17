import { useDebounceCallback } from "@digdir/designsystemet-react";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { type InputEventHandler, useState } from "react";
import {
  Button,
  Details,
  Divider,
  Field,
  Label,
  Paragraph,
  Spinner,
  EXPERIMENTAL_Suggestion as Suggestion,
  type SuggestionItem,
  type SuggestionMultipleProps,
  type SuggestionProps,
  type SuggestionSingleProps,
} from "../";

export default {
  title: "Designsystem/Suggestion",
  component: Suggestion,
  /* add height by default */
  decorators: [
    (Story) => (
      <div style={{ minHeight: "300px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    chromatic: {
      disableSnapshot: false,
    },
    a11y: {
      config: {
        rules: [
          // Axe can't find listbox inside shadow-dom, and thus thinks <data> elements
          // (chips for selected items) don't have an appropriate parent element
          {
            id: "aria-required-parent",
            matches: (element: HTMLElement) =>
              !(element instanceof HTMLDataElement),
          },
          {
            // TODO: this rule should be enabled after https://github.com/dequelabs/axe-core/issues/4672 have propagated to @storybook/addon-a11y.
            id: "aria-allowed-role",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta;

const DATA_PLACES = [
  "Sogndal",
  "Oslo",
  "Brønnøysund",
  "Stavanger",
  "Trondheim",
  "Bergen",
  "Lillestrøm",
];

const DATA_PEOPLE = [
  { label: "Lars", value: "#004" },
  { label: "James", value: "#007" },
  { label: "Nina", value: "#113" },
  { label: "Tove", value: "#110" },
];

export const Default: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion {...args}>
        <Suggestion.Input />
        <Suggestion.Toggle />
        <Suggestion.Clear />
        <Suggestion.List id="123">
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place} label={place} value={place}>
              {place}
              <div>Kommune</div>
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const ControlledSingle: StoryFn<SuggestionSingleProps> = (args) => {
  const [selected, setSelected] = useState<string | undefined>("");

  return (
    <>
      <Field>
        <Label>Velg destinasjon</Label>
        <Suggestion
          {...args}
          selected={selected}
          onSelectedChange={(item) => setSelected(item?.value)}
        >
          <Suggestion.Input />
          <Suggestion.Toggle />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Tomt</Suggestion.Empty>
            {DATA_PLACES.map((place) => (
              <Suggestion.Option key={place} label={place} value={place}>
                {place}
                <div>Kommune</div>
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
      <Divider style={{ marginTop: "var(--ds-size-4)" }} />

      <Paragraph style={{ margin: "var(--ds-size-2) 0" }}>
        Valgte reisemål: {selected}
      </Paragraph>

      <Button
        onClick={() => {
          setSelected("Sogndal");
        }}
      >
        Sett reisemål til Sogndal
      </Button>
    </>
  );
};

export const ControlledMultiple: StoryFn<SuggestionMultipleProps> = (args) => {
  const [selected, setSelected] = useState<string[]>(["Oslo"]);

  return (
    <>
      <Field>
        <Label>Velg destinasjoner</Label>
        <Suggestion
          {...args}
          multiple
          selected={selected}
          onSelectedChange={(items) =>
            setSelected(items.map((item) => item.value))
          }
        >
          <Suggestion.Input />
          <Suggestion.Toggle />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Tomt</Suggestion.Empty>
            {DATA_PLACES.map((place) => (
              <Suggestion.Option key={place} label={place} value={place}>
                {place}
                <div>Kommune</div>
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
      <Divider style={{ marginTop: "var(--ds-size-4)" }} />

      <Paragraph style={{ margin: "var(--ds-size-2) 0" }}>
        Valgte reisemål: {selected.join(", ")}
      </Paragraph>

      <Button
        onClick={() => {
          setSelected(["Sogndal", "Stavanger"]);
        }}
      >
        Sett reisemål til Sogndal, Stavanger
      </Button>
    </>
  );
};

export const ControlledIndependentLabelValue: StoryFn<SuggestionSingleProps> = (
  args,
) => {
  const [item, setItem] = useState<SuggestionItem | null>(DATA_PEOPLE[0]);

  return (
    <>
      <Field>
        <Label>Velg person</Label>
        <Suggestion
          {...args}
          selected={item}
          onSelectedChange={setItem}
          filter={false}
        >
          <Suggestion.Input />
          <Suggestion.Toggle />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Tomt</Suggestion.Empty>
            {DATA_PEOPLE.map(({ label, value }) => (
              <Suggestion.Option key={value} label={label} value={value}>
                {label}
              </Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
      <Divider style={{ marginTop: "var(--ds-size-4)" }} />

      <div style={{ margin: "var(--ds-size-2) 0" }}>
        Valgt person:
        <pre
          style={{
            fontSize: 14,
            height: 100,
            whiteSpace: "pre-wrap",
          }}
        >
          {JSON.stringify(item)}
        </pre>
      </div>

      <Button
        onClick={() => {
          setItem(DATA_PEOPLE[2]);
        }}
      >
        Sett Nina
      </Button>
    </>
  );
};

export const CustomFilterAlt1: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Field>
      <Label>Skriv inn et tall mellom 1-6</Label>
      <Suggestion
        {...args}
        filter={({ index, input }) =>
          !input.value || index === Number(input.value) - 1
        }
      >
        <Suggestion.Input />
        <Suggestion.Toggle />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((label) => (
            <Suggestion.Option key={label} value={label.toLowerCase()}>
              {label}
            </Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

CustomFilterAlt1.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
};

export const CustomFilterAlt2: StoryFn<typeof Suggestion> = (args) => {
  const [selected, setSelected] = useState("");

  return (
    <Field>
      <Label>Skriv inn et tall mellom 1-6</Label>
      <Suggestion {...args} filter={false}>
        <Suggestion.Input
          onInput={({ currentTarget }) => setSelected(currentTarget.value)}
        />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.filter(
            (_, index) => !selected || index === Number(selected) - 1,
          ).map((label) => (
            <Suggestion.Option key={label}>{label}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const CustomMatching: StoryFn<typeof Suggestion> = (args) => {
  const handleBeforeMatch: SuggestionProps["onBeforeMatch"] = (event) => {
    event.preventDefault(); // Prevent default matching
    const { list, control } = event.currentTarget;
    const value = control?.value.toLowerCase() || "";

    for (const option of list?.options || [])
      option.selected = option.value.toLowerCase().startsWith(value); // Setting selected indicates a match
  };

  return (
    <Field>
      <Label>Matcher fra første bokstav</Label>
      <Suggestion {...args} onBeforeMatch={handleBeforeMatch}>
        <Suggestion.Input />
        <Suggestion.Toggle />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((label) => (
            <Suggestion.Option key={label}>{label}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const AlwaysShowAll: StoryFn<SuggestionSingleProps> = (args) => {
  const [selected, setSelected] = useState<string | undefined>("Sogndal");

  return (
    <Field>
      <Label>Viser alle options også når valgt</Label>
      <Suggestion
        {...args}
        selected={selected}
        filter={false}
        onSelectedChange={(item) => setSelected(item?.value)}
      >
        <Suggestion.Input />
        <Suggestion.Toggle />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const FetchExternal: StoryFn<typeof Suggestion> = (args) => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<string[] | null>(null);

  const handleInput: InputEventHandler<HTMLInputElement> = (event) => {
    const value = encodeURIComponent(event.currentTarget.value.trim());
    setValue(event.currentTarget.value);
    setOptions(null); // Clear options

    if (!value) return;

    debounced(value);
  };

  const apiCall = async (value: string) => {
    const api = `https://restcountries.com/v2/name/${value}?fields=name`;
    const countries = await (await fetch(api)).json();
    setOptions(
      Array.isArray(countries) ? countries.map(({ name }) => name) : [],
    );
  };

  const debounced = useDebounceCallback(apiCall, 500);

  return (
    <Field lang="en">
      <Label>Search for countries (in english)</Label>
      <Suggestion {...args} filter={false}>
        <Suggestion.Input onInput={handleInput} />
        <Suggestion.Clear />
        <Suggestion.List singular="%d country" plural="%d countries">
          {value ? (
            <Suggestion.Empty>
              {options ? (
                "Ingen treff"
              ) : (
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Spinner aria-hidden="true" data-size="sm" /> Laster...
                </span>
              )}
            </Suggestion.Empty>
          ) : null}
          {options?.map((option) => (
            <Suggestion.Option key={option}>{option}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

FetchExternal.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
};

export const DefaultValue: StoryFn<SuggestionSingleProps> = (args) => {
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion {...args} defaultSelected={"Sogndal"}>
        <Suggestion.Input />
        <Suggestion.Toggle />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

export const Multiple: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Field>
      <Label>Velg en destinasjon</Label>
      <Suggestion {...args}>
        <Suggestion.Input />
        <Suggestion.Toggle />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>Tomt</Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

Multiple.args = {
  multiple: true,
};

export const InDetails: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Details>
      <Details.Summary>Åpne details som har overflow: clip;</Details.Summary>
      <Details.Content>
        <Field>
          <Label>Velg en destinasjon</Label>
          <Suggestion {...args} autoFocus>
            <Suggestion.Input />
            <Suggestion.Toggle />
            <Suggestion.Clear />
            <Suggestion.List>
              <Suggestion.Empty>Tomt</Suggestion.Empty>
              {DATA_PLACES.map((place) => (
                <Suggestion.Option key={place}>{place}</Suggestion.Option>
              ))}
            </Suggestion.List>
          </Suggestion>
        </Field>
      </Details.Content>
    </Details>
  );
};

export const AutoPlacementOnXAxis: StoryFn<typeof Suggestion> = (args) => {
  return (
    <div style={{ paddingTop: "700px" }}>
      <Field>
        <Label>Velg en destinasjon</Label>
        <Suggestion {...args} autoFocus>
          <Suggestion.Input />
          <Suggestion.Toggle />
          <Suggestion.Clear />
          <Suggestion.List>
            <Suggestion.Empty>Tomt</Suggestion.Empty>
            {DATA_PLACES.map((place) => (
              <Suggestion.Option key={place}>{place}</Suggestion.Option>
            ))}
          </Suggestion.List>
        </Suggestion>
      </Field>
    </div>
  );
};

export const Creatable: StoryFn<typeof Suggestion> = (args) => {
  return (
    <Field>
      <Label>Velg eller legg til en destinasjon</Label>
      <Suggestion {...args}>
        <Suggestion.Input />
        <Suggestion.Toggle />
        <Suggestion.Clear />
        <Suggestion.List>
          <Suggestion.Empty>
            Ingen treff, trykk enter for å legge til
          </Suggestion.Empty>
          {DATA_PLACES.map((place) => (
            <Suggestion.Option key={place}>{place}</Suggestion.Option>
          ))}
        </Suggestion.List>
      </Suggestion>
    </Field>
  );
};

Creatable.args = {
  multiple: true,
  creatable: true,
};
