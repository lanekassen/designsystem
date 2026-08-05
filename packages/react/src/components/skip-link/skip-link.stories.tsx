import type { Meta, StoryFn } from "@storybook/react-vite";
import { Paragraph, SkipLink } from "../";

type Story = StoryFn<typeof SkipLink>;

const meta: Meta<typeof SkipLink> = {
  title: "Designsystem/SkipLink",
  component: SkipLink,
};

export default meta;

export const Default: Story = (args) => (
  <>
    <Paragraph>
      For å vise skiplinken, tab til dette eksempelet, eller klikk inni
      eksempelet og trykk <kbd>Tab</kbd>.
      <SkipLink {...args} href="#main-content">
        Hopp til hovedinnhold
      </SkipLink>
    </Paragraph>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </>
);

export const Tabbed: Story = () => (
  <div>
    For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet
    og trykk <kbd>Tab</kbd>.
    <SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </div>
);
