import { colourProfiles, utils } from '@nel-ui/foundations';
import { getZIndex, H2, Link, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';

const { getVisuallyHiddenStyle, mergeStyles, spacing } = utils;

type divAttr = React.HTMLAttributes<HTMLDivElement>;

export interface SkipContentProps extends StylingProps, divAttr {
  defaultContentId: string;
  items?: Array<{
    id: string;
    text: string;
    href: string;
  }>;
  heading?: string;
}

const hideElement = getVisuallyHiddenStyle();
const showElement = {
  clip: 'auto',
  width: 'auto',
  position: 'initial !important',
  opacity: 1,
};

const palette = colourProfiles.useColourProfile('brand01');

const styles: Styles = {
  skipContent: {
    position: 'relative',
  },

  skipContentTitle: {
    extend: hideElement,
  },

  skipList: {
    margin: 0,
    overflow: 'hidden',

    '& li': {
      isolate: 0,
      display: 'flex',
    },
  },

  skipItem: {
    extend: hideElement,

    '&:focus': mergeStyles(spacing(), {
      isolate: 0,
      extend: showElement,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: getZIndex(9),
      textAlign: 'center',
      background: palette.defaultBackgroundColor,
      color: palette.defaultColor,
      flex: '0 0 auto',
      height: 'auto',
      outlineColor: palette.focusOutlineColour,

      '& > span': {
        isolate: 0,
        color: palette.hoverColor,
      },
    }),
  },
};

export const SkipContent = withNEL(styles)(
  ({
    classes,
    items = [],
    heading = 'Accessibility links',
    defaultContentId,
    ...props
  }: SkipContentProps) => {
    const defaultItem = {
      id: 'defaultSkipItem',
      text: 'Skip to content',
      href: `#${defaultContentId}`,
    };

    return (
      <div className={classes.skipContent} {...props}>
        <H2 className={classes.skipContentTitle}>{heading}</H2>

        <ul className={classes.skipList}>
          {[defaultItem, ...items].map(({ id, text, ...item }) => (
            <li key={id}>
              <Link {...item} className={classes.skipItem}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

SkipContent.displayName = 'SkipContent';
