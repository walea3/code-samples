import { useEffect, useState } from 'react';

export const useTimerInMilliSeconds = (milliseconds: number): number => {
  const oneMillisecond: number = 1000;
  const [time, setTime] = useState<number>(milliseconds);

  const handleCountdown = (): NodeJS.Timeout =>
    setInterval(() => {
      setTime((remainingTime) => remainingTime - oneMillisecond);
    }, oneMillisecond);

  useEffect(() => {
    const interval = time >= 0 && handleCountdown();

    return () => clearInterval(interval);
  }, [oneMillisecond, time]);

  return time;
};
