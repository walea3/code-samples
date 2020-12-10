import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

const isClient = typeof window === 'object';

const getSize = () => ({
  width: isClient ? window.innerWidth : undefined,
  height: isClient ? window.innerHeight : undefined,
});

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) return;

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
