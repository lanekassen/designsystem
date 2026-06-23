import { composeStories } from "@storybook/react-vite";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import * as stories from "./progress.stories";
import "@lanekassen/ds-css";
import "@lanekassen/ds-css/theme";
import { Progress } from "./progress";

const storiesComponents = composeStories(stories);

test.for([
  [0],
  [1],
  [0.1 + 0.2],
  [25],
  [50],
  [99],
  [99.999],
  [100],
  [undefined],
])("Render progress with value: %d", async ([i]) => {
  const screen = await render(<Progress value={i} max={100} />);
  await document.fonts.ready;
  const progressbar = screen.getByRole("progressbar");
  await expect.element(progressbar).toBeVisible();
  await expect.element(progressbar).toMatchScreenshot();
});

test.for(Object.entries(storiesComponents))("%s", async ([_name, Story]) => {
  const { container } = await render(<Story />);
  await document.fonts.ready;
  await expect(container).toMatchScreenshot();
});
