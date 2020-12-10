import { _find, _findIndex } from '@nel-ui/js-helpers';

export const emptyOption = { id: undefined, text: undefined, value: undefined };

type DropdownOption = typeof emptyOption;
interface FormOption {
  value: string | number;
}

export const getIntersectionByValue = <T extends FormOption['value']>(
  options: Array<{ value: T }>,
  arrayToCheck: T[]
): boolean[] => options.map(({ value }) => arrayToCheck.includes(value));

export const getIndexByValue = (
  options: FormOption[] | DropdownOption[],
  optionValue
): number => _findIndex(options, ({ value }) => value === optionValue);

export const getOptionByValue = (options: FormOption[] | DropdownOption[], optionValue) =>
  _find(options, ({ value }) => value === optionValue) || emptyOption;

export function findNextIndex(
  items: any[],
  current: number,
  isAscending?: boolean
): number {
  let next = current;

  const total = items.length;
  const hasItems = total > 0;
  const last = total - 1;
  const isPrevItemFirst = current < 1;
  const isNextItemLast = current >= last - 1;

  if (hasItems) {
    if (isAscending && current < 0) {
      next = last;
    } else if (isAscending) {
      next = isPrevItemFirst ? 0 : current - 1;
    } else {
      next = isNextItemLast ? last : current + 1;
    }
  }

  return next;
}
