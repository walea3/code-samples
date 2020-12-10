import React, { ImgHTMLAttributes } from 'react';

import { utils } from '@nel-ui/foundations';
import { Small, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const { px, proximity, mergeStyles } = utils;

export interface ImageContainerProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    StylingProps {
  caption?: React.ReactText;
  basic?: boolean;
  image: string | object;
}

const ImageContainer = ({
  classes,
  basic,
  caption,
  image,
  ...props
}: ImageContainerProps) => (
  <span className={classes.imageContainer}>
    <PreviewCompatibleImage
      className={cx(classes.image, { [classes.containedImage]: !basic })}
      imageInfo={{ image: image || props.src, alt: props.alt }}
    />
    {caption && <Small>{caption}</Small>}
  </span>
);

const styles: Styles = {
  imageContainer: mergeStyles(proximity(6), {
    display: 'block',
  }),
  image: {
    width: '100%',
    verticalAlign: 'top',
  },
  containedImage: {
    border: '1px solid #d8d8d8',
    borderRadius: px(4),
  },
};

export default withNEL(styles)(ImageContainer);
