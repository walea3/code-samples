import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Styles } from '@nel-ui/tooling-styling';
import * as formTheme from './tokens.tmp';

const { px, font, mergeStyles } = utils;
const theme = { ...foundationTheme, ...formTheme };

const styles: Styles = {
  /**
   * Elements
   */
  textarea: mergeStyles(font(), {
    composes: '$input',
    overflowY: 'auto',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
    wordWrap: 'break-word',

    height: 'auto',
    width: '100%',
    minHeight: px(theme.textareaMinHeight),
    padding: `${px(theme.formControlSpacingVertical)} ${px(
      theme.formControlSpacingHorizontal
    )}`,

    '&::placeholder': {
      isolate: 0,
      color: theme.colourTextBody,
    },

    '$field &': {
      isolate: 0,
      alignSelf: 'flex-start',
    },
  }),
};

export default styles;
