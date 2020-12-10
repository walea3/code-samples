import React from 'react';

import { theme as foundationTheme, utils } from '@nel-ui/foundations';
import { withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';

// import DownloadFile, { DownloadFileProps } from '../DownloadFile';
import FeatureRows from '../FeatureRows/FeatureRows';

import { getDelay } from '../../animations/animations.constants';

import { FeatureRowProps } from '../FeatureRows/FeatureRow';
import { useFeatureAnimatedStyles } from './FeatureRowImage';

const { px, em } = utils;

interface ImageAttr extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

interface WhatIsNelProps extends StylingProps {
  heading: FeatureRowProps['heading'];
  content: FeatureRowProps['children'];
  // downloadLink: any;
}

// TODO: Move this to props
const images = [
  {
    src: require('../../img/home-page/what-is-NEL_1.png'),
    style: {
      zIndex: 1,
      transitionDelay: getDelay(1),
      width: '57%',
      left: '7%',
      top: '12%',
    },
    breakpoints: {
      breakpoint600: {
        top: '40%',
        left: '-8%',
        width: '80%',
      },
      breakpoint1020: {
        width: '65%',
        left: '20%',
        top: '10%',
      },
    },
  },
  {
    src: require('../../img/home-page/what-is-NEL_2.png'),
    style: {
      zIndex: 3,
      transitionDelay: getDelay(3),
      top: '0%',
      left: '31%',
      width: '60%',
    },
    breakpoints: {
      breakpoint600: {
        top: '-10%',
        left: 'auto',
        right: '0',
        width: '80%',
      },
      breakpoint1020: {
        width: '65%',
        top: '10%',
      },
    },
  },
];

const { images: animatedImages, styles: featureRowImages } = useFeatureAnimatedStyles(
  images
);

const WhatIsNel = ({
  classes,
  heading,
  content,
}: // downloadLink
WhatIsNelProps) => {
  const generateImages = animatedImages.map((image) => ({
    ...image,
    className: classes.whatIsNelImage,
  }));

  return (
    <FeatureRows.Item
      className={classes.whatIsNel}
      heading={heading}
      media={generateImages}
    >
      {content}

      {/* <DownloadFile {...downloadLink} /> */}
    </FeatureRows.Item>
  );
};

const breakpointMax600: string = `@media (max-width: ${em(
  foundationTheme.breakpoint600 - 1
)})`;

const theme = {
  ...foundationTheme,
};

const styles: Styles = {
  whatIsNel: {
    [breakpointMax600]: {
      paddingTop: px(theme.proximity9),
    },
  },

  whatIsNelImage: featureRowImages,
};

export default withNEL(styles)(WhatIsNel);
