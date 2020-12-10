import React from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { Grid, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import ContentDivider from '../../ContentDivider';
import SectionTitle, { SectionTitleProps } from '../../SectionTitle';
import DesignSystemItemUi, { DesignSystemItemProps } from './DesignSystemItem';

import 'intersection-observer';
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../../../animations';

const { mergeStyles, em, px } = utils;

type IDesignSystemItem = Pick<
  DesignSystemItemProps,
  Exclude<keyof DesignSystemItemProps, 'children'>
> & {
  content: DesignSystemItemProps['children'];
};

interface FeatureHeader {
  heading: SectionTitleProps['heading'];
  content: SectionTitleProps['children'];
}

interface DesignSystemDetail extends StylingProps {
  title: string;
  content: string;
  sectionTitle: FeatureHeader;
  items: IDesignSystemItem[];
}

const DesignSystemDetail = ({ classes, sectionTitle, items }: DesignSystemDetail) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px',
  });

  return (
    <>
      <FadeIn ref={titleRef} active={titleInView} className={classes.nelForNbs}>
        <ContentDivider />

        <SectionTitle {...sectionTitle}>{sectionTitle.content}</SectionTitle>
      </FadeIn>

      <Grid className={classes.systemItems}>
        {items.map(({ content: blockContent, ...item }, i) => (
          <Grid.Col key={i} span={{ sm: 12, md: 6, lg: 4 }}>
            <DesignSystemItemUi {...item}>{blockContent}</DesignSystemItemUi>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

const breakpointMax600: string = `@media (max-width: ${em(
  foundationTheme.breakpoint600 - 1
)})`;

const styles: Styles = {
  nelForNbs: {
    [breakpointMax600]: {
      marginTop: px(42),
    },
  },
  systemItems: mergeStyles({
    display: 'flex',
    flexWrap: 'wrap',
  }),
};

export default withNEL(styles)(DesignSystemDetail);
