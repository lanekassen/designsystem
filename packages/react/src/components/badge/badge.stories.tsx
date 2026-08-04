import {
  ChatIcon,
  EnvelopeClosedFillIcon,
  HeartFillIcon,
  InboxIcon,
  PencilIcon,
  VideoFillIcon,
  VideoIcon,
} from "@navikt/aksel-icons";
import type { Meta, StoryFn } from "@storybook/react-vite";
import type { CSSProperties } from "react";
import { Badge, Button, Paragraph, Tabs } from "../";

type Story = StoryFn<typeof Badge>;

const meta: Meta<typeof Badge> = {
  title: "Designsystem/Badge",
  component: Badge,
  parameters: {
    customStyles: {
      flexWrap: "wrap",
    },
  },
};

export default meta;
export const Default: Story = (args) => <Badge {...args} />;

Default.args = {
  count: 15,
  maxCount: 9,
};

export const CustomPlacement: Story = () => (
  <>
    <Badge.Position
      placement="top-right"
      style={
        {
          "--dsc-badge-top": "16%",
          "--dsc-badge-right": "10%",
        } as CSSProperties
      }
    >
      <Badge data-color="accent"></Badge>
      <EnvelopeClosedFillIcon title="Meldinger" />
    </Badge.Position>
  </>
);

export const Status: Story = () => (
  <>
    <Badge.Position data-size="sm">
      <Badge data-color="danger" />
      <VideoFillIcon title="Videokamera" />
    </Badge.Position>
    <Badge.Position data-size="md">
      <Badge data-color="danger" />
      <VideoFillIcon title="Videokamera" />
    </Badge.Position>
    <Badge.Position data-size="lg">
      <Badge data-color="danger" />
      <VideoFillIcon title="Videokamera" />
    </Badge.Position>
  </>
);

export const InTabs: Story = () => (
  <Tabs defaultValue="value1">
    <Tabs.List>
      <Tabs.Tab value="value1">
        <HeartFillIcon aria-hidden />
        Favoritter
        <Badge count={64} maxCount={10} data-color="accent" />
      </Tabs.Tab>
      <Tabs.Tab value="value2">Din side</Tabs.Tab>
      <Tabs.Tab value="value3">
        <PencilIcon aria-hidden />
        Innboks
        <Badge count={2} data-color="accent" />
      </Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel value="value1">Profil</Tabs.Panel>
  </Tabs>
);

export const InButton: Story = () => (
  <>
    <Button icon variant="tertiary">
      <Badge.Position>
        <Badge data-color="danger" count={1000} maxCount={99} />
        <InboxIcon title="Innboks" />
      </Badge.Position>
    </Button>
    <Button icon variant="tertiary">
      <Badge.Position>
        <Badge data-color="danger" count={10} />
        <ChatIcon title="Meldinger" />
      </Badge.Position>
    </Button>
    <Button icon variant="tertiary">
      <Badge.Position>
        <Badge data-color="danger"></Badge>
        <VideoIcon title="Skru på video" />
      </Badge.Position>
    </Button>
    <Badge.Position>
      <Badge data-color="danger" count={10} />
      <Button>
        <InboxIcon title="Innboks" /> Test
      </Button>
    </Badge.Position>
  </>
);

const VariantsMap: {
  [key: string]: { [key: string]: string };
} = {
  dangerBase: {
    "data-color": "danger",
  },
  dangerTinted: {
    "data-color": "danger",
    variant: "tinted",
  },
  accentBase: {
    "data-color": "accent",
  },
  accentTinted: {
    "data-color": "accent",
    variant: "tinted",
  },
};

export const Variants: Story = () => (
  <div style={{ display: "flex", gap: "var(--ds-size-4)", flexWrap: "wrap" }}>
    {Object.entries(VariantsMap).map(([key, value]) => (
      <Badge key={key} {...value} count={15} maxCount={9} />
    ))}
  </div>
);

Variants.parameters = {
  customStyles: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "var(--ds-size-2)",
    height: "100%",
    width: "100%",
  },
};

export const Bullet: Story = () => (
  <Paragraph>
    <Badge data-color="success" />
    Aktiv
  </Paragraph>
);
