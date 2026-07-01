import { useEffect } from "react";
import {
  Fieldset,
  type FieldsetProps,
  type UseCheckboxGroupProps,
  useCheckboxGroup,
  ValidationMessage,
} from "../../";
import { useFieldContext } from "../form-context";
import { useErrorMessage } from "../hooks/use-error-message";

type FormCheckboxGroupProps = Pick<
  FieldsetProps,
  "data-size" | "className" | "style"
> &
  UseCheckboxGroupProps & {
    legend?: React.ReactNode;
    description?: React.ReactNode;
    children: (
      getCheckboxProps: ReturnType<typeof useCheckboxGroup>["getCheckboxProps"],
    ) => React.ReactNode;
  };

export default function FormCheckboxGroup({
  "data-size": size,
  className,
  style,
  legend,
  description,
  children,
  ...rest
}: FormCheckboxGroupProps) {
  const field = useFieldContext<string[]>();
  const error = useErrorMessage();

  const { getCheckboxProps, validationMessageProps, value, setValue } =
    useCheckboxGroup({
      name: field.name,
      value: field.state.value,
      onChange: field.handleChange,
      error,
      ...rest,
    });

  useEffect(() => {
    if (field.state.value !== value) {
      setValue(field.state.value); // Must be synchronized to be able to reset the form, since useCheckboxGroup only accepts the initial value
    }
  }, [field.state.value, value, setValue]);

  return (
    <Fieldset
      onBlur={field.handleBlur}
      data-size={size}
      className={className}
      style={style}
    >
      {!!legend && <Fieldset.Legend>{legend}</Fieldset.Legend>}

      {!!description && (
        <Fieldset.Description>{description}</Fieldset.Description>
      )}

      {children(getCheckboxProps)}

      <ValidationMessage {...validationMessageProps} />
    </Fieldset>
  );
}
