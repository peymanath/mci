import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDeviceTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="device-tablet_svg__size-6"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    {...props}
  >
    <path d="M10.5 18a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      d="M7.125 1.5A3.375 3.375 0 0 0 3.75 4.875v14.25A3.375 3.375 0 0 0 7.125 22.5h9.75a3.375 3.375 0 0 0 3.375-3.375V4.875A3.375 3.375 0 0 0 16.875 1.5zM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 0 1 6 19.125z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDeviceTablet;
