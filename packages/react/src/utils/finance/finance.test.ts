import { describe, expect, it } from "vitest";
import {
  formatAmount,
  formatCurrency,
  formatKontonummer,
  validateKontonummer,
} from "../";

// The Intl.NumberFormat API uses special characters for formatting
const NBSP = "\u00A0"; // Non-breaking space character
const MINUS = "\u2212"; // Unicode minus sign character

describe("formatCurrency", () => {
  it("formats zero", () => {
    expect(formatCurrency(0)).toBe(`0,00${NBSP}kr`);
  });

  it("formats positive number", () => {
    expect(formatCurrency(1000)).toBe(`1${NBSP}000,00${NBSP}kr`);
  });

  it("formats decimals", () => {
    expect(formatCurrency(1234.5)).toBe(`1${NBSP}234,50${NBSP}kr`);
  });

  it("formats negative numbers", () => {
    expect(formatCurrency(-500)).toBe(`${MINUS}500,00${NBSP}kr`);
  });

  it("formats large numbers", () => {
    expect(formatCurrency(123456789)).toBe(
      `123${NBSP}456${NBSP}789,00${NBSP}kr`,
    );
  });

  it("allows custom options", () => {
    expect(
      formatCurrency(1234.5, {
        minimumFractionDigits: 3,
      }),
    ).toBe(`1${NBSP}234,500${NBSP}kr`);
  });
});

describe("formatAmount", () => {
  it("formats zero", () => {
    expect(formatAmount(0)).toBe(`0,00`);
  });

  it("formats positive number", () => {
    expect(formatAmount(1000)).toBe(`1${NBSP}000,00`);
  });

  it("formats decimals", () => {
    expect(formatAmount(1234.5)).toBe(`1${NBSP}234,50`);
  });

  it("formats negative numbers", () => {
    expect(formatAmount(-500)).toBe(`${MINUS}500,00`);
  });

  it("formats large numbers", () => {
    expect(formatAmount(123456789)).toBe(`123${NBSP}456${NBSP}789,00`);
  });

  it("allows custom options", () => {
    expect(
      formatAmount(1234.5, {
        minimumFractionDigits: 3,
      }),
    ).toBe(`1${NBSP}234,500`);
  });
});

describe("formatKontonummer", () => {
  it("formats a valid kontonummer", () => {
    expect(formatKontonummer("49660303625")).toBe(`4966${NBSP}03${NBSP}03625`);
  });

  it("returns the original value for an invalid kontonummer", () => {
    expect(formatKontonummer("123")).toBe("123");
  });
});

describe("validateKontonummer", () => {
  it("accepts a valid kontonummer", () => {
    expect(validateKontonummer("49660303625")).toBe(true);
  });

  it("accepts a valid kontonummer with spaces", () => {
    expect(validateKontonummer("4966 03 03625")).toBe(true);
  });

  it("accepts a valid kontonummer with dots", () => {
    expect(validateKontonummer("4966.03.03625")).toBe(true);
  });

  it("accepts a valid kontonummer with check digit 0", () => {
    expect(validateKontonummer("41984370170")).toBe(true);
  });

  it("rejects an invalid kontonummer", () => {
    expect(validateKontonummer("12345678901")).toBe(false);
  });

  it("rejects an invalid kontonummer with spaces", () => {
    expect(validateKontonummer("1234 56 78901")).toBe(false);
  });

  it("rejects an invalid kontonummer with dots", () => {
    expect(validateKontonummer("1234.56.78901")).toBe(false);
  });

  it("rejects an invalid kontonummer with incorrect length", () => {
    expect(validateKontonummer("123")).toBe(false);
  });
});
