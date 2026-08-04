import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "../..";
import { Logo, LogoIcon } from "./logo";

const meta = {
  title: "Designsystem/Logo",
  component: Logo,
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const IconOnly: Story = {
  render: () => <LogoIcon />,
};

export const Responsive: Story = {
  render: () => (
    <>
      <style>
        {`
        /* Styles to be defined in application CSS */
        .logo {
          display: none;
        }
        .logo-icon {
          display: block;
        }

        @media (min-width: 40rem) { /* 640px */
          .logo {
            display: block;
          }
          .logo-icon {
            display: none;
          }
        }
        `}
      </style>
      <Logo className="logo" />
      <LogoIcon className="logo-icon" />
    </>
  ),
};

export const WithLink: Story = {
  render: () => (
    <Link href="https://lanekassen.no/" aria-label="Gå til lanekassen.no">
      <Logo />
    </Link>
  ),
};
