import css from "@lanekassen/ds-css/theme?raw";
import { Card, Table } from "@lanekassen/ds-react";

const toUpper = (str: string) => str.replace(/\b./g, (m) => m.toUpperCase());
const toUnique = <T,>(arr: T[]): T[] => [...new Set(arr)];

const COLORS = toUnique(
  Array.from(
    css.matchAll(/--ds-color-([^-]+)(-[^-:)]+){3}/g), // Match minium 3 variants to avoid dynamic tokens without color name
    ([, name]) => name,
  ),
);

const GROUPS = [
  [
    "background",
    [
      ["default", ""],
      ["tinted", ""],
    ],
  ],
  [
    "surface",
    [
      ["default", ""],
      ["tinted", ""],
      ["hover", ""],
      ["active", ""],
    ],
  ],
  [
    "border",
    [
      ["subtle", ""],
      ["default", ""],
      ["strong", ""],
    ],
  ],
  [
    "text",
    [
      ["subtle", ""],
      ["default", ""],
    ],
  ],
  [
    "base",
    [
      ["default", ""],
      ["hover", ""],
      ["active", ""],
      ["contrast-subtle", ""],
      ["contrast-default", ""],
    ],
  ],
] as const;

export const Colors = () => (
  <>
    <style>{`
      .tokens { font-size: 0.875rem }
			.tokens table { min-width: 1140px } /* Prevent squeeze */
      .tokens :is(th, td):has(+ [data-i="0"]) { padding-right: var(--ds-size-2) }
      .tokens :is(th, td)[data-i="0"] { padding-left: var(--ds-size-2); border-left: 1px solid var(--ds-color-border-subtle) }
      .tokens thead small { font-weight: normal; display: block }
      .tokens thead tr:first-child { text-align: center }
      .tokens thead th { vertical-align: top }
      .tokens tbody th { vertical-align: middle }
      .tokens tbody td { padding-inline: 1px }
      .tokens button { width: 100%; border-radius: var(--ds-border-radius-sm) }
      .tokens button::before { display: none }
    `}</style>
    <figure className="tokens">
      <Table data-fixed>
        <thead>
          <tr>
            <th aria-label="Farger" />
            {GROUPS.map(([name, variants]) => (
              <th colSpan={variants.length} key={name}>
                {toUpper(name)}
              </th>
            ))}
          </tr>
          <tr>
            <th />
            {GROUPS.flatMap(([name, variants]) =>
              variants.map(([variant, desc], i) => (
                <th key={`${name}-${variant}`} data-i={i}>
                  {toUpper(variant)}
                  {!!desc && <small>{desc}</small>}
                </th>
              )),
            )}
          </tr>
        </thead>
        <tbody>
          {COLORS.map((color) => (
            <tr key={color}>
              <th>{toUpper(color)}</th>
              {GROUPS.map(([name, variants]) =>
                variants.map(([variant], i) => {
                  const token = `var(--ds-color-${color}-${name}-${variant})`;

                  return (
                    <td key={`${name}-${variant}`} data-i={i}>
                      <Card
                        asChild
                        data-tooltip={token}
                        onClick={() => {
                          navigator.clipboard.writeText(token);
                          document
                            .getElementById("ds-tooltip")
                            ?.replaceChildren("Kopiert!");
                        }}
                        style={{
                          background: `var(--ds-color-${color}-${name}-${variant})`,
                        }}
                        data-size="sm"
                      >
                        <button type="button" />
                      </Card>
                    </td>
                  );
                }),
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </figure>
  </>
);
