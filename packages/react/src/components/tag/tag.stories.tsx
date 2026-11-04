import { ParagraphIcon, RobotIcon } from "@navikt/aksel-icons";
import preview from "../../../../../apps/storybook/.storybook/preview";
import { severityColors, themeColors } from "../../../stories/constants";
import { Tag, type TagProps } from "../";

const meta = preview.meta({
  title: "Designsystem/Tag",
  component: Tag,
  parameters: {
    customStyles: { justifyContent: "start" },
  },
});

const _dataColors = [...themeColors, ...severityColors];

export const Default = meta.story({
  args: {
    children: "New",
    variant: "default",
  },
});

const sizes: TagProps["data-size"][] = ["sm", "md", "lg"];

export const Sizes = meta.story({
  render: ({ ...rest }) => {
    return (
      <>
        {sizes.map((size) => (
          <Tag key={size} data-size={size} {...rest}>
            {size}
          </Tag>
        ))}
      </>
    );
  },

  parameters: {
    customStyles: {
      display: "flex",
      alignItems: "center",
      gap: "var(--ds-size-2)",
    },
  },
});

export const Colors = meta.story({
  render: ({ ...rest }) => {
    return (
      <>
        {_dataColors.map((color) => (
          <Tag
            key={color}
            data-color={color as TagProps["data-color"]}
            {...rest}
          >
            {color}
          </Tag>
        ))}
      </>
    );
  },

  parameters: {
    customStyles: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--ds-size-2)",
      height: "100%",
      width: "100%",
      placeItems: "center",
    },
  },
});

export const Icons = meta.story({
  render: ({ ...rest }) => {
    return (
      <>
        <Tag
          data-color="neutral"
          data-size="md"
          style={{
            paddingInlineStart: "var(--ds-size-1)",
          }}
          {...rest}
        >
          <RobotIcon
            aria-hidden
            style={{ marginInlineEnd: "var(--ds-size-1)" }}
          />
          Teksten er skrevet av mennesker
        </Tag>
        <Tag
          data-color="info"
          data-size="md"
          style={{
            paddingInlineStart: "var(--ds-size-1)",
          }}
          {...rest}
        >
          <ParagraphIcon
            aria-hidden
            style={{ marginInlineEnd: "var(--ds-size-1)" }}
          />
          Forvaltningsloven §1
        </Tag>
      </>
    );
  },

  parameters: {
    customStyles: {
      display: "flex",
      gap: "var(--ds-size-2)",
      height: "100%",
      width: "100%",
      placeItems: "center",
    },
  },
});

export const VariantOutline = meta.story({
  render: ({ ...rest }) => {
    return (
      <>
        {_dataColors.map((color) => (
          <Tag
            key={color}
            data-color={color as TagProps["data-color"]}
            variant="outline"
            {...rest}
          >
            {color}
          </Tag>
        ))}
      </>
    );
  },

  parameters: {
    customStyles: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--ds-size-2)",
      height: "100%",
      width: "100%",
      placeItems: "center",
    },
  },
});
