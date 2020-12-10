import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Styles } from '@nel-ui/tooling-styling';
import * as formTheme from './tokens.tmp';

const { spacing, proximity, mergeStyles } = utils;
const theme = { ...foundationTheme, ...formTheme };

const styles: Styles = {
  formAlertMessage: {
    '&:not($prominent)': mergeStyles(proximity(3), {
      isolate: 0,
    }),
  },

  /**
   * States
   */
  errorFormAlertMessage: {},

  warningFormAlertMessage: {},

  prominent: mergeStyles(spacing('padding', 'left'), {
    isolate: 0,

    '&$errorFormAlertMessage': {
      isolate: 0,
      borderLeft: theme.formAlertMessageBorderError,
    },

    '&$warningFormAlertMessage': {
      isolate: 0,
      borderLeft: theme.formAlertMessageBorderWarning,
      borderRadius: 0,
    },
  }),
};

export default styles;
