import { FilesIcon } from "@navikt/aksel-icons";
import type { Meta, StoryFn, StoryObj } from "@storybook/react-vite";
import { useEffect, useRef, useState } from "react";
import { Button, Tooltip } from "../";

type Story = StoryObj<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
  title: "Designsystem/Tooltip",
  component: Tooltip,
  parameters: {
    customStyles: { margin: "2rem", padding: "4rem" },
    chromatic: {
      disableSnapshot: false,
    },
  },
};

export default meta;

export const Default: StoryFn<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Button icon>
      <FilesIcon aria-hidden />
    </Button>
  </Tooltip>
);

Default.args = {
  content: "Kopier",
  placement: "top",
};

export const WithString: Story = {
  args: {
    content: "Organisasjonsnummer",
    children: "Org.nr.",
    tabIndex: 0,
  },
};

export const Placement: Story = {
  args: {
    content: "Kopier",
    placement: "bottom",
    children: (
      <Button icon>
        <FilesIcon aria-hidden />
      </Button>
    ),
  },
};

export const Aria: StoryFn<typeof Tooltip> = () => {
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
};

Aria.decorators = [
  (Story) => (
    <div
      style={{ display: "flex", gap: "var(--ds-size-2)", alignItems: "center" }}
    >
      <Story />
    </div>
  ),
];

export const WithDynamicTooltipText: Story = {
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
};

export const WithCSSTooltipText: Story = {
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
};

export const WithDynamicCSSTooltipText: Story = {
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
};
