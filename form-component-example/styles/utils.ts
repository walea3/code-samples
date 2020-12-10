import { utils } from '@nel-ui/foundations';

const MIN_INPUT_SIZE: number = 2;
const MIN_INPUT_SIZING: number = 14;
const INCREMENT_INPUT_SIZING: number = 3;

export const getInputWidth = (size: number = MIN_INPUT_SIZE): number => {
  const inputSize = size <= MIN_INPUT_SIZE ? 0 : size - MIN_INPUT_SIZE;
  return utils.sizing(inputSize * INCREMENT_INPUT_SIZING + MIN_INPUT_SIZING);
};
