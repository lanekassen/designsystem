/**
 * This module provides utilities useful for presentation and validation of data in the context of React components.
 *
 * @module @lanekassen/ds-react/utils
 */

export { formatDate, formatDateTime } from "./date/date";

export {
  formatAmount,
  formatCurrency,
  formatKontonummer,
  validateKontonummer,
} from "./finance/finance";
