import preview from "../../../../../apps/storybook/.storybook/preview";
import { Divider, Paragraph } from "../";

const meta = preview.meta({
  title: "Designsystem/Divider",
  component: Divider,
});

export const Default = meta.story({
  render: (args) => (
    <>
      <Paragraph>
        Divider er brukt for å dele opp innhold i mindre deler.
      </Paragraph>
      <Divider {...args} />
      <Paragraph>
        Den kan også brukes for å skille innhold som er relatert til hverandre.
      </Paragraph>
    </>
  ),
});
