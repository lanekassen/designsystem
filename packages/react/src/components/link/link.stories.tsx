import { ArrowRightIcon } from "@navikt/aksel-icons";
import preview from "../../../../../apps/storybook/.storybook/preview";
import { Link, Paragraph } from "../";

const randomNum = Math.floor(Math.random() * 1000);
const designsystemetLink = `https://lanekassen.no/?=${randomNum}`;

const meta = preview.meta({
  title: "Designsystem/Link",
  component: Link,
  parameters: {
    customStyles: { padding: "var(--ds-size-6)" },
    status: {
      type: "beta",
      url: "http://www.url.com/status",
    },
  },
  args: {
    children: "Lånekassen",
    href: designsystemetLink,
  },
});

export const Default = meta.story();

export const InText = meta.story({
  render: (args) => (
    <>
      <Paragraph>
        Vi bruker komponenter fra{" "}
        <Link href={designsystemetLink} {...args}>
          designsystemet.no
        </Link>
        .
      </Paragraph>
    </>
  ),
});

export const WithIcon = meta.story({
  render: (args) => (
    <Link href="mailto:designsystem@digdir.no" {...args}>
      <ArrowRightIcon aria-hidden height={"1.5rem"} width={"1.5rem"} />
      <span>Vilkår</span>
    </Link>
  ),
});

export const AsButton = meta.story({
  args: {
    children: <button type="button">Gå til designsystemet</button>,
    href: designsystemetLink,
    asChild: true,
  },
});
