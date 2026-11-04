import { FilesIcon } from "@navikt/aksel-icons";
import { useEffect, useRef, useState } from "react";
import preview from "../../../../../apps/storybook/.storybook/preview";
import { Button, Tooltip } from "../";

const meta = preview.meta({
  title: "Designsystem/Tooltip",
  component: Tooltip,
  parameters: {
    customStyles: { margin: "2rem", padding: "4rem" },
    chromatic: {
      disableSnapshot: false,
    },
  },
});

export const Default = meta.story({
  render: ({ children, ...args }) => (
    <Tooltip {...args}>
      <Button icon>
        <FilesIcon aria-hidden />
      </Button>
    </Tooltip>
  ),

  args: {
    children: "",
    content: "Kopier",
    placement: "top",
  },
});

export const WithString = meta.story({
  args: {
    content: "Organisasjonsnummer",
    children: "Org.nr.",
    tabIndex: 0,
  },
});

export const Placement = meta.story({
  args: {
    content: "Kopier",
    placement: "bottom",
    children: (
      <Button icon>
        <FilesIcon aria-hidden />
      </Button>
    ),
  },
});

export const Aria = meta.story({
  render: () => {
    return (
      <>
        <Tooltip content="Eg er aria-description">
          <Button>Eg er aria-description</Button>
        </Tooltip>
        <Tooltip content="Eg er aria-label">
          <Button icon>
            <FilesIcon aria-hidden />
          </Button>
        </Tooltip>
      </>
    );
  },

  parameters: {
    customStyles: {
      display: "flex",
      gap: "var(--ds-size-2)",
      alignItems: "center",
    },
  },
});

export const WithDynamicTooltipText = meta.story({
  args: {
    content: "Kopier",
  },
  render: () => {
    const [content, setContent] = useState("Kopier");

    return (
      <Tooltip content={content}>
        <Button
          icon
          onClick={() => setContent("Kopiert")}
          onBlur={() => setContent("Kopier")}
        >
          <FilesIcon aria-hidden />
        </Button>
      </Tooltip>
    );
  },
});

export const WithCSSTooltipText = meta.story({
  args: {
    content: "Kopier",
  },
  render: () => (
    <Tooltip content="">
      <Button style={{ "--ds-tooltip": '"Kopier"' } as React.CSSProperties}>
        <FilesIcon aria-hidden />
      </Button>
    </Tooltip>
  ),
});

export const WithDynamicCSSTooltipText = meta.story({
  args: {
    content: "Kopier",
  },
  render: () => {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [tooltipContent, setTooltipContent] = useState("");

    // Tooltip text from css variable
    useEffect(() => {
      if (typeof window === "undefined" || !tooltipRef.current) return;
      const content = getComputedStyle(tooltipRef.current)
        .getPropertyValue("--ds-tooltip-content")
        .replace(/^["']|["']$/g, "")
        .trim();
      setTooltipContent(content);
    }, []);

    return (
      <Tooltip content={tooltipContent} ref={tooltipRef}>
        <Button
          style={{ "--ds-tooltip-content": '"Kopier"' } as React.CSSProperties}
        >
          <FilesIcon aria-hidden />
        </Button>
      </Tooltip>
    );
  },
});
