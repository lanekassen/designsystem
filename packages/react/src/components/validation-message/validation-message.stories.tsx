import preview from "../../../../../apps/storybook/.storybook/preview";

import { ValidationMessage } from "../";

const meta = preview.meta({
  title: "Designsystem/Typography/ValidationMessage",
  component: ValidationMessage,
});

export const Default = meta.story({
  args: {
    children: "Dette er en valideringsmelding.",
  },
});
