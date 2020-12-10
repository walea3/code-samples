import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { _kebabCase } from '@nel-ui/js-helpers';
import { H4, Link, List, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';
import React, { useRef, useState } from 'react';

import { useSticky } from '../hooks/';
import { scrollToId } from '../utils';

const { px } = utils;

interface ContentsItemProps {
  heading: string;
}

type DivAttr = React.HtmlHTMLAttributes<HTMLDivElement>;

export interface ContentsProps extends DivAttr, StylingProps {
  list: ContentsItemProps[];
  title?: string;
  fixed?: boolean;
  hasBar?: boolean;
}

const Contents = ({
  className,
  classes,
  list,
  title = 'Contents',
  fixed = false,
  hasBar = false,
}) => {
  if (list.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef<HTMLDivElement>();
  const isSticky = useSticky(ref);

  return (
    <div
      ref={ref}
      className={cx(
        classes.contentsContainer,
        {
          [classes.contentsWrapperFixed]: fixed && isSticky,
        },
        className
      )}
    >
      <H4>{title}</H4>

      <List className={classes.contentList}>
        {list.map(({ heading }, index) => {
          const anchorId: string = `#${_kebabCase(heading)}`;

          return (
            <List.Item
              key={`contents-item_${anchorId}`}
              className={cx(classes.contentsItem, {
                [classes.contentsItemActive]: index === activeIndex,
              })}
            >
              <Link
                href={anchorId}
                onClick={(event) => (hasBar && setActiveIndex(index), scrollToId(event))}
              >
                {heading}
              </Link>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

const theme = {
  ...foundationTheme,
  defaultBorderColour: '#bfd2e3',
  borderBorderSize: 4,
  activeBorderColour: foundationTheme.colourInteractionFeedback100,
};

export const styles: Styles = {
  contentsContainer: {
    overflow: 'hidden',
  },

  contentsWrapperFixed: {
    position: 'fixed',
    top: 0,
  },

  contentList: {
    position: 'relative',

    '&:before': {
      isolate: 0,
      extend: 'contentBar',
      left: 0,
      zIndex: 1,
    },
  },

  contentsItem: {
    listStyle: 'none',
    paddingLeft: px(24),
    borderLeft: `${px(4)} solid transparent`,
    zIndex: 2,

    '&$contentsItemActive': {
      isolate: 0,
      borderColor: theme.activeBorderColour,

      '& > a': {
        isolate: 0,
        fontWeight: theme.fontWeightBold,
      },
    },
  },

  /**
   * States
   */
  contentsItemActive: {},

  /**
   * Interactions
   */
  contentBar: {
    position: 'absolute',
    content: '""',
    top: 0,
    bottom: 0,
    borderLeft: `${px(theme.borderBorderSize)} solid ${theme.defaultBorderColour}`,
    borderRadius: px(2),
  },
};

export default withNEL(styles)(Contents);
