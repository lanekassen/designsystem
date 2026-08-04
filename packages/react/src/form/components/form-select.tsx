import type { LabelRequired } from "@digdir/designsystemet-react";
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
import { getFieldId } from "../utils/field-id";

type FormFieldProps = Pick<FieldProps, "data-size" | "className" | "style"> &
  Omit<
    SelectProps,
    "data-size" | "className" | "style" | "value" | "onChange" | "onBlur"
  > & {
    label?: React.ReactNode;
    description?: React.ReactNode;
  } & LabelRequired;

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
    <Field
      id={getFieldId(field.form.formId, field.name)}
      data-size={size}
      className={className}
      style={style}
    >
      {!!label && <Label>{label}</Label>}

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
