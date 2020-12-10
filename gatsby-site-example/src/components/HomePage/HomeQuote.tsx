import React from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Grid, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import { QuoteMessage, QuoteMessageProps } from '../';

import 'intersection-observer';
import { useInView } from 'react-intersection-observer';
import { AuthorProps } from '../';
import { FadeIn } from '../../animations';

const { px, mq, mergeStyles } = utils;

const homeQuoteTheme = {
  quoteProximitySm: foundationTheme.proximity9,
  quoteProximityMd: 80,
};

const theme = {
  ...foundationTheme,
  ...homeQuoteTheme,
};

const styles: Styles = {
  nelQuoteContainer: mergeStyles({
    marginTop: px(theme.quoteProximitySm),
    marginBottom: px(theme.quoteProximitySm),

    [mq.breakpoint768]: {
      marginTop: px(theme.quoteProximityMd),
      marginBottom: px(theme.quoteProximityMd),
    },
  }),
};

interface HomeQuoteProps extends QuoteMessageProps, StylingProps {
  role: string;
  author: AuthorProps;
}

export const HomeQuote = withNEL(styles)(
  ({ classes, message, author, barColour }: HomeQuoteProps) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
      <FadeIn ref={ref} active={inView}>
        <Grid className={classes.nelQuoteContainer}>
          <Grid.Col offset={{ sm: 0, w480: 1, md: 2 }} span={{ sm: 12, w480: 10, md: 8 }}>
            <QuoteMessage
              barColour={barColour}
              message={message}
              variant="large"
              {...author}
            />
          </Grid.Col>
        </Grid>
      </FadeIn>
    );
  }
);
