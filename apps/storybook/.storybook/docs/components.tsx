import { Heading, Link, type HeadingProps } from "@lanekassen/ds-react"; 
import { LinkIcon } from "@navikt/aksel-icons";
import componentStyles from "./components.module.css";

export const Wide = ({ style, ...rest }: React.ComponentPropsWithoutRef<"div">) => {
	const css = { ...style, margin: "3rem calc(50% - min(900px, 50vw) + 4em)" };
	return <div style={css} {...rest} />;
};

const handleLinkClick =
  (href: string) =>
  (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle in-page anchor links
    if (href.startsWith('#')) {
      event.preventDefault();
      document
        .getElementById(decodeURIComponent(href).substring(1))
        ?.scrollIntoView({ behavior: 'smooth' });
      window.parent.history.pushState(undefined, '', href);
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
