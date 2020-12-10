export const defaultDelay: number = 250;

interface FadeIn {
  active: boolean;
  delay?: number;
}

export const getDelay = (multiplier: number = 1): string =>
  `${multiplier * defaultDelay}ms`;

export const fadeIn = ({ active, delay = defaultDelay }: FadeIn) => ({
  opacity: active ? 1 : 0,
  from: {
    opacity: 0,
  },
  delay,
});
