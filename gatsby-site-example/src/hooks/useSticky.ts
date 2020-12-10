import { useEffect, useRef, useState } from 'react';

export const useSticky = (ref: React.MutableRefObject<HTMLElement>): boolean => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const lastStuckPosition = useRef<number>();

  const handleScroll = () => {
    if (!lastStuckPosition.current) {
      lastStuckPosition.current = Math.floor(ref.current.getBoundingClientRect().top);
    }

    const availableToStick: boolean = window.pageYOffset >= lastStuckPosition.current;

    setSticky(availableToStick);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isSticky;
};
