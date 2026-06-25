import { Heading, type HeadingProps, Link } from "@lanekassen/ds-react";
import { LinkIcon } from "@navikt/aksel-icons";
import type { AnchorHTMLAttributes } from "react";
import componentStyles from "./components.module.css";

export const Wide = ({
  style,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) => {
  const css = { ...style, margin: "3rem calc(50% - min(900px, 50vw) + 4em)" };
  return <div style={css} {...rest} />;
};

export const getPath = (href: string | undefined): string => {
  if (!href) {
    return "";
  }

  // if link starts with /, add current path to link
  if (href.startsWith("/")) {
    // Get location from window.parent instead of document, otherwise pathname is iframe.html
    const { origin = "", pathname } = window.parent.location;

    return `${origin}${pathname}?path=${href}`;
  }

  return href;
};

const handleLinkClick =
  (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle in-page anchor links
    if (href.startsWith("#")) {
      event.preventDefault();
      document
        .getElementById(decodeURIComponent(href).substring(1))
        ?.scrollIntoView({ behavior: "smooth" });
      window.parent.history.pushState(undefined, "", href);
    }
  };

export const HeadingSelfLink = ({ children, ...props }: HeadingProps) => {
  const href = `#${props.id}`;
  return (
    <Heading {...props} className={componentStyles.heading}>
      <span>{children}</span>
      <Link
        aria-hidden
        tabIndex={-1}
        href={href}
        className={componentStyles.headingLink}
        onClick={handleLinkClick(href)}
      >
        <LinkIcon title="Link to this heading" />
      </Link>
    </Heading>
  );
};

export const StorybookLink = ({
  children = "",
  ...props
}: Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "data-size" | "data-color"
>) => {
  // if link starts with /, add current path to link
  const href = getPath(props.href);
  const isExternal =
    href.match(/^https?:\/\//) &&
    !href.match(/^https?:\/\/([^.]+\.)?lanekassen\.no/);

  return (
    <Link
      {...props}
      href={href}
      // Add noreferrer to links outside lanekassen.no domain for security reasons
      rel={isExternal ? "noreferrer" : undefined}
      onClick={handleLinkClick(props.href ?? "")}
    >
      {children}
    </Link>
  );
};
