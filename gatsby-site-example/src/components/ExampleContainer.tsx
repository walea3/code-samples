import { theme, utils } from '@nel-ui/foundations';
import { Card, Grid, H4, Small, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import { ReactComponent as ExampleIcon } from '../img/20-interactive.icon.svg';

import cx from 'classnames';
import React from 'react';

const { px, proximity, mergeStyles } = utils;

export interface ExampleContainerProps extends StylingProps {
  interactive: boolean;
  isLarge: boolean;
  center: boolean;
  heading: React.ReactText;
  description: React.ReactNode;
  children: React.ReactChild[] | React.ReactChild;
}

const Example = ({
  classes,
  heading,
  description,
  children,
  isLarge,
  center,
  interactive,
<<<<<<< Updated upstream
}: ExampleContainerProps) => (
  <Grid.Column span={{ w600: isLarge ? 12 : 6 }}>
    {heading && <H4>{heading}</H4>}
=======
}: ExampleProps) => (
  <Grid.Column className={classes.exampleContainer} span={{ w480: isLarge ? 12 : 6 }}>
    {heading && <H3>{heading}</H3>}
>>>>>>> Stashed changes
    {interactive ? (
      <>
        <Card className={classes.exampleCard}>
          <Card.Header className={classes.interactiveHeader}>
            <ExampleIcon className={classes.interactiveIcon} fill="#fff" />
            <Small className={classes.interactiveLabel} inline>
              Interactive
            </Small>
          </Card.Header>
          <Card.Body
            className={cx(classes.exampleContent, { [classes.centerExample]: center })}
          >
            {children}
          </Card.Body>
        </Card>
        {description}
      </>
    ) : (
      children
    )}
  </Grid.Column>
);

export const styles: Styles = {
<<<<<<< Updated upstream
  exampleCard: mergeStyles(proximity(5), {
=======
  exampleContainer: { display: 'flex', flexFlow: 'column' },
  exampleCard: mergeStyles(proximity(6), {
    flex: '1 0 auto',
>>>>>>> Stashed changes
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  }),
  interactiveHeader: {
    display: 'inline-flex',
    alignSelf: 'flex-start',
    borderBottomRightRadius: px(4),
    borderTopRightRadius: 0,
    bac