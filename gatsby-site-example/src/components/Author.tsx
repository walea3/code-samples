import { utils } from '@nel-ui/foundations';
import { Small, Strong, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import cx from 'classnames';
import React from 'react';

const { mergeStyles, proximity, px } = utils;

export interface AuthorAvatarProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const authorTheme = {
  authorAvatarSize: 48,
  authorAvatarBorderRadiusPercent: 50,
  authorDetailsMarginTop: 0,
  authorDetailsMarginLeft: 12,
};

const theme = {
  ...authorTheme,
};

const styles = {
  author: mergeStyles(proximity(3), {
    isolate: 0,
    display: 'flex',
  }),

  avatar: {
    flexShrink: 0,
    width: px(theme.authorAvatarSize),
    height: px(theme.authorAvatarSize),
    borderRadius: `${theme.authorAvatarBorderRadiusPercent}%`,
    overflow: 'hidden',
  },

  authorDetails: {
    display: 'flex',
    margin: `${px(theme.authorDetailsMarginTop)} ${px(theme.authorDetailsMarginLeft)}`,
    flexFlow: 'column wrap',
  },

  role: {
    marginTop: 0,
  },
};

export interface AuthorProps extends StylingProps {
  className?: string;
  image: AuthorAvatarProps;
  name: string;
  role: string;
}

export const Author = withNEL(styles)(
  ({ className, classes, image, name, role, ...props }: AuthorProps) => {
    const altValue: string = image.alt ? image.alt : '';

    return (
      <div className={cx(classes.author, className)} {...props}>
        <img className={classes.avatar} {...image} alt={altValue} aria-hidden />

        <div className={classes.authorDetails}>
          <Strong>{name}</Strong>
          <Small className={classes.role}>{role}</Small>
        </div>
      </div>
    );
  }
);
