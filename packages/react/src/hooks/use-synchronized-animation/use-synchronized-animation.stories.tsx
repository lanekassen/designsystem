import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import { Button, useSynchronizedAnimation } from "../..";

const meta = {
  tags: ["!dev"],
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
} satisfies Meta;

export default meta;

const boxStyle = {
  width: "30px",
  height: "30px",
  backgroundColor: "red",
};

const SyncedBox = () => {
  const ref = useSynchronizedAnimation<HTMLDivElement>("spin");

  return (
    <div
      ref={ref}
      style={{
        animation: "spin 2s linear infinite",
        ...boxStyle,
      }}
    />
  );
};

export const TestSync: StoryFn = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>Ny boks</Button>
      <div
        style={{
          display: "flex",
          gap: "10px",
          maxWidth: "300px",
          flexWrap: "wrap",
        }}
      >
        {Array.from({ length: count }).map((_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: items are static
          <SyncedBox key={i} />
        ))}
      </div>

      <style>
        {`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}
      </style>
    </>
  );
};
