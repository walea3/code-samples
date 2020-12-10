import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Styles } from '@nel-ui/tooling-styling';
import { theme as typographyTheme } from '@nel-ui/typography-styles';

import * as formTheme from './tokens.tmp';

const { px, font, proximity, clearProximity, mergeStyles } = utils;
const theme = { ...foundationTheme, ...typographyTheme, ...formTheme };

const styles: Styles = {
  /**
   * Elements
   */
  fieldControlLabelContainer: mergeStyles(proximity(theme.inputLabelProximity), {
    display: 'flex',
    flexDirection: 'column',
  }),

  inputLabel: mergeStyles(font(), {
    marginRight: px(theme.inputLabelSpacing),
  }),

  /**
   * States
   */
  inlineContainer: {
    display: 'inline-flex',
    width: 'auto',
    verticalAlign: 'middle',

    ':not($fieldBody) > &:not($fieldControlLabelContainer)': mergeStyles(
      clearProximity(),
      {
        isolate: 0,
      }
    ),

    '$field &': {
      isolate: 0,
      alignSelf: 'flex-start',
    },

    '&$fieldControlLabelContainer': {
      isolate: 0,
      marginRight: px(theme.inputInlineSpacing),
    },
  },
};

export default styles;
