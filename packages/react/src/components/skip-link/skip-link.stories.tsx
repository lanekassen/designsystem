import preview from "../../../../../apps/storybook/.storybook/preview";
import { Paragraph, SkipLink } from "../";

const meta = preview.meta({
  title: "Designsystem/SkipLink",
  component: SkipLink,
  args: {
    children: "Hopp til hovedinnhold",
    href: "#main-content",
  },
});

export const Default = meta.story({
  render: (args) => (
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
  ),
});

export const Tabbed = meta.story(() => (
  <div>
    For å vise skiplinken, tab til dette eksempelet, eller klikk inni eksempelet
    og trykk <kbd>Tab</kbd>.
    <SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>
    <main id="main-content" tabIndex={-1}>
      Region som kan motta fokus fra skiplink.
    </main>
  </div>
));
