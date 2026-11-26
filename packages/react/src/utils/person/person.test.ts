import { describe, expect, it } from "vitest";
import { validateFodselsnummer } from "../";

describe("validateFodselsnummer", () => {
  it.each([
    ["01019012480", "fødselsnummer"],
    ["31019010069", "fødselsnummer, last day of month"],
    ["29020010027", "fødselsnummer, leap day"],
    ["41018010001", "D-number"],
    ["71018010024", "D-number, last day of month"],
    ["02013299997", "fødselsnummer issued from 2032 with remainder 0"],
  ])("returns true for %s (%s)", (value) => {
    expect(validateFodselsnummer(value)).toBe(true);
  });

  it.each([
    ["32019010189", "day out of range"],
    ["00019010007", "day zero"],
    ["31049010039", "day does not exist in month"],
    ["01139010074", "month out of range"],
    ["01009010056", "month zero"],
    ["29020110048", "29 February in a non-leap year"],
    ["72018010063", "D-number, day out of range"],
    ["40018010072", "D-number, day zero"],
    ["01419010029", "H-number"],
    ["01819010001", "synthetic test number"],
  ])("returns false for %s (%s)", (value) => {
    expect(validateFodselsnummer(value)).toBe(false);
  });

  describe("with allowSynthetic", () => {
    const options = { allowSynthetic: true };

    it.each([
      ["01819010001", "synthetic fødselsnummer"],
      ["41818010077", "synthetic D-number"],
      ["01019012480", "regular fødselsnummer"],
      ["41018010001", "regular D-number"],
    ])("returns true for %s (%s)", (value) => {
      expect(validateFodselsnummer(value, options)).toBe(true);
    });

    it.each([
      ["01939010110", "synthetic month out of range"],
      ["01419010029", "H-number"],
      ["01819010011", "invalid control digit"],
    ])("returns false for %s (%s)", (value) => {
      expect(validateFodselsnummer(value, options)).toBe(false);
    });
  });

  it("returns false for whitespace", () => {
    expect(validateFodselsnummer("010190 12480")).toBe(false);
    expect(validateFodselsnummer(" 01019012480")).toBe(false);
    expect(validateFodselsnummer("01019012480 ")).toBe(false);
  });

  it("returns false for invalid first control digit", () => {
    expect(validateFodselsnummer("01019012490")).toBe(false);
    expect(validateFodselsnummer("41018010011")).toBe(false);
  });

  it("returns false for invalid second control digit", () => {
    expect(validateFodselsnummer("01019012481")).toBe(false);
    expect(validateFodselsnummer("41018010002")).toBe(false);
  });

  it("returns false for first control digit using the 2032 rule", () => {
    expect(validateFodselsnummer("30108299939")).toBe(false);
  });

  it("returns false for wrong length", () => {
    expect(validateFodselsnummer("")).toBe(false);
    expect(validateFodselsnummer("0101901248")).toBe(false);
    expect(validateFodselsnummer("010190124800")).toBe(false);
  });

  it("returns false for non-digit characters", () => {
    expect(validateFodselsnummer("0101901248a")).toBe(false);
    expect(validateFodselsnummer("010190.12480")).toBe(false);
  });
});
