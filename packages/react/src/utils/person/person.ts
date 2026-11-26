const K1_WEIGHTS = [3, 7, 6, 1, 8, 9, 4, 5, 2];
const K2_WEIGHTS = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
const D_NUMMER_FIRST_DIGITS = ["4", "5", "6", "7"];
const SYNTHETIC_MONTH_FIRST_DIGITS = ["8", "9"];

export interface ValidateFodselsnummerOptions {
  /**
   * Accept synthetic test numbers from Skatteetaten (Tenor), where 80 is added to the month.
   * @default false
   */
  allowSynthetic?: boolean;
}

/**
 * Checks a control digit by adding it to the weighted sum of the preceding digits.
 * The result must be divisible by 11.
 */
function isValidKontrollsiffer(digits: number[], weights: number[]): boolean {
  let sum = digits[weights.length];
  for (let index = 0; index < weights.length; index++) {
    sum += digits[index] * weights[index];
  }

  return sum % 11 === 0;
}

/**
 * Checks that a `ddmmyy` date exists in the calendar. The year is treated as 20yy, which gives
 * the same leap years as 19yy except for `00`: 29.02.1900 is therefore accepted even though it didn't exist.
 */
function isValidDate(date: string): boolean {
  const day = Number.parseInt(date.substring(0, 2), 10);
  const month = Number.parseInt(date.substring(2, 4), 10);
  const year = 2000 + Number.parseInt(date.substring(4, 6), 10);

  // Date rolls over invalid dates (e.g. 31.04 -> 01.05), so verify that the result matches the input.
  const result = new Date(Date.UTC(year, month - 1, day));
  return (
    result.getUTCFullYear() === year &&
    result.getUTCMonth() === month - 1 &&
    result.getUTCDate() === day
  );
}

/**
 * Validates a Norwegian national identity number (fødselsnummer) or D-number (d-nummer).
 *
 * The value must consist of exactly 11 digits, the first six digits must form a valid date
 * (`ddmmyy`), and both control digits must be valid according to the Modulus11 algorithm.
 *
 * **Note:** The relaxed control digit rule for numbers issued from 2032 is not supported.
 *
 * @see {@link https://skatteetaten.github.io/folkeregisteret-api-dokumentasjon/nytt-fodselsnummer-fra-2032/}
 */
export function validateFodselsnummer(
  value: string,
  options: ValidateFodselsnummerOptions = {},
): boolean {
  if (!/^\d{11}$/.test(value)) {
    return false;
  }

  let date = value.substring(0, 6);
  if (D_NUMMER_FIRST_DIGITS.includes(date.charAt(0))) {
    date = `${Number.parseInt(date.charAt(0), 10) - 4}${date.substring(1)}`;
  }

  if (
    options.allowSynthetic &&
    SYNTHETIC_MONTH_FIRST_DIGITS.includes(date.charAt(2))
  ) {
    date = `${date.substring(0, 2)}${Number.parseInt(date.charAt(2), 10) - 8}${date.substring(3)}`;
  }

  if (!isValidDate(date)) {
    return false;
  }

  const digits = Array.from(value, Number);

  return (
    isValidKontrollsiffer(digits, K1_WEIGHTS) &&
    isValidKontrollsiffer(digits, K2_WEIGHTS)
  );
}
