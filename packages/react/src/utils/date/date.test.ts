import { describe, expect, it } from "vitest";
import { formatDate, formatDateTime } from "../";

describe("formatDate", () => {
  it("formats date string", () => {
    expect(formatDate("2026-02-01")).toBe("01.02.2026");
  });

  it("formats datetime string as date only", () => {
    expect(formatDate("2026-02-01T00:00:00")).toBe("01.02.2026");
  });

  it("formats Date object", () => {
    expect(formatDate(new Date("2026-02-01T00:00:00"))).toBe("01.02.2026");
  });

  it("returns invalid date as-is", () => {
    expect(formatDate("invalid-date")).toBe("invalid-date");
  });

  it("allows custom options", () => {
    expect(
      formatDate("2026-02-01T00:00:00", {
        dateStyle: "full",
      }),
    ).toBe("søndag 1. februar 2026");
  });
});

describe("formatDateTime", () => {
  it("formats datetime string", () => {
    expect(formatDateTime("2026-02-01T12:34:56")).toBe("01.02.2026, 12:34");
  });

  it("formats Date object", () => {
    expect(formatDateTime(new Date("2026-02-01T12:34:56"))).toBe(
      "01.02.2026, 12:34",
    );
  });

  it("returns invalid date as-is", () => {
    expect(formatDateTime("invalid-date")).toBe("invalid-date");
  });

  it("allows custom options", () => {
    expect(
      formatDateTime("2026-02-01T12:34:56", {
        dateStyle: "full",
        timeStyle: "medium",
      }),
    ).toBe("søndag 1. februar 2026 kl. 12:34:56");
  });
});
