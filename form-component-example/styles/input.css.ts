import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Styles } from '@nel-ui/tooling-styling';
import { theme as typographyTheme } from '@nel-ui/typography-styles';

import * as formTheme from './tokens.tmp';
import { getInputWidth } from './utils';

const { px, font, proximity, clearProximity, mergeStyles } = utils;
const theme = { ...foundationTheme, ...typographyTheme, ...formTheme };

const styles: Styles = {
  /**
   * Elements
   */
  input: mergeStyles(font(), proximity(theme.inputProximity), {
    display: 'flex',
    maxWidth: '100%',
    height: px(theme.inputHeight),
    border: `${px(theme.formControlBorderSize)} solid ${theme.formControlBorderColour}`,
    borderRadius: theme.formControlBorderRadius,
    overflow: 'hidden',

    transition: 'border, box-shadow, background-color',
    transitionDuration: theme.transitionDuration,

    '&:focus': {
      isolate: 0,
      extend: 'focussedInput',
    },
  }),

  inputContainer: mergeStyles(proximity(theme.inputLabelProximity), {
    display: 'flex',
    flexDirection: 'column',
  }),

  inputControl: {
    display: 'inline-block',
    flex: '1 1 auto',
    minWidth: px(getInputWidth()),
    padding: `${px(theme.formControlSpacingVertical)} ${px(
      theme.formControlSpacingHorizontal
    )}`,

    '&::placeholder': {
      isolate: 0,
      color: theme.colourTextBody,
    },

    '&:focus': {
      isolate: 0,
      outline: 0,
    },

    '&:first-child': {
      isolate: 0,
      paddingLeft: px(theme.formControlSpacingHorizontal),
    },

    '&:last-child': {
      isolate: 0,
      paddingRight: px(theme.formControlSpacingHorizontal),
    },

    '&[type="number"]': {
      isolate: 0,
      '-webkit-appearance': 'textfield',
    },

    '&::-webkit-inner-spin-button,\
     &::-webkit-outer-spin-button': {
      isolate: 0,
      margin: 0,
      '-webkit-appearance': 'none',
    },
  },

  inputPrefixSuffix: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,

    '&, & > *': {
      isolate: 0,
      whiteSpace: 'nowrap',
    },
  },

  inputPrefix: {
    composes: '$inputPrefixSuffix',
    paddingLeft: px(theme.formControlSpacingHorizontal),
  },

  inputSuffix: {
    composes: '$inputPrefixSuffix',
    paddingRight: px(theme.formControlSpacingHorizontal),
  },

  /**
   * States
   */
  inlineInput: {
    display: 'inline-flex',
    width: 'auto',
    verticalAlign: 'middle',

    ':not($fieldBody) > &:not($inputContainer)': mergeStyles(clearProximity(), {
      isolate: 0,
    }),

    '$field &': {
      isolate: 0,
      alignSelf: 'flex-start',
    },
  },

  disabledInput: {
    background: theme.colourUi05,
    cursor: 'not-allowed',

    '& *': {
      isolate: 0,
      pointerEvents: 'none',
    },
  },

  errorInput: {
    '&:not($disabledInput)': {
      isolate: 0,
      background: theme.colourInteractionError10,
      borderColor: theme.colourInteractionError100,

      '&:focus, &$focussedInput': {
        isolate: 0,
        boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
          theme.colourInteractionError50
        }`,
        borderColor: theme.colourInteractionError100,
      },
    },
  },

  warningInput: {
    '&:not($disabledInput)': {
      isolate: 0,
      background: theme.colourInteractionWarning10,
      borderColor: theme.colourInteractionWarning100,

      '&:focus, &$focussedInput': {
        isolate: 0,
        boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
          theme.colourInteractionWarning50
        }`,
        borderColor: theme.colourInteractionWarning100,
      },
    },
  },

  /**
   * Interaction
   */
  focussedInput: {
    outline: 0,

    '&:not($disabledInput)': {
      isolate: 0,
      borderColor: theme.colourInteractionFeedback100,
      boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
        theme.colourInteractionFeedback50
      }`,
    },
  },
};

export default styles;
