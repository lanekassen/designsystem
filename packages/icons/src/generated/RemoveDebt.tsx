import type { SVGProps } from "react";

const SvgRemoveDebt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    role="img"
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 16.5a.75.75 0 0 1 .75.75v2.25c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-2.25a.75.75 0 0 1 1.5 0v2h10.5v-2a.75.75 0 0 1 .75-.75"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 3.25c.199 0 .39.08.53.22l4 4c.14.14.22.331.22.53v3.25a.75.75 0 0 1-1.5 0v-2.5H14.5c-.69 0-1.25-.56-1.25-1.25V4.75h-6.5v6.5a.75.75 0 0 1-1.5 0V4.5c0-.69.56-1.25 1.25-1.25zm.75 4h1.44l-1.44-1.44zm3.12 7a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m-5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m-5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m-5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgRemoveDebt;
