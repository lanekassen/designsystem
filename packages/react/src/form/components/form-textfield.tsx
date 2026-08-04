import { Textfield, type TextfieldProps } from "../../";
import { getFieldId } from "../field-id";
import { useFieldContext } from "../form-context";
import { useErrorMessage } from "../hooks/use-error-message";

// TextfieldProps has a union type, so we need to omit the props from each member of the union.
type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

export type FormTextfieldProps = DistributiveOmit<
  TextfieldProps,
  "value" | "onChange" | "onBlur" | "error" | "id"
>;

export default function FormTextfield(props: FormTextfieldProps) {
  const field = useFieldContext<string | number | readonly string[]>();
  const error = useErrorMessage();

  return (
    <Textfield
      id={getFieldId(field.form.formId, field.name)}
      value={field.state.value}
      onChange={(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => field.handleChange(e.target.value)}
      onBlur={field.handleBlur}
      error={error}
      {...props}
    />
  );
}
