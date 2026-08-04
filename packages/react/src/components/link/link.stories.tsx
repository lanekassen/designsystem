import {
  ArrowRightIcon,
} from "@navikt/aksel-icons";
import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite";
import { Link, Paragraph } from "../";

type Story = StoryObj<typeof Link>;

const randomNum = Math.floor(Math.random() * 1000);
const designsystemetLink = `https://lanekassen.no/?=${randomNum}`;

export default {
  title: "Designsystem/Link",
  component: Link,
  parameters: {
    customStyles: { padding: "var(--ds-size-6)" },
    status: {
      type: "beta",
      url: "http://www.url.com/status",
    },
  },
} as Meta;

export const Default: Story = {
  args: {
    children: "Lånekassen",
    href: designsystemetLink,
  },
};

export const InText: StoryFn = (args) => (
  <>
    <Paragraph>
      Vi bruker komponenter fra{" "}
      <Link href={designsystemetLink} {...args}>
        designsystemet.no
      </Link>
      .
    </Paragraph>
  </>
);

export const WithIcon: StoryFn = (args) => (
  <Link href="mailto:designsystem@digdir.no" {...args}>
    <ArrowRightIcon aria-hidden height={"1.5rem"} width={"1.5rem"} />
    <span>Vilkår</span>
  </Link>
);

export const AsButton: Story = {
  args: {
    children: <button type="button">Gå til designsystemet</button>,
    href: designsystemetLink,
    asChild: true,
  },
};
