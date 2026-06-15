const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const dateTimeFormatter = new Intl.DateTimeFormat("nb-NO", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

/**
 * Formats a date (dd.mm.yyyy).
 *
 * Intentionally doesn't accept nullish values, caller must handle such cases with a fallback.
 */
export function formatDate(date: string | number | Date) {
  return dateFormatter.format(new Date(date));
}

/**
 * Formats a date and time (dd.mm.yyyy, hh:mm).
 *
 * Intentionally doesn't accept nullish values, caller must handle such cases with a fallback.
 */
export function formatDateTime(date: string | number | Date) {
  return dateTimeFormatter.format(new Date(date));
}
