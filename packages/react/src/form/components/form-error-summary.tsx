import type { ReactNode } from "react";
import { ErrorSummary } from "../..";
import { getFieldId } from "../field-id";
import { useFormContext } from "../form-context";
import { type FormError, getErrorMessage } from "../hooks/use-error-message";

const focusField = (id: string) => {
  const field = document.getElementById(id);
  (
    field?.querySelector<HTMLElement>("input, select, textarea, button") ??
    field
  )?.focus({ focusVisible: true });
};

export default function FormErrorSummary({ heading }: { heading: ReactNode }) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => [state.submissionAttempts, state.fieldMeta] as const}
    >
      {([submissionAttempts]) => {
        const fieldErrors = Object.entries<{ errors: FormError[] }>(
          form.getAllErrors().fields,
        );

        return (
          submissionAttempts > 0 &&
          fieldErrors.length > 0 && (
            <ErrorSummary key={submissionAttempts}>
              <ErrorSummary.Heading>{heading}</ErrorSummary.Heading>
              <ErrorSummary.List>
                {fieldErrors.map(([fieldName, { errors }]) => {
                  const id = getFieldId(form.formId, fieldName);

                  return (
                    <ErrorSummary.Item key={fieldName}>
                      <ErrorSummary.Link
                        href={`#${id}`}
                        onClick={(event) => {
                          event.preventDefault();
                          focusField(id);
                        }}
                      >
                        {getErrorMessage(errors[0])}
                      </ErrorSummary.Link>
                    </ErrorSummary.Item>
                  );
                })}
              </ErrorSummary.List>
            </ErrorSummary>
          )
        );
      }}
    </form.Subscribe>
  );
}
