import type { StandardSchemaV1Issue } from "@tanstack/react-form";
import { useFieldContext } from "../form-context";

export type FormError = StandardSchemaV1Issue | string;

export function getErrorMessage(error: FormError) {
  return typeof error === "string" ? error : error.message;
}

/**
 * @internal
 */
export function useErrorMessage() {
  const field = useFieldContext();
  const error = field.state.meta.errors[0] as FormError | undefined;

  return error ? getErrorMessage(error) : null;
}
