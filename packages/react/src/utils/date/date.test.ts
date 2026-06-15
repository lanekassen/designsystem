import { describe, expect, it } from "vitest";
import { formatDate, formatDateTime } from "../";

describe("formatDate", () => {
  it("formats date string", () => {
    expect(formatDate("2026-02-01")).toBe("01.02.2026");
  });

  it("formats datetime string as date only", () => {
    expect(formatDate("2026-02-01T12:34:56")).toBe("01.02.2026");
  });

  it("formats Date object", () => {
    expect(formatDate(new Date("2026-02-01T12:34:56"))).toBe("01.02.2026");
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
});
