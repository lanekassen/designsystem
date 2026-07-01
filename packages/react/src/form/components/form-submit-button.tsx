import { Button, type ButtonProps } from "../../";
import { useFormContext } from "../form-context";

export default function FormSubmitButton({ children, ...rest }: ButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button type="submit" loading={isSubmitting} {...rest}>
          {children}
        </Button>
      )}
    </form.Subscribe>
  );
}
