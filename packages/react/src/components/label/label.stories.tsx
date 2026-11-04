import preview from "../../../../../apps/storybook/.storybook/preview";

import { Label } from "../";

const meta = preview.meta({
  title: "Designsystem/Typography/Label",
  component: Label,
});

export const Default = meta.story({
  args: {
    children: "Fødselsnummer (11 sifre)",
    weight: "semibold",
  },
});
