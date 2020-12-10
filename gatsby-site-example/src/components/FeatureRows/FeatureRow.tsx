import React, { ReactChild, ReactNode } from 'react';

import { theme, utils } from '@nel-ui/foundations';
import { Grid, H3, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

import { QuoteMessage, QuoteMessageProps } from '../';
import FeatureRowImage, { FeatureRowImageProps } from '../HomePage/FeatureRowImage';

import 'intersection-observer';
import { useInView } from 'react-intersection-observer';
import { AuthorProps } from '../';
import { FadeIn } from '../../animations';

const { em, mergeStyles, px, proximity, mq } = utils;

export interface FeatureRowProps extends StylingProps {
  heading: ReactChild;
  children: ReactNode;
  media: FeatureRowImageProps['images'];
  className?: string;
  imageLeft?: boolean;
  author?: AuthorProps;
  authorQuote?: QuoteMessageProps['message'];
  barColour?: QuoteMessageProps['barColour'];
}

const FeatureRow = ({
  className,
  classes,
  heading,
  children,
  author,
  authorQuote,
  imageLeft = false,
  barColour,
  media,
  ...props
}: FeatureRowProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isHeadingString: boolean = typeof heading === 'string';

  const getProps = (name: string, hasOffset: boolean) => ({
    key: `${[name]}`,
    className: cx(name, {
      [classes.pullLeft]: imageLeft,
    }),
    offset: hasOffset
      ? {
          w600: 1,
        }
      : undefined,
  });

  const quoteMessageProps = {
    ...author,
    message: authorQuote,
    barColour,
  };

  return (
    <FadeIn ref={ref} active={inView}>
      <Grid
        className={cx(
          classes.featureRow,
          {
            [classes.offsetItem]: !imageLeft,
          },
          className
        )}
        {...props}
      >
        <Grid.Col
          {...getProps(classes.featureRowImageContainer, !imageLeft)}
          span={{ sm: 12, w600: 5, lg: 7 }}
        >
          <FeatureRowImage active={inView} images={media} />
        </Grid.Col>

        <Grid.Col
          {...getProps(classes.featureRowContent, imageLeft)}
          span={{ w600: 6, lg: 4 }}
        >
          {isHeadingString ? <H3>{heading}</H3> : heading}

          {children}

          {author && (
            <QuoteMessage className={classes.featureQuote} {...quoteMessageProps} />
          )}
        </Grid.Col>
      </Grid>
    </FadeIn>
  );
};

const breakpointMax600: string = `@media (max-width: ${em(theme.breakpoint600 - 1)})`;

const styles: Styles = {
  featureRow: mergeStyles({
    isolate: 0,

    [breakpointMax600]: {
      paddingTop: px(80),
    },

    [mq.breakpoint600]: {
      minHeight: px(480),
      ...proximity(8, 'padding', 'vertical'),
    },

    [mq.breakpoint1020]: {
      minHeight: px(540),
    },

    '&$offsetItem': {
      isolate: 0,

      '& > $featureRowImageContainer': {
        isolate: 0,

        [mq.breakpoint600]: {
          isolate: 0,
          order: 2,
        },
      },
    },
  }),

  featureRowContent: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',

    [mq.breakpoint1020]: proximity(6, 'margin', 'vertical'),

    '& > :first-child': {
      isolate: 0,
      marginTop: 0,

      [breakpointMax600]: {
        isolate: 0,
        marginTop: px(theme.proximity4),
      },
    },
  },

  featureQuote: {},

  featureRowImageContainer: {
    display: 'flex',
    alignItems: 'center',

    '$offsetItem &': {
      isolate: 0,
      justifyContent: 'flex-end',
    },
  },

  featureRowImage: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },

  offsetItem: {},
};

export default withNEL(styles)(FeatureRow);
