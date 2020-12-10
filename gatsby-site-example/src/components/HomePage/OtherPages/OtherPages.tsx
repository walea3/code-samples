import { Grid, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';

import Divider from '../../Divider';
import PageItem, { PageItemProps } from './PageItem';

import 'intersection-observer';
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../../../animations';

interface OtherPagesProps extends StylingProps {
  items: PageItemProps[];
}

const OtherPages = ({ classes, items }: OtherPagesProps) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <>
      <FadeIn ref={titleRef} active={titleInView} className={classes.whatIsNel}>
        <Divider />

        <Grid className={classes.otherPages}>
          {items.map((page, key) => (
            <Grid.Col {...{ key }} span={{ sm: 12, md: 6 }}>
              <PageItem {...page} />
            </Grid.Col>
          ))}
        </Grid>
      </FadeIn>
    </>
  );
};

const styles: Styles = {
  otherPages: {
    isolate: 0,
    display: 'flex',
    flexGrow: 1,
  },
};

export default withNEL(styles)(OtherPages);
