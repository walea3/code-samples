import { utils } from '@nel-ui/foundations';
import { Icon, Small, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

import React from 'react';
import { Author, AuthorAvatarProps } from '../';

const { px, proximity, clearProximity, mergeStyles } = utils;

interface ContributorProps {
  name: string;
  role: string;
  image: AuthorAvatarProps;
}

export interface ContributorsProps extends StylingProps {
  contributors: ContributorProps[];
  publishedDate?: string;
  publishedDateText?: string;
  headingText?: string;
}

const Contributors = ({
  classes,
  contributors,
  publishedDate,
  publishedDateText = 'Published',
  headingText = 'Contributors',
}: ContributorsProps) => (
  <div className={classes.contributorContainer}>
    <Small>{headingText}</Small>

    {contributors.map((person) => (
      <Author key={person.name} {...person} />
    ))}

    <div className={classes.dateContainer}>
      <Icon name="static-clock" className={classes.clockIcon} />

      <Small className={classes.date}>
        {publishedDateText} {publishedDate}
      </Small>
    </div>
  </div>
);

const contributorsTheme = {
  contributorContainerMarginTop: 28,
  dateContainerProximity: 4,
  clockMarginRight: 8,
};

const theme = { ...contributorsTheme };

const styles: Styles = {
  contributorContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: px(theme.contributorContainerMarginTop),
  },

  dateContainer: mergeStyles(proximity(theme.dateContainerProximity), {
    display: 'flex',
  }),

  date: clearProximity(),

  clockIcon: {
    marginRight: px(theme.clockMarginRight),
  },
};

export default withNEL(styles)(Contributors);
