import { Textfield, type TextfieldProps } from "../../";
import { useFieldContext } from "../form-context";
import { useErrorMessage } from "../hooks/use-error-message";

export type FormTextfieldProps = Exclude<
  TextfieldProps,
  "value" | "onChange" | "onBlur" | "error"
>;

export default function FormTextfield(props: FormTextfieldProps) {
  const field = useFieldContext<string | number | readonly string[]>();
  const error = useErrorMessage();

  return (
    <Textfield
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
