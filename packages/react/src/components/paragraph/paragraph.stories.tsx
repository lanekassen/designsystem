import preview from "../../../../../apps/storybook/.storybook/preview";

import { Paragraph } from "../";

const meta = preview.meta({
  title: "Designsystem/Typography/Paragraph",
  component: Paragraph,
});

export const Default = meta.story({
  args: {
    children:
      "Personvernerklæringen gir informasjon om hvilke personopplysninger vi behandler, hvordan disse blir behandlet og hvilke rettigheter du har.",
    variant: "default",
  },
});
