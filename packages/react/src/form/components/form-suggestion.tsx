import {
  Field,
  type FieldProps,
  Label,
  EXPERIMENTAL_Suggestion as Suggestion,
  type SuggestionItem,
  type SuggestionMultipleProps,
  type SuggestionProps,
  type SuggestionSingleProps,
  ValidationMessage,
} from "../../";
import { useFieldContext } from "../form-context";
import { useErrorMessage } from "../hooks/use-error-message";

function FormSuggestionSingle(props: SuggestionSingleProps) {
  const field = useFieldContext<string | undefined>();

  return (
    <Suggestion
      selected={field.state.value}
      onBlur={field.handleBlur}
      onSelectedChange={(items) => field.handleChange(items?.value)}
      {...props}
    />
  );
}

function FormSuggestionMultiple({
  multiple,
  ...rest
}: SuggestionMultipleProps) {
  const field = useFieldContext<(string | SuggestionItem)[]>();

  return (
    <Suggestion
      multiple
      selected={field.state.value}
      onBlur={field.handleBlur}
      onSelectedChange={field.handleChange}
      {...rest}
    />
  );
}

type FormSuggestionProps = Pick<
  FieldProps,
  "data-size" | "className" | "style"
> &
  Omit<
    SuggestionProps,
    | "data-size"
    | "className"
    | "style"
    | "selected"
    | "onBlur"
    | "onSelectedChange"
  > & {
    label?: React.ReactNode;
    description?: React.ReactNode;
  };

export default function FormSuggestion({
  "data-size": size,
  className,
  style,
  label,
  description,
  multiple,
  ...rest
}: FormSuggestionProps) {
  const error = useErrorMessage();

  return (
    <Field data-size={size} className={className} style={style}>
      {!!label && <Label>{label}</Label>}

      {!!description && <Field.Description>{description}</Field.Description>}

      {multiple ? (
        <FormSuggestionMultiple {...(rest as SuggestionMultipleProps)} />
      ) : (
        <FormSuggestionSingle {...(rest as SuggestionSingleProps)} />
      )}

      {!!error && <ValidationMessage>{error}</ValidationMessage>}
    </Field>
  );
}
