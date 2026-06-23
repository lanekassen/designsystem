import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import "@lanekassen/ds-css";
import "@lanekassen/ds-css/theme";
import { Progress } from "./progress";

test.for([
  [0],
  [1],
  [0.1 + 0.2],
  [25],
  [50],
  [99],
  [99.999],
  [100],
])("Render progress with value: %s", async ([i]) => {
  const screen = await render(<Progress value={i} max={100} />);
  await document.fonts.ready;
  const progressbar = screen.getByRole("progressbar");
  await expect.element(progressbar).toBeVisible();
  await expect.element(progressbar).toHaveValue(i);
});

test.for([
  [-1],
  [-0.555],
  [-100],
  [undefined],
])("Render progress with value: %s", async ([i]) => {
  const screen = await render(<Progress value={i} max={100} />);
  await document.fonts.ready;
  const progressbar = screen.getByRole("progressbar");
  await expect.element(progressbar).toBeVisible();
  await expect.element(progressbar).toHaveValue(0);
});

test("Render progress with value: NaN", async () => {
  await expect(render(<Progress value={NaN} max={100} />)).rejects.toThrow(
    Error,
  );
});
