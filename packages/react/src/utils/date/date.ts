const DEFAULT_LOCALE = "nb-NO";
const DEFAULT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  dateStyle: "short",
};
const DEFAULT_DATE_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  dateStyle: "short",
  timeStyle: "short",
};

// Optimization: Reuse formatters for default options to avoid unnecessary object creation.
const dateFormatter = new Intl.DateTimeFormat(
  DEFAULT_LOCALE,
  DEFAULT_DATE_OPTIONS,
);
const dateTimeFormatter = new Intl.DateTimeFormat(
  DEFAULT_LOCALE,
  DEFAULT_DATE_TIME_OPTIONS,
);

/**
 * Formats a date as `dd.mm.yyyy` (Norwegian short date format), unless specifically overridden using options.
 *
 * If the input date is invalid, it will be returned unformatted as a string.
 *
 * Note: This function doesn't accept nullish values, caller must handle such cases with a fallback.
 */
export function formatDate(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  const dateObject = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(dateObject.getTime())) {
    return String(date);
  }

  if (options) {
    const formatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, options);
    return formatter.format(dateObject);
  }

  return dateFormatter.format(dateObject);
}

/**
 * Formats a date and time as `dd.mm.yyyy, hh:mm` (Norwegian short date and time format), unless specifically overridden using options.
 *
 * If the input date is invalid, it will be returned unformatted as a string.
 *
 * Note: This function doesn't accept nullish values, caller must handle such cases with a fallback.
 */
export function formatDateTime(
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
): string {
  const dateObject = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(dateObject.getTime())) {
    return String(date);
  }

  if (options) {
    const formatter = new Intl.DateTimeFormat(DEFAULT_LOCALE, options);
    return formatter.format(dateObject);
  }

  return dateTimeFormatter.format(dateObject);
}
