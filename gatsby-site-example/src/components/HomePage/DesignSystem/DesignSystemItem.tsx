import React from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { H3, P, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

const { px, clearProximity, proximity } = utils;

interface SystemItemImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

export interface DesignSystemItemProps extends StylingProps {
  className?: string;
  heading: string;
  children: string;
  image: SystemItemImageProps;
}

const DesignSystemItem = ({
  className,
  classes,
  heading,
  children,
  image,
  ...props
}: DesignSystemItemProps) => {
  const altValue: string = image.alt ? image.alt : '';

  return (
    <div className={cx(classes.designSystem, className)} {...props}>
      <img className={classes.systemImage} {...image} alt={altValue} aria-hidden />

      <H3 className={classes.systemHeading}>{heading}</H3>

      <P className={classes.systemContent}>{children}</P>
    </div>
  );
};

const designSystemItemTheme = {
  systemImageSize: 60,
  systemImageBorderRadius: 20,
};

const theme = {
  ...foundationTheme,
  ...designSystemItemTheme,
};

const styles: Styles = {
  designSystem: proximity(8),

  systemImage: {
    isolate: 0,
    display: 'block',
    width: theme.systemImageSize,
    height: theme.systemImageSize,
    borderRadius: px(theme.systemImageBorderRadius),
  },

  systemHeading: proximity(4, 'margin', 'vertical'),

  systemContent: clearProximity(),
};

export default withNEL(styles)(DesignSystemItem);
