import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { theme as iconTheme } from '@nel-ui/icon-styles';
import { Styles } from '@nel-ui/tooling-styling';
import * as formTheme from './tokens.tmp';

const { mq, px, rgba, proximity, spacer, mergeStyles } = utils;
const theme = { ...foundationTheme, ...iconTheme, ...formTheme };

const optionDividerOffset: number = 4;

const getTextFade = (color: string) =>
  `linear-gradient(to right, ${rgba(color, 0)} 0%, ${color} 40%)`;

const getTextSpacing = (verticalOffset: number = 0) => ({
  padding: `${px(spacer(theme.dropdownTextVerticalSpacing) + verticalOffset)} ${px(
    spacer(theme.dropdownTextHorizontalSpacing)
  )}`,
  paddingRight: theme.dropdownTextFadeWidth,
});

const notSelected = ':not($selectedDropdownOption)';
const interactiveOptionSelectors = `&:focus${notSelected}, &:active${notSelected}, &:hover${notSelected}`;
const interactiveDropdownSelectors = `&[aria-expanded="true"], &:focus, &:active, &:hover`;

const styles: Styles = {
  /**
   * Elements
   */
  dropdownContainer: mergeStyles(proximity(theme.dropdownProximity), {
    position: 'relative',
    height: px(theme.dropdownHeight),
    maxWidth: '100%',

    '$field &': {
      isolate: 0,
      alignSelf: 'flex-start',
    },

    [mq.screenLg]: {
      maxWidth: px(theme.dropdownMaxWidth),
    },
  }),

  dropdown: mergeStyles(getTextSpacing(-1), {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flex: '1 0 auto',
    height: '100%',
    width: '100%',

    borderRadius: theme.formControlBorderRadius,
    border: `${px(1)} solid ${theme.formControlBorderColour}`,

    color: theme.colourTextBody,
    background: theme.colourUi00,
    transition: 'box-shadow, background-color, border',
    transitionDuration: theme.transitionDuration,

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    cursor: 'pointer',

    '&:before': {
      isolate: 0,
      content: "''",
      background: getTextFade(theme.colourUi00),
      width: theme.dropdownTextFadeWidth,
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: px(theme.formControlBorderRadius),
      zIndex: theme.dropdownFadeZIndex,
    },

    '&:after': {
      isolate: 0,
      content: "''",
      position: 'absolute',
      left: 0,
      top: '100%',
      width: '100%',
      height: px(1),
      marginTop: px(-optionDividerOffset),
    },

    [interactiveDropdownSelectors]: {
      isolate: 0,
      cursor: 'pointer',
      boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
        theme.colourInteractionFeedback50
      }`,
      borderColor: theme.colourInteractionFeedback100,
      outline: 'none',
    },
  }),

  dropdownIcon: {
    pointerEvents: 'none',
    position: 'absolute',
    top: '50%',
    right: px(spacer(theme.dropdownTextHorizontalSpacing)),
    transform: 'translateY(-50%)',
    zIndex: theme.dropdownZIndexIcon,
  },

  dropdownOptions: {
    position: 'relative',
    zIndex: theme.dropdownOptionsZIndex,
    maxHeight: 0,
    minWidth: '100%',

    opacity: 0,
    pointerEvents: 'none',

    border: `${px(1)} solid ${theme.colourInteractionFeedback100}`,
    outline: 'none',
    background: theme.colourUi00,
    borderRadius: px(theme.formControlBorderRadius),

    overflowY: 'scroll',
  },

  dropdownOption: mergeStyles(getTextSpacing(), {
    pointerEvents: 'none',

    [interactiveOptionSelectors]: {
      isolate: 0,
      outline: 'none',
      background: theme.colourInteractionFeedback10,
      cursor: 'default',
    },
  }),

  /**
   * States
   */
  openDropdown: {
    '&:after': {
      isolate: 0,
      background: theme.colourUi20,
      zIndex: theme.dropdownDividerZIndex,
    },

    '& + $dropdownOptions': {
      isolate: 0,
      maxHeight: px(theme.dropdownMaxHeight),
      pointerEvents: 'all',
      opacity: 1,

      '& $dropdownOption': {
        isolate: 0,
        pointerEvents: 'all',
      },
    },

    '&:not($openDropdownAbove) + $dropdownOptions': {
      isolate: 0,

      marginTop: px(-optionDividerOffset),
      borderTop: 'none',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
  },

  openDropdownAbove: {
    '&:after': {
      isolate: 0,
      top: 0,
      marginTop: px(optionDividerOffset - 1),
    },

    '& + $dropdownOptions': {
      isolate: 0,

      marginTop: px(optionDividerOffset),
      borderBottom: 'none',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },

  warningDropdown: {
    borderColor: theme.colourInteractionWarning100,
    backgroundColor: theme.colourInteractionWarning10,

    [interactiveDropdownSelectors]: {
      isolate: 0,
      boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
        theme.colourInteractionWarning50
      }`,
      borderColor: theme.colourInteractionWarning100,
    },

    '&:before': {
      isolate: 0,
      background: getTextFade(theme.colourInteractionWarning10),
    },

    '& + $dropdownOptions': {
      isolate: 0,
      borderColor: theme.colourInteractionWarning100,
      background: theme.colourInteractionWarning10,

      '& $dropdownOption': {
        isolate: 0,

        [interactiveOptionSelectors]: {
          isolate: 0,
          background: theme.colourInteractionWarning50,
        },

        '&$activeDropdownOption': {
          isolate: 0,
          background: theme.colourInteractionWarning50,
        },

        '&$selectedDropdownOption': {
          isolate: 0,
          background: theme.colourInteractionWarning100,
        },
      },
    },
  },

  errorDropdown: {
    borderColor: theme.colourInteractionError100,
    backgroundColor: theme.colourInteractionError10,

    [interactiveDropdownSelectors]: {
      isolate: 0,
      boxShadow: `0 0 0 ${px(theme.formControlInteractionBorderSize)} ${
        theme.colourInteractionError50
      }`,
      borderColor: theme.colourInteractionError100,
    },

    '&:before': {
      isolate: 0,
      background: getTextFade(theme.colourInteractionError10),
    },

    '& + $dropdownOptions': {
      isolate: 0,
      borderColor: theme.colourInteractionError100,
      background: theme.colourInteractionError10,

      '& $dropdownOption': {
        isolate: 0,

        [interactiveOptionSelectors]: {
          isolate: 0,
          background: theme.colourInteractionError50,
        },

        '&$activeDropdownOption': {
          isolate: 0,
          background: theme.colourInteractionError50,
        },

        '&$selectedDropdownOption': {
          isolate: 0,
          background: theme.colourInteractionError100,
        },
      },
    },
  },

  disabledDropdown: {
    background: theme.colourUi05,
    cursor: 'not-allowed',
    pointerEvents: 'none',
    userSelect: 'none',

    '&:before': {
      isolate: 0,
      background: getTextFade(theme.colourUi05),
    },

    '& > $dropdownIcon': {
      isolate: 0,
      fill: theme.formControlBorderColour,
    },
  },

  activeDropdownOption: {
    background: theme.colourInteractionFeedback10,
  },

  selectedDropdownOption: {
    background: theme.colourInteractionFeedback100,
    color: theme.colourUi00,
  },
};

export default styles;
