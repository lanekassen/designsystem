import preview from "../../../../../apps/storybook/.storybook/preview";
import { Link } from "../..";
import { Logo, LogoIcon } from "./logo";

const meta = preview.meta({
  title: "Designsystem/Logo",
  component: Logo,
  parameters: {
    layout: "padded",
  },
});

export const Default = meta.story();

export const IconOnly = meta.story({
  render: () => <LogoIcon />,
});

export const Responsive = meta.story({
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
});

export const WithLink = meta.story({
  render: () => (
    <Link href="https://lanekassen.no/" aria-label="Gå til lanekassen.no">
      <Logo />
    </Link>
  ),
});
