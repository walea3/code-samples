import React, { CSSProperties, forwardRef, ReactNode, RefObject } from 'react';

import { defaultDelay } from './animations.constants';

interface FadeInProps {
  active: boolean;
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  style?: CSSProperties;
}

const FadeIn = forwardRef((forwardProps: FadeInProps, ref: RefObject<HTMLDivElement>) => {
  const {
    active,
    duration = defaultDelay,
    delay = defaultDelay,
    style,
    ...props
  } = forwardProps;

  return (
    <div
      {...props}
      ref={ref}
      style={{
        ...style,
        opacity: active ? 1 : 0,
        transition: `opacity ${duration}ms ${delay}ms linear`,
      }}
    />
  );
});

export default FadeIn;
