import {
  Field,
  type FieldProps,
  Label,
  Select,
  type SelectProps,
  ValidationMessage,
} from "../..";
import { useFieldContext } from "../form-context";
import { useErrorMessage } from "../hooks/use-error-message";

type FormFieldProps = Pick<FieldProps, "data-size" | "className" | "style"> &
  Omit<
    SelectProps,
    "data-size" | "className" | "style" | "value" | "onChange" | "onBlur"
  > & {
    label: React.ReactNode;
    description?: React.ReactNode;
  };

export default function FormField({
  "data-size": size,
  className,
  style,
  label,
  description,
  ...rest
}: FormFieldProps) {
  const field = useFieldContext<string | number | readonly string[]>();
  const error = useErrorMessage();

  return (
    <Field data-size={size} className={className} style={style}>
      <Label>{label}</Label>

      {!!description && <Field.Description>{description}</Field.Description>}

      <Select
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        {...rest}
      />

      {!!error && <ValidationMessage>{error}</ValidationMessage>}
    </Field>
  );
}
