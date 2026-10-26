import * as icons from "@lanekassen/ds-icons";
import { Card, Paragraph } from "@lanekassen/ds-react";
import type { ComponentType, SVGProps } from "react";

const ICONS = Object.entries(icons)
  .filter(([name]) => name.endsWith("Icon"))
  .sort(([a], [b]) => a.localeCompare(b)) as [
  string,
  ComponentType<SVGProps<SVGSVGElement>>,
][];

export const Icons = () => (
  <>
    <style>{`
      .icons { display: grid; grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr)); gap: var(--ds-size-4); margin: 0; padding: 0 }
      .icons button { display: flex; flex-direction: column; align-items: center; gap: var(--ds-size-2); width: 100% }
      .icons svg { font-size: 2.5rem }
    `}</style>
    <ul className="icons">
      {ICONS.map(([name, Icon]) => (
        <li key={name} style={{ listStyle: "none" }}>
          <Card
            asChild
            data-color="neutral"
            data-tooltip="Kopier navn"
            onClick={() => {
              navigator.clipboard.writeText(name);
            }}
          >
            <button type="button">
              <Icon aria-hidden />
              <Paragraph data-size="md">{name.replace(/Icon$/, "")}</Paragraph>
            </button>
          </Card>
        </li>
      ))}
    </ul>
  </>
);
