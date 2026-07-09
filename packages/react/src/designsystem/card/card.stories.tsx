import type { Meta, StoryFn } from "@storybook/react-vite";
import {
  person2Img,
  severityColors,
  themeColors,
} from "../../../stories/constants";
import type { CardProps } from "../";
import { Card, Heading, Link, Paragraph } from "../";

type Story = StoryFn<typeof Card>;

const meta: Meta<typeof Card> = {
  title: "Designsystem/Card",
  component: Card,
  parameters: {
    layout: "padded",
    customStyles: {
      width: "100%",
      maxWidth: 800,
      alignItems: "center",
      display: "grid",
      gap: "var(--ds-size-4)",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px , 1fr))",
    },
  },
};

export default meta;

export const Default: Story = (args) => (
  <Card {...args} style={{ maxWidth: "320px" }}>
    <Heading>Lykkeland Videregående</Heading>
    <Paragraph>
      Lykkeland Videregående er en trygg og inkluderende nærskole der lek,
      læring og nysgjerrighet går hånd i hånd.
    </Paragraph>
    <Paragraph data-size="sm">Oslo Kommune</Paragraph>
  </Card>
);

Default.args = {
  "data-color": "neutral",
};

const variants = ["default", "tinted"];

export const Variants: StoryFn<typeof Card> = () => (
  <>
    {variants.map((variant) =>
      [...themeColors, ...severityColors].map((color) => (
        <Card
          key={`${variant}-${color}`}
          data-variant={variant}
          data-color={color as CardProps["data-color"]}
        >
          <Card.Block>
            <Paragraph>
              {variant}: {color}
            </Paragraph>
          </Card.Block>
        </Card>
      )),
    )}
  </>
);

Variants.parameters = {
  a11y: {
    test: "todo",
  },
};

export const Media: Story = () => (
  <>
    <Card data-color="neutral">
      <Card.Block>
        <iframe
          data-chromatic="ignore"
          src="https://player.vimeo.com/video/863563441?app_id=122963&amp;title=0&amp;byline=0&amp;portrait=0&amp;dnt=1"
          width="320px"
          height="179px"
          allow="autoplay; fullscreen; picture-in-picture"
          title="30 år med digitalt innsyn"
        ></iframe>
      </Card.Block>
      <Card.Block>
        <Heading>Card Neutral</Heading>
        <Paragraph>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this
        </Paragraph>
      </Card.Block>
    </Card>
    <Card data-color="neutral">
      <Card.Block>
        <Heading>Card Neutral</Heading>
        <Paragraph>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this
        </Paragraph>
      </Card.Block>
      <Card.Block>{person2Img}</Card.Block>
    </Card>
  </>
);

export const Video: Story = () => (
  <Card data-color="neutral" style={{ maxWidth: "320px" }}>
    <Card.Block>
      <iframe
        data-chromatic="ignore"
        src="https://player.vimeo.com/video/863563441?app_id=122963&amp;title=0&amp;byline=0&amp;portrait=0&amp;dnt=1"
        width="320px"
        height="179px"
        allow="autoplay; fullscreen; picture-in-picture"
        title="30 år med digitalt innsyn"
      ></iframe>
    </Card.Block>
    <Card.Block>
      <Heading>
        <a
          href="https://www.digdir.no/felleslosninger/30-ar-med-digitalt-innsyn/5015"
          target="_blank"
          rel="noreferrer"
        >
          Vi feira 30 år med digitalt innsyn
        </a>
      </Heading>
      <Paragraph>
        Det er i år 30 år sidan dei første forsøka med elektronisk postjournal i
        Noreg. Sjå opptak frå feiringa på Pressens Hus der det både var
        historiske tilbakeblikk og debatt om innsyn og openheit i forvaltninga.
      </Paragraph>
    </Card.Block>
  </Card>
);

export const WithLink: Story = (args) => (
  <>
    <Card {...args}>
      <Card.Block>{person2Img}</Card.Block>
      <Card.Block>
        <Heading>
          <a
            href="https://designsystemet.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link Card
          </a>
        </Heading>
        <Paragraph>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this
        </Paragraph>
        <Paragraph data-size="sm">Footer text</Paragraph>
      </Card.Block>
    </Card>
    <Card {...args} data-color="neutral">
      <Card.Block>
        <Heading>
          <Link
            href="https://designsystemet.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link Card
          </Link>
        </Heading>
        <Paragraph>
          Most provide as with carried business are much better more the
          perfected designer. Writing slightly explain desk unable at supposedly
          about this
        </Paragraph>
        <Paragraph data-size="sm">Footer text</Paragraph>
      </Card.Block>
      <Card.Block>{person2Img}</Card.Block>
    </Card>
  </>
);

export const AsLink: Story = (args) => (
  <div className="docs-example-flex-col">
    <Card {...args} asChild>
      <a
        href="https://designsystemet.no"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Card.Block>
          <Paragraph>Link card with asChild</Paragraph>
        </Card.Block>
      </a>
    </Card>
    <Card {...args} data-color="accent" asChild>
      <a
        href="https://designsystemet.no"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Heading>Link Card with asChild</Heading>
        <Paragraph>
          Most provide as with carried business are much better more the
          perfected designer.
        </Paragraph>
      </a>
    </Card>
  </div>
);

export const AsButton: Story = (args) => (
  <>
    <Card {...args} asChild>
      <button type="button">
        <Card.Block>
          <Heading>Button Card with blocks</Heading>
        </Card.Block>
        <Card.Block>
          <Paragraph>
            Most provide as with carried business are much better more the
            perfected designer.
          </Paragraph>
        </Card.Block>
      </button>
    </Card>
  </>
);

export const AsGrid: Story = (args) => (
  <Card {...args} style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
    <Card.Block>
      <Heading>Button Card with blocks</Heading>
    </Card.Block>
    <Card.Block>
      <Paragraph>
        Most provide as with carried business are much better more the perfected
        designer.
      </Paragraph>
    </Card.Block>
  </Card>
);
