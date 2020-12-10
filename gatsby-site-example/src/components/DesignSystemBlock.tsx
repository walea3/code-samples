import { Grid, H2, withNEL } from '@nel-ui/react';
import cx from 'classnames';
import React from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const { proximity, mergeStyles, mq, px } = utils;

interface ImageProps {
  src: string;
  alt: string;
}

export interface DesignSystemBlockProps extends StylingProps {
  title: string;
  content: string;
  image: ImageProps;
  imageSeparator?: boolean;
  invert?: boolean;
}

const DesignSystemBlock = ({
  title,
  content,
  image,
  classes,
  invert = false,
}: DesignSystemBlockProps) => (
  <Grid className={classes.systemBlock}>
    <Grid.Col
      className={cx(classes.imageWrapper, {
        [classes.invertImage]: invert,
      })}
      span={{ sm: 12, w600: 5, lg: 7 }}
      offset={!invert && { w600: 1 }}
    >
      <PreviewCompatibleImage
        className={classes.systemImage}
        imageInfo={{ image: image.src || image, alt: image.alt }}
      />
    </Grid.Col>

    <Grid.Col span={{ w600: 6, lg: 4 }} offset={invert && { w600: 1 }}>
      <H2>{title}</H2>

      {content}
    </Grid.Col>
  </Grid>
);

const designSystemBlockTheme = {
  blockProximity: 6,
  imageZIndex: 1,
  lineWidth: 1,
  lineHeight: 120,
};

const theme = {
  ...foundationTheme,
  ...designSystemBlockTheme,
};

const styles: Styles = {
  systemBlock: mergeStyles(proximity(8), {
    minHeight: px(350),
    alignItems: 'center',

    [mq.breakpoint1020]: {
      minHeight: px(540),
    },
  }),

  imageWrapper: {
    position: 'relative',
    [mq.breakpoint600]: {
      order: 2,
    },
  },

  invertImage: {
    [mq.breakpoint600]: {
      order: -1,
    },
  },

  systemImage: mergeStyles(proximity(theme.blockProximity), {
    display: 'block',
    position: 'relative',
    zIndex: theme.imageZIndex,
    maxWidth: '100%',
    height: 'auto',
  }),
};

export default withNEL(styles)(DesignSystemBlock);
