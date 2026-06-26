import type { StandardSchemaV1Issue } from "@tanstack/react-form";
import { useMemo } from "react";
import { useFieldContext } from "../form-context";

/**
 * @internal
 */
export function useErrorMessage() {
  const field = useFieldContext();

  const error = useMemo(() => {
    if (!field.state.meta.errors.length) {
      return null;
    }

    return field.state.meta.errors.map((err: StandardSchemaV1Issue | string) =>
      typeof err === "object" ? err.message : err,
    )[0];
  }, [field.state.meta.errors]);

  return error;
}
