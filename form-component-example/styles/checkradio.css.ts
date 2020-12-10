import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Styles } from '@nel-ui/tooling-styling';
import * as fieldStyles from './field.css';
import * as formTheme from './tokens.tmp';

const { inlineGroup } = fieldStyles;
const { px, mq, font, proximity, spacing, mergeStyles } = utils;
const theme = { ...foundationTheme, ...formTheme };

const styles: Styles = {
  checkRadioContainer: mergeStyles(proximity(4, 'padding', 'top'), {
    display: 'flex',

    '&:not(:only-child):not(:last-of-type):not($inlineCheckRadio)': {
      isolate: 0,
      ...proximity(2, 'padding', 'bottom'),
    },
  }),

  checkRadioInput: mergeStyles(utils.getVisuallyHiddenStyle(), {
    '&:disabled': {
      isolate: 0,
      extend: 'disabledCheckRadio',
    },

    '&:not(:disabled):checked': {
      isolate: 0,
      extend: 'checkedCheckRadio',
    },
  }),

  checkRadio: mergeStyles(font(), {
    display: 'flex',
    alignItems: 'flex-start',

    '$checkRadioInput:not(:disabled):focus + &, \
       $checkRadioInput:not(:disabled) + &:hover': {
      isolate: 0,
      extend: 'interactionCheckRadio',
    },

    '$field &': {
      isolate: 0,
      alignSelf: 'flex-start',
    },

    '$inlineField &': mergeStyles(spacing('margin', 'right'), {
      isolate: 0,
    }),

    [mq.screenLg]: {
      alignItems: 'initial',
    },

    '$checkRadioInput:not(:disabled) + &': {
      isolate: 0,
      cursor: theme.cursorInteraction,
    },

    '$checkRadioInput:disabled + &': {
      isolate: 0,
      cursor: theme.cursorDisabled,
    },
  }),

  checkRadioControl: {
    flexShrink: 0,
    width: px(theme.checkRadioSize - theme.formControlBorderSize),
    height: px(theme.checkRadioSize - theme.formControlBorderSize),
    marginRight: px(theme.checkRadioLabelSpacing),
    cursor: 'inherit',

    fill: 'currentColor',
    color: theme.colourUi00,
    backgroundColor: theme.colourUi00,
    border: `${px(theme.formControlBorderSize)} solid ${theme.formControlBorderColour}`,
    borderRadius: px(theme.formControlBorderRadius),
    outline: 'none',

    overflow: 'hidden',
    transition: 'box-shadow, background-color, color, border',
    transitionDuration: theme.transitionDuration,
  },

  /**
   * States
   */
  inlineCheckRadio: {
    '& $checkRadio': mergeStyles(spacing('margin', 'right'), {
      isolate: 0,
      display: 'inline-flex',
    }),
  },

  checkedCheckRadio: {
    '& + $checkRadio:not($errorCheckRadio):not($warningCheckRadio) \
    > $checkRadioControl': {
      isolate: 0,
      borderColor: theme.colourInteractionFeedback100,
      backgroundColor: theme.colourInteractionFeedback100,
    },
  },

  disabledCheckRadio: {
    '& + $checkRadio': {
      isolate: 0,
      cursor: 'not-allowed',
      pointerEvents: 'none',

      '& > $checkRadioControl': {
        isolate: 0,
        color: theme.checkRadioDisabledCheck,
        background: theme.checkRadioDisabledBackgroundColour,
        borderColor: theme.checkRadioDisabledBorder,
      },
    },

    '&:not(:checked) + $checkRadio > $checkRadioControl': {
      isolate: 0,
      background: theme.checkRadioDisabledSelectedBackgroundColour,
    },
  },

  /**
   * Interaction
   */
  interactionCheckRadio: {
    '&:not($errorCheckRadio):not($warningCheckRadio) > $checkRadioControl': {
      isolate: 0,
      borderColor: theme.colourInteractionFeedback100,
      boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
        theme.colourInteractionFeedback50
      }`,
    },

    '&$errorCheckRadio > $checkRadioControl': {
      isolate: 0,
      borderColor: theme.colourInteractionError100,
      boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
        theme.colourInteractionError50
      }`,
    },

    '&$warningCheckRadio > $checkRadioControl': {
      isolate: 0,
      boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
        theme.colourInteractionWarning50
      }`,
    },
  },

  errorCheckRadio: {
    '& > $checkRadioControl': {
      isolate: 0,
      color: theme.colourInteractionError10,
      borderColor: theme.colourInteractionError100,
      backgroundColor: theme.colourInteractionError10,
    },

    '$checkRadioInput:not(:disabled):checked + & > $checkRadioControl': {
      isolate: 0,
      backgroundColor: theme.colourInteractionError100,
    },
  },

  warningCheckRadio: {
    '& > $checkRadioControl': {
      isolate: 0,
      color: theme.colourInteractionWarning10,
      borderColor: theme.colourInteractionWarning100,
      backgroundColor: theme.colourInteractionWarning10,
    },

    '$checkRadioInput:not(:disabled):checked + & > $checkRadioControl': {
      isolate: 0,
      backgroundColor: theme.colourInteractionWarning100,
    },
  },

  checkRadioGroup: {
    display: 'flex',
  },

  checkRadioGroupInner: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',

    '&$largeInlineGroup': {
      isolate: 0,

      [mq.viewportMd]: {
        display: 'flex',
        extend: inlineGroup,
      },
    },

    '&$mobileInlineGroup': {
      display: 'flex',
      extend: inlineGroup,
    },
  },

  checkbox: {},
  radio: {
    '& > $checkRadioControl': {
      isolate: 0,
      borderRadius: theme.radioBorderRadio,
    },
  },

  // Note: prevent stacking when inline set mobile
  largeInlineGroup: {},
  mobileInlineGroup: {},
};

export default styles;
