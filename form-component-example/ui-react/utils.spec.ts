import {
  emptyOption,
  findNextIndex,
  getIndexByValue,
  getIntersectionByValue,
  getOptionByValue,
} from './utils';

describe('@nel-ui/form-react/utils', () => {
  describe('findNextIndex()', () => {
    const options = [
      {
        id: '0',
        value: 'item 1',
        text: 'item 1',
      },
      {
        id: '1',
        value: 'item 2',
        text: 'item 2',
      },
      {
        id: '2',
        value: 'item 3',
        text: 'item 3',
      },
    ];

    test('returns current index with an empty array', () => {
      expect(findNextIndex([], 0, true)).toBe(0);
    });

    test('returns last index when ascending and current index is -1', () => {
      expect(findNextIndex(options, -1, true)).toBe(options.length - 1);
    });

    describe('from start of list', () => {
      test('returns first index when asceding', () => {
        expect(findNextIndex(options, 0, true)).toBe(0);
      });

      test('returns next index when descending', () => {
        expect(findNextIndex(options, 0)).toBe(1);
      });
    });

    describe('from middle of list', () => {
      test('returns previous index when asceding', () => {
        expect(findNextIndex(options, 1, true)).toBe(0);
      });

      test('returns next index when asceding', () => {
        expect(findNextIndex(options, 1)).toBe(2);
      });
    });

    describe('from end of list', () => {
      test('returns previous index when asceding', () => {
        expect(findNextIndex(options, 2, true)).toBe(1);
      });

      test('return current same index', () => {
        expect(findNextIndex(options, 2)).toBe(2);
      });
    });
  });

  describe('getIndexByValue()', () => {
    const testOptions = [
      {
        id: '0',
        value: 'item 1',
        text: 'item 1',
      },
      {
        id: '1',
        value: 'item 2',
        text: 'item 2',
      },
      {
        id: '2',
        value: 'item 3',
        text: 'item 3',
      },
    ];

    test.each`
      name                   | value              | expected
      ${'available value'}   | ${'item 3'}        | ${2}
      ${'unavailable value'} | ${'INVALID_VALUE'} | ${-1}
    `('returns with an $name', ({ value, expected }) => {
      expect(getIndexByValue(testOptions, value)).toBe(expected);
    });
  });

  describe('getOptionByValue()', () => {
    const testOptions = [
      {
        id: '0',
        value: 'item 1',
        text: 'item 1',
      },
      {
        id: '1',
        value: 'item 2',
        text: 'item 2',
      },
      {
        id: '2',
        value: 'item 3',
        text: 'item 3',
      },
    ];

    test.each`
      name                   | value              | expected
      ${'available value'}   | ${'item 2'}        | ${testOptions[1]}
      ${'unavailable value'} | ${'INVALID_VALUE'} | ${emptyOption}
    `('returns with an $name', ({ value, expected }) => {
      expect(getOptionByValue(testOptions, value)).toBe(expected);
    });
  });

  describe('getIntersectionByValue()', () => {
    const baseOptionsAsString = [
      {
        value: 'name-0',
      },
      {
        value: 'name-1',
      },
      {
        value: 'name-2',
      },
    ];

    const baseOptionsAsNumber = [
      {
        value: 0,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
    ];

    test.each`
      name                                          | initialOptions         | itemsToCheck                      | expected
      ${'with single matching options as string'}   | ${baseOptionsAsString} | ${['name-0']}                     | ${[true, false, false]}
      ${'with single matching options as number'}   | ${baseOptionsAsNumber} | ${[0]}                            | ${[true, false, false]}
      ${'with multiple matching options as string'} | ${baseOptionsAsString} | ${['name-0', 'name-1', 'name-2']} | ${[true, true, true]}
      ${'with multiple matching options as number'} | ${baseOptionsAsNumber} | ${[0, 1, 2]}                      | ${[true, true, true]}
      ${'with no available options as string'}      | ${baseOptionsAsString} | ${['name-3', 'name-4', 'name-5']} | ${[false, false, false]}
      ${'with no available options as number'}      | ${baseOptionsAsNumber} | ${[3, 4, 5]}                      | ${[false, false, false]}
    `('$name', ({ initialOptions, itemsToCheck, expected }) => {
      expect(getIntersectionByValue(initialOptions, itemsToCheck)).toMatchObject(
        expected
      );
    });
  });
});
