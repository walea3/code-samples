import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Styles } from '@nel-ui/tooling-styling';
import * as formTheme from './tokens.tmp';

const {
  px,
  spacing,
  proximity,
  clearProximity,
  clearSpacing,
  mergeStyles,
} = utils;
const theme = { ...foundationTheme, ...formTheme };

export const inlineGroup = {
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '100%',
  flexDirection: 'row',
  width: 'auto',
};

const styles: Styles = {
  /**
   * Elements
   */
  field: proximity(theme.fieldProximity),

  fieldWithTopAction: {
    composes: '$fieldActions',
    flexWrap: 'wrap',

    '& > *': {
      isolate: 0,
      flex: '0 1 100%',
    },

    '& > $fieldActionRight': {
      isolate: 0,
      flexShrink: 0,
    },
  },

  fieldBody: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    maxWidth: '100%',

    '$inlineField > &': {
      isolate: 0,
      extend: inlineGroup,
    },

    '& + $fieldActions': mergeStyles(proximity(theme.fieldActionProximity), {
      isolate: 0,
    }),
  },

  fieldLabelContainer: {
    display: 'inline',
    flex: '1 1 0%',
  },

  fieldLabel: {
    '$field &': {
      isolate: 0,
      display: 'inline',
    },
  },

  fieldLabelWithAction: {
    marginRight: px(theme.fieldActionOffset),
  },

  fieldDescription: {},

  fieldControl: {},

  fieldActions: {
    display: 'flex',
    flexBasis: '100%',
    justifyContent: 'space-between',
  },

  fieldAction: {
    flexBasis: 'auto',

    '& > *': mergeStyles(clearProximity(), clearSpacing('padding', 'vertical'), {
      isolate: 0,
      minHeight: 'auto',
    }),

    '&:not(:only-child)': {
      isolate: 0,
      maxWidth: theme.fieldActionMaxWidth,

      '&:first-child': {
        isolate: 0,
        marginRight: px(theme.fieldActionOffset),
      },
    },
  },

  fieldActionLeft: {
    composes: '$fieldAction',
  },

  fieldActionRight: {
    composes: '$fieldAction',
    marginLeft: 'auto',

    '& > *': {
      isolate: 0,
      textAlign: 'right',
    },
  },

  /**
   * States
   */
  fieldset: {},

  inlineField: {},

  alertField: mergeStyles(spacing('padding', 'left'), {
    borderLeftWidth: px(theme.fieldAlertBorderSize),
    borderLeftStyle: 'solid',
  }),

  errorAlertField: {
    composes: '$alertField',
    borderColor: theme.colourInteractionError100,
  },

  warningAlertField: {
    composes: '$alertField',
    borderColor: theme.colourInteractionWarning100,
  },
};

export default styles;
