import React from 'react';
import { CheckRadioProps } from './';

interface CheckRadioIconProps extends React.SVGAttributes<SVGElement> {
  variant: CheckRadioProps['variant'];
}

export const IconPaths = {
  radio:
    'M14,19L14,19c-2.8,0-5-2.2-5-5v0c0-2.8,2.2-5,5-5h0c2.8,0,5,2.2,5,5v0C19,16.8,16.8,19,14,19z',
  checkbox: 'M19.5,7.4l-8,7.9l-1.9-1.9l-2.1,2.1l4,4.1L21.6,9.5L19.5,7.4z',
};

export function CheckRadioIcon({ variant, ...props }: CheckRadioIconProps) {
  const svgPath: string = IconPaths[variant];

  const accessibilityProps = {
    focusable: false,
    'aria-hidden': true,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      {...props}
      {...accessibilityProps}
    >
      <path d={svgPath} />
    </svg>
  );
}
