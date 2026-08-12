import type { Meta, StoryFn } from "@storybook/react-vite";

import { Breadcrumbs } from "../";

export default {
  title: "Designsystem/Breadcrumbs",
  component: Breadcrumbs,
} as Meta;

export const Default: StoryFn<typeof Breadcrumbs> = (args) => (
  <>
    <Breadcrumbs aria-label="Du er her:" {...args}>
      <Breadcrumbs.Link href="#link" aria-label="Tilbake til Nivå 3">
        Nivå 3
      </Breadcrumbs.Link>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#link">Nivå 1</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#link">Nivå 2</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#link">Nivå 3</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#link">Nivå 4</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  </>
);

export const ListOnly: StoryFn<typeof Breadcrumbs> = () => (
  <Breadcrumbs aria-label="Du er her:">
    <Breadcrumbs.List>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Nivå 1</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Nivå 2</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Nivå 3</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Nivå 4</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs.List>
  </Breadcrumbs>
);

export const BackOnly: StoryFn<typeof Breadcrumbs> = () => (
  <Breadcrumbs>
    <Breadcrumbs.Link href="#link" aria-label="Tilbake til Nivå 3">
      Nivå 3
    </Breadcrumbs.Link>
  </Breadcrumbs>
);

export const LongItems: StoryFn<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args}>
    <Breadcrumbs.Link
      href="#link"
      aria-label="Tilbake til helsesertifikat for sjømat"
    >
      Slik søker du om helsesertifikat for sjømat
    </Breadcrumbs.Link>
    <Breadcrumbs.List aria-label="Du er her:">
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Hjem</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">
          Eksport til land utenfor EU/EØS
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">
          Eksport av mat og drikke
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">
          Eksport av fisk og sjømat
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">
          Veiledning om helsesertifikat for sjømat
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">
          Slik søker du om helsesertifikat for sjømat
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">
          Slik søker du om helsesertifikat i ny eksportløsning
        </Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs.List>
  </Breadcrumbs>
);

export const MobileViewport: StoryFn<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs aria-label="Du er her:" {...args}>
    <Breadcrumbs.Link href="#link" aria-label="Tilbake til Nivå 3">
      Nivå 3
    </Breadcrumbs.Link>
    <Breadcrumbs.List>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Nivå 1</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Nivå 2</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Nivå 3</Breadcrumbs.Link>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <Breadcrumbs.Link href="#link">Nivå 4</Breadcrumbs.Link>
      </Breadcrumbs.Item>
    </Breadcrumbs.List>
  </Breadcrumbs>
);

export const Sizes: StoryFn<typeof Breadcrumbs> = (args) => (
  <>
    <Breadcrumbs aria-label="Du er her:" {...args} data-size="sm">
      <Breadcrumbs.Link href="#link" aria-label="Tilbake til Nivå 3">
        Nivå 3
      </Breadcrumbs.Link>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#link">Nivå 1</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#link">Nivå 2</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#link">Nivå 3</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href="#link">Nivå 4</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  </>
);

MobileViewport.parameters = {
  viewport: {
    defaultViewport: "375px", // Large mobile default viewport
  },
};
