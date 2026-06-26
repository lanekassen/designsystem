const DEFAULT_LOCALE = "nb-NO";
const DEFAULT_CURRENCY_OPTIONS: Intl.NumberFormatOptions = {
  style: "currency",
  currency: "NOK",
  currencyDisplay: "symbol",
};
const DEFAULT_AMOUNT_OPTIONS: Intl.NumberFormatOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

// Optimization: Reuse formatters for default options to avoid unnecessary object creation.
const defaultCurrencyFormatter = new Intl.NumberFormat(
  DEFAULT_LOCALE,
  DEFAULT_CURRENCY_OPTIONS,
);
const defaultAmountFormatter = new Intl.NumberFormat(
  DEFAULT_LOCALE,
  DEFAULT_AMOUNT_OPTIONS,
);

/**
 * Formats a value as Norwegian Krone (NOK) with two decimals and the currency symbol (kr), unless specifically overridden using options.
 *
 * **Note:** For amount formatting without the currency symbol, use {@link formatAmount} instead.
 */
export function formatCurrency(
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  if (options) {
    const formatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
      ...DEFAULT_CURRENCY_OPTIONS,
      ...options,
    });
    return formatter.format(value);
  }

  return defaultCurrencyFormatter.format(value);
}

/**
 * Formats a value with two decimals, unless specifically overridden using options.
 *
 * **Note:** For currency formatting, use {@link formatCurrency} instead, which includes the currency symbol.
 */
export function formatAmount(
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  if (options) {
    const formatter = new Intl.NumberFormat(DEFAULT_LOCALE, {
      ...DEFAULT_AMOUNT_OPTIONS,
      ...options,
      maximumFractionDigits: options.maximumFractionDigits, // explicitly passed to override the default value
    });
    return formatter.format(value);
  }
  return defaultAmountFormatter.format(value);
}

/**
 * Formats a Norwegian bank account number (kontonummer) by inserting spaces for better readability.
 *
 * The expected format is 11 digits, which will be formatted as "XXXX XX XXXXX".
 * If the input does not contain exactly 11 digits, it will be returned unformatted.
 */
export function formatKontonummer(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length !== 11) {
    return value;
  }

  return `${digits.slice(0, 4)}\u00A0${digits.slice(4, 6)}\u00A0${digits.slice(6)}`;
}

/**
 * Validates a Norwegian bank account number using the Modulus11 algorithm.
 *
 * @see {@link https://no.wikipedia.org/wiki/MOD11}
 */
export function validateKontonummer(value: string): boolean {
  const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const digits = value.replace(/[\s.]+/g, "");

  if (digits.length !== 11) {
    return false;
  }

  const sjekksiffer = Number.parseInt(digits.charAt(10), 10);
  const kontonummerUtenSjekksiffer = digits.substring(0, 10);

  let sum = 0;
  for (let index = 0; index < 10; index++) {
    sum +=
      Number.parseInt(kontonummerUtenSjekksiffer.charAt(index), 10) *
      weights[index];
  }

  const remainder = sum % 11;
  const expectedSjekksiffer = remainder === 0 ? 0 : 11 - remainder;

  return sjekksiffer === expectedSjekksiffer;
}
