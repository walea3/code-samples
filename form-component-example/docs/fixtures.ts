export const getOptions = (
  total: number = 1,
  idPrefix: string = '',
  withLongContent: boolean = true,
  isSingleLine?: boolean
) =>
  Array.from({ length: total }, (_val, i: number) => {
    const longContent = ` Lorem ipsum dolor sit amet${
      isSingleLine
        ? ''
        : ', consectetur adipiscing elit. In ut consectetur sem, a malesuada ex'
    }`;
    return {
      id: `${idPrefix}option-${i}`,
      value: `option${i}`,
      text: `Option ${i + 1}${withLongContent && i === 1 ? longContent : ''}`,
    };
  });
