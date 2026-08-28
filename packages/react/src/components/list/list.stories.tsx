import preview from "../../../../../apps/storybook/.storybook/preview";
import { Heading, List } from "../";

const meta = preview.meta({
  title: "Designsystem/List",
  component: List.Ordered,
});

export const Default = meta.story({
  render: (args) => (
    <List.Unordered {...args}>
      <List.Item>Skattemelding</List.Item>
      <List.Item>Lønnslipp</List.Item>
      <List.Item>Opptaksbrev</List.Item>
    </List.Unordered>
  ),
});

export const Sortert = meta.story({
  render: (args) => (
    <>
      <Heading
        level={2}
        data-size="xs"
        style={{ marginBottom: "var(--ds-size-2)" }}
      >
        For å få pengene utbetalt må du:
      </Heading>
      <List.Ordered {...args}>
        <List.Item>Søke om stipend og lån.</List.Item>
        <List.Item>Signere avtalen.</List.Item>
        <List.Item>Bekrefte utdanningen hvis det er nødvendig.</List.Item>
      </List.Ordered>
    </>
  ),
});

export const Usortert = meta.story({
  render: (args) => (
    <>
      <Heading
        level={2}
        data-size="xs"
        style={{ marginBottom: "var(--ds-size-2)" }}
      >
        Du kan få støtte til
      </Heading>
      <List.Unordered {...args}>
        <List.Item>studieavgift</List.Item>
        <List.Item>bøker og undervisningsmateriell</List.Item>
        <List.Item>boutgifter</List.Item>
      </List.Unordered>
    </>
  ),
});

export const Innrykk = meta.story({
  render: (args) => (
    <>
      <Heading style={{ marginBlockEnd: "var(--ds-size-3)" }}>
        Du kan få støtte til flere typer utdanning:
      </Heading>
      <List.Unordered {...args}>
        <List.Item>
          <Heading
            level={3}
            data-size="xs"
            style={{ marginBlock: "var(--ds-size-2)" }}
          >
            {" "}
            Høyere utdanning
          </Heading>
          <List.Unordered>
            <List.Item>universitet</List.Item>
            <List.Item>høyskole</List.Item>
          </List.Unordered>
        </List.Item>
        <List.Item>
          <Heading
            level={3}
            data-size="xs"
            style={{ marginBlock: "var(--ds-size-2)" }}
          >
            {" "}
            Videregående opplæring
          </Heading>
          <List.Unordered>
            <List.Item>studiespesialisering</List.Item>
            <List.Item>yrkesfag</List.Item>
          </List.Unordered>
        </List.Item>
      </List.Unordered>
    </>
  ),
});
