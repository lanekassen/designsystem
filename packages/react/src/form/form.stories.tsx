import type { Meta, StoryFn } from "@storybook/react-vite";
import { revalidateLogic } from "@tanstack/react-form";
import { useState } from "react";
import * as z from "zod";
import { Checkbox, EXPERIMENTAL_Suggestion, Radio, Select, Tag } from "../";
import { useAppForm } from "./";

const meta = {
  title: "Utvikling/React/Form",
  decorators: [
    (Story) => (
      <div
        style={{
          minWidth: "25rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const FormTextfield: StoryFn = () => {
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
  });

  const form = useAppForm({
    defaultValues: {
      name: "",
    } as z.input<typeof schema>,
    validationLogic: revalidateLogic({
      mode: "submit",
      modeAfterSubmission: "blur",
    }),
    validators: {
      onDynamic: schema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      style={{ display: "grid", gap: "var(--ds-size-6)" }}
    >
      <form.AppField name="name">
        {(field) => <field.Textfield label="Name" />}
      </form.AppField>
    </form>
  );
};

export const FormSelect: StoryFn = () => {
  const schema = z.object({
    cities: z.string().min(1, "City is required"),
  });

  const form = useAppForm({
    defaultValues: {
      cities: "",
    } as z.input<typeof schema>,
    validationLogic: revalidateLogic({
      mode: "submit",
      modeAfterSubmission: "blur",
    }),
    validators: {
      onDynamic: schema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      style={{ display: "grid", gap: "var(--ds-size-6)" }}
    >
      <form.AppField name="cities">
        {(field) => (
          <field.Select label="City">
            <Select.Option value="" disabled>
              Choose a city
            </Select.Option>
            <Select.Option>Oslo</Select.Option>
            <Select.Option>Trondheim</Select.Option>
            <Select.Option>Bergen</Select.Option>
          </field.Select>
        )}
      </form.AppField>
    </form>
  );
};

export const FormSuggestion: StoryFn = () => {
  const DATA_COUNTRIES = ["Denmark", "Finland", "Norway", "Sweden"];

  const schema = z.object({
    destinations: z
      .array(z.string())
      .min(1, "At least one destination is required"),
  });

  const form = useAppForm({
    defaultValues: {
      destinations: [],
    } as z.input<typeof schema>,
    validationLogic: revalidateLogic({
      mode: "submit",
      modeAfterSubmission: "blur",
    }),
    validators: {
      onDynamic: schema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      style={{ display: "grid", gap: "var(--ds-size-6)" }}
    >
      <form.AppField name="destinations">
        {(field) => (
          <field.Suggestion label="Choose destinations" multiple>
            <EXPERIMENTAL_Suggestion.Input />
            <EXPERIMENTAL_Suggestion.Clear />
            <EXPERIMENTAL_Suggestion.List>
              <EXPERIMENTAL_Suggestion.Empty>
                No results
              </EXPERIMENTAL_Suggestion.Empty>
              {DATA_COUNTRIES.map((place) => (
                <EXPERIMENTAL_Suggestion.Option
                  key={place}
                  label={place}
                  value={place}
                >
                  {place}
                </EXPERIMENTAL_Suggestion.Option>
              ))}
            </EXPERIMENTAL_Suggestion.List>
          </field.Suggestion>
        )}
      </form.AppField>
    </form>
  );
};

export const FormCheckboxGroup: StoryFn = () => {
  const schema = z.object({
    contacts: z
      .array(z.enum(["email", "phone", "sms"]))
      .min(1, "At least one contact method is required"),
  });

  const form = useAppForm({
    defaultValues: {
      contacts: [],
    } as z.input<typeof schema>,
    validationLogic: revalidateLogic({
      mode: "submit",
      modeAfterSubmission: "blur",
    }),
    validators: {
      onDynamic: schema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      style={{ display: "grid", gap: "var(--ds-size-6)" }}
    >
      <form.AppField name="contacts">
        {(field) => (
          <field.CheckboxGroup legend="How can we contact you?">
            {(getCheckboxProps) => (
              <>
                <Checkbox label="Email" {...getCheckboxProps("email")} />
                <Checkbox label="Phone" {...getCheckboxProps("phone")} />
                <Checkbox label="SMS" {...getCheckboxProps("sms")} />
              </>
            )}
          </field.CheckboxGroup>
        )}
      </form.AppField>
    </form>
  );
};

export const FormRadioGroup: StoryFn = () => {
  const schema = z.object({
    favourite: z.string().min(1, "You must select one"),
  });

  const form = useAppForm({
    defaultValues: {
      favourite: "",
    } as z.input<typeof schema>,
    validationLogic: revalidateLogic({
      mode: "submit",
      modeAfterSubmission: "blur",
    }),
    validators: {
      onDynamic: schema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      style={{ display: "grid", gap: "var(--ds-size-6)" }}
    >
      <form.AppField name="favourite">
        {(field) => (
          <field.RadioGroup legend="Favourite ice cream flavour">
            {(getRadioProps) => (
              <>
                <Radio label="Vanilla" {...getRadioProps("vanilla")} />
                <Radio label="Chocolate" {...getRadioProps("chocolate")} />
                <Radio label="Strawberry" {...getRadioProps("strawberry")} />
                <Radio
                  label="I don't like ice cream"
                  {...getRadioProps("none")}
                />
              </>
            )}
          </field.RadioGroup>
        )}
      </form.AppField>
    </form>
  );
};

export const FormSubmitButton: StoryFn = () => {
  const [submissionCount, setSubmissionCount] = useState(0);

  const form = useAppForm({
    onSubmit: async () => {
      setSubmissionCount((prev) => prev + 1);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      style={{ display: "grid", gap: "var(--ds-size-2)" }}
    >
      <div>Submission count: {submissionCount}</div>

      <form.Subscribe selector={(state) => state.submissionAttempts}>
        {(submissionAttempts) => <>Submission attempts: {submissionAttempts}</>}
      </form.Subscribe>

      <form.AppForm>
        <form.SubmitButton>Submit</form.SubmitButton>
      </form.AppForm>
    </form>
  );
};

export const FormFull: StoryFn = () => {
  const DATA_COUNTRIES = ["Denmark", "Finland", "Norway", "Sweden"];

  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    amount: z
      .string()
      .min(1, "Amount is required")
      .transform((val) => Number(val)),
    contacts: z
      .array(z.enum(["email", "phone", "sms"]))
      .min(1, "At least one contact method is required"),
    favourite: z.string().min(1, "You must select one"),
    destinations: z
      .array(z.enum(DATA_COUNTRIES))
      .min(1, "At least one destination is required"),
  });

  const defaultValues: z.input<typeof schema> = {
    name: "",
    amount: "",
    contacts: [],
    favourite: "",
    destinations: [],
  };
  const form = useAppForm({
    defaultValues,
    validationLogic: revalidateLogic({
      mode: "submit",
      modeAfterSubmission: "blur",
    }),
    validators: {
      onDynamic: schema,
    },
    onSubmit: async ({ formApi, value }) => {
      if (formApi.state.isSubmitting) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      style={{ display: "grid", gap: "var(--ds-size-6)" }}
    >
      <form.AppField name="name">
        {(field) => (
          <field.Textfield
            label={
              <>
                Name
                <Tag
                  data-color="warning"
                  style={{ marginInlineStart: "var(--ds-size-2)" }}
                >
                  Required
                </Tag>
              </>
            }
          />
        )}
      </form.AppField>

      <form.AppField name="amount">
        {(field) => (
          <field.Textfield
            inputMode="numeric"
            label="Enter amount per month"
            prefix="NOK"
            suffix="per month"
          />
        )}
      </form.AppField>

      <form.AppField name="contacts">
        {(field) => (
          <field.CheckboxGroup
            legend="How can we contact you?"
            description="Select all that apply"
          >
            {(getCheckboxProps) => (
              <>
                <Checkbox label="Email" {...getCheckboxProps("email")} />
                <Checkbox label="Phone" {...getCheckboxProps("phone")} />
                <Checkbox label="SMS" {...getCheckboxProps("sms")} />
              </>
            )}
          </field.CheckboxGroup>
        )}
      </form.AppField>

      <form.AppField name="favourite">
        {(field) => (
          <field.RadioGroup legend="Favourite ice cream flavour">
            {(getRadioProps) => (
              <>
                <Radio label="Vanilla" {...getRadioProps("vanilla")} />
                <Radio label="Chocolate" {...getRadioProps("chocolate")} />
                <Radio label="Strawberry" {...getRadioProps("strawberry")} />
                <Radio
                  label="I don't like ice cream"
                  {...getRadioProps("none")}
                />
              </>
            )}
          </field.RadioGroup>
        )}
      </form.AppField>

      <form.AppField name="destinations">
        {(field) => (
          <field.Suggestion label="Choose destinations" multiple>
            <EXPERIMENTAL_Suggestion.Input />
            <EXPERIMENTAL_Suggestion.Clear />
            <EXPERIMENTAL_Suggestion.List>
              <EXPERIMENTAL_Suggestion.Empty>
                No results
              </EXPERIMENTAL_Suggestion.Empty>
              {DATA_COUNTRIES.map((place) => (
                <EXPERIMENTAL_Suggestion.Option
                  key={place}
                  label={place}
                  value={place}
                >
                  {place}
                </EXPERIMENTAL_Suggestion.Option>
              ))}
            </EXPERIMENTAL_Suggestion.List>
          </field.Suggestion>
        )}
      </form.AppField>

      <form.AppForm>
        <form.SubmitButton>Submit</form.SubmitButton>
      </form.AppForm>
    </form>
  );
};
FormFull.parameters = {
  a11y: {
    test: "todo",
  },
};
