import { utils } from '@nel-ui/foundations';
import { H3, P, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';

import EmptyImage from '../img/empty-content/empty-state.png';

const { px, mergeStyles, proximity } = utils;

const emptyImageObj = {
  src: EmptyImage,
  alt: 'Sorry no content found...',
};

const defaultCopy = {
  title: 'Coming soon',
  content:
    'We’re constantly updating the design system with new and updated patterns. For more information on our roadmap, please get in touch.',
};

interface EmptyContentProps extends StylingProps {
  title?: string;
  content?: string;
}

const EmptyContent = ({
  title = defaultCopy.title,
  content = defaultCopy.content,
  classes,
}: EmptyContentProps) => (
  <article className={classes.emptyContent}>
    <img {...emptyImageObj} className={classes.emptyImage} />

    <div className={classes.emptyMessage}>
      <H3>{title}</H3>
      <P>{content}</P>
    </div>
  </article>
);

const EmptyContentTheme = {
  imageSize: 260,
  emptyContentMaxWidth: 750,
};

const theme = {
  ...EmptyContentTheme,
};

const styles: Styles = {
  emptyContent: mergeStyles(proximity(8), {
    isolate: 0,
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: theme.emptyContentMaxWidth,
  }),

  emptyImage: {
    isolate: 0,
    width: px(theme.imageSize),
    height: px(theme.imageSize),
    borderRadius: '50%',
  },
  emptyMessage: {
    isolate: 0,

    '& > *': {
      isolate: 0,
      textAlign: 'center',
    },
  },
};

export default withNEL(styles)(EmptyContent);
