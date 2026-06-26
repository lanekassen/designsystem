import { useEffect } from "react";
import {
  Fieldset,
  type FieldsetProps,
  type UseRadioGroupProps,
  useRadioGroup,
  ValidationMessage,
} from "../../";
import { useFieldContext } from "../form-context";
import { useErrorMessage } from "../hooks/use-error-message";

type FormRadioGroupProps = Pick<
  FieldsetProps,
  "data-size" | "className" | "style"
> &
  UseRadioGroupProps & {
    legend: React.ReactNode;
    description?: React.ReactNode;
    children: (
      getRadioProps: ReturnType<typeof useRadioGroup>["getRadioProps"],
    ) => React.ReactNode;
  };

export default function FormRadioGroup({
  "data-size": size,
  className,
  style,
  legend,
  description,
  children,
  ...rest
}: FormRadioGroupProps) {
  const field = useFieldContext<string>();
  const error = useErrorMessage();

  const { getRadioProps, validationMessageProps, value, setValue } =
    useRadioGroup({
      name: field.name,
      value: field.state.value,
      onChange: field.handleChange,
      error,
      ...rest,
    });

  useEffect(() => {
    if (field.state.value !== value) {
      setValue(field.state.value); // Must be synchronized to be able to reset the form, since useRadioGroup only accepts the initial value
    }
  }, [field.state.value, value, setValue]);

  return (
    <Fieldset
      onBlur={field.handleBlur}
      data-size={size}
      className={className}
      style={style}
    >
      <Fieldset.Legend>{legend}</Fieldset.Legend>

      {!!description && (
        <Fieldset.Description>{description}</Fieldset.Description>
      )}

      {children(getRadioProps)}

      <ValidationMessage {...validationMessageProps} />
    </Fieldset>
  );
}
