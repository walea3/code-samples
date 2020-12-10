import { theme as foundationTheme } from '@nel-ui/foundations';
import { Link, P, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import React from 'react';

import { getDelay } from '../../animations/animations.constants';
import ContentDivider from '../ContentDivider';
import SectionTitle, { SectionTitleProps } from '../SectionTitle';

import { FeatureRowProps } from '../FeatureRows/FeatureRow';
import FeatureRows from '../FeatureRows/FeatureRows';
import { useFeatureRows } from '../FeatureRows/UseFeatureRows.hook';

import 'intersection-observer';
import { useInView } from 'react-intersection-observer';
import { FadeIn } from '../../animations';
import { generateFeatureRowImages } from '../FeatureRows/GenerateFeatureRowImages';

interface FeatureRowItem extends FeatureRowProps {
  content: FeatureRowProps['children'];
}

interface FeatureHeader {
  heading: SectionTitleProps['heading'];
  content: SectionTitleProps['children'];
}

export interface NealMeaningProps extends StylingProps {
  sectionTitle: FeatureHeader;
  items: FeatureRowItem[];
}

// TODO: Move this to props
const items = [
  {
    heading: 'Create with confidence',
    content: (
      <P>
        NEL’s <Link href="/design-system/patterns/">patterns</Link> are tried and tested,
        and we know we can use them with confidence. We’ll spend more time crafting
        evidence-based user journeys and delivering real value – and avoid reinventing the
        wheel.
      </P>
    ),
    media: [
      {
        src: require('../../img/home-page/create-with-confidence_1.png'),
        style: {
          zIndex: 1,
          transitionDelay: getDelay(1),
          top: '16%',
          left: '9%',
          width: '55%',
        },
        breakpoints: {
          breakpoint600: {
            top: '-50%',
            width: '80%',
            left: '0',
          },
          breakpoint768: {
            width: '70%',
            left: '0%',
            top: '-20%',
          },
          breakpoint1020: {
            top: '0%',
            width: '60%',
            left: '8%',
          },
        },
      },
      {
        src: require('../../img/home-page/create-with-confidence_2.png'),
        style: {
          zIndex: 2,
          transitionDelay: getDelay(2),
          top: '0',
          left: '38%',
          width: '46%',
        },
        breakpoints: {
          breakpoint600: {
            width: '70%',
            left: '20%',
            top: '20%',
          },
          breakpoint768: {
            width: '60%',
            left: '30%',
          },
          breakpoint1020: {
            top: '18%',
            left: '50%',
            width: '50%',
          },
        },
      },
    ],
    barColour: foundationTheme.colourSecondaryPink100,

    authorQuote:
      'NEL empowers us to confidently explore our propositions, products and services at pace.',
    author: {
      image: {
        src: require('../../img/home-page/MH_Avatar.jpg'),
        alt: 'mh profile image',
      },
      name: 'MH',
      role: 'Head of',
    },
  },
  {
    heading: 'Nurture innovation',
    content: (
      <P>
        NEL gives us the space to think beyond the brief, to look to the future. It means
        we can iterate, learn, push boundaries and share our findings. We will become
        thought leaders in our field – something that looks good for us as individuals,
        and as a society.
      </P>
    ),
    media: [
      {
        src: require('../../img/home-page/nurture-innovation_1.png'),
        style: {
          zIndex: 1,
          transitionDelay: getDelay(1),
          width: '65%',
          left: '20%',
          top: '20%',
        },
        breakpoints: {
          breakpoint600: {
            top: '50%',
            width: '90%',
            left: '15%',
          },
          breakpoint768: {
            width: ' 80%',
            top: ' -30%',
          },
          breakpoint1020: {
            width: ' 60%',
            left: ' 30%',
            top: ' 7%',
          },
        },
      },
      {
        src: require('../../img/home-page/nurture-innovation_2.png'),
        style: {
          zIndex: 2,
          transitionDelay: getDelay(2),
          width: '60%',
          top: '0',
          left: '10%',
        },
        breakpoints: {
          breakpoint600: {
            top: '-40%',
            width: '90%',
            left: '0',
          },
          breakpoint768: {
            left: '0%',
            width: '90%',
            top: '20%',
          },
          breakpoint1020: {
            width: '58%',
            top: '25%',
          },
        },
      },
    ],
    barColour: foundationTheme.colourInteractionFeedback100,
    authorQuote: 'We can experiment safely, step up scalability and become truly agile.',
    author: {
      image: {
        src: require('../../img/home-page/RJ_Avatar.jpg'),
        alt: 'rj profile image',
      },
      name: 'RJ',
      role: 'Digital Technology & Engineering',
    },
  },

  {
    heading: 'Share our collective learnings',
    content: (
      <P>
        We will make it easy for our society to collaborate and learn from each other.
        Everyone can contribute to the patterns and guides in NEL. Together, we’ll
        establish best practices and build an industry-leading experience language,
        supported by evidence.
      </P>
    ),
    media: [
      {
        src: require('../../img/home-page/share-learnings_1.jpg'),
        style: {
          zIndex: 1,
          transitionDelay: getDelay(1),
          top: ' 0',
          left: ' 10%',
          width: ' 60%',
        },
        breakpoints: {
          breakpoint600: {
            top: '-42%',
            left: '-14%',
            width: '84%',
          },
          breakpoint768: {
            width: '74%',
            top: '-22%',
            left: '0',
          },
          breakpoint1020: {
            top: '30%',
            width: '55%',
            left: '10%',
          },
        },
      },
      {
        src: require('../../img/home-page/share-learnings_2.png'),
        style: {
          zIndex: 2,
          transitionDelay: getDelay(2),
          width: '60%',
          left: '24%',
          top: '22%',
        },
        breakpoints: {
          breakpoint600: {
            top: '44%',
            left: '10%',
            width: '82%',
          },
          breakpoint768: {
            left: 'auto',
            right: ' 0',
            width: ' 70%',
            top: ' 30%',
          },
          breakpoint1020: {
            top: '0%',
            left: 'auto',
            right: '0',
            width: '65%',
          },
        },
      },
    ],
    barColour: foundationTheme.colourSecondaryPurple100,
    authorQuote:
      'User research and insight will be baked into every decision we make. We really will be putting members first.',
    author: {
      image: {
        src: require('../../img/home-page/HC_Avatar.jpg'),
        alt: 'HC profile image',
      },
      name: 'HC',
      role: 'Senior Research Manager',
    },
  },
  {
    heading: 'Ensure brand distinctiveness',
    content: (
      <P>
        Our brand is what makes us different. It inspires trust and confidence with our
        members, and gives us a competitive edge in the market. We will build our brand
        resonance using NEL, by creating experiences that are distinctly Noop.
      </P>
    ),
    media: [
      {
        src: require('../../img/home-page/brand-distinctiveness_1.png'),
        style: {
          zIndex: 1,
          transitionDelay: getDelay(1),
          top: '10%',
          width: '64%',
          left: '24%',
        },
        breakpoints: {
          breakpoint600: {
            top: '40%',
            left: '16%',
            width: '88%',
          },
          breakpoint768: {
            top: '-40%',
            left: '16%',
          },
          breakpoint1020: {
            top: '0%',
            width: '60%',
            left: '29%',
          },
        },
      },
      {
        src: require('../../img/home-page/brand-distinctiveness_2.png'),
        style: {
          zIndex: 2,
          transitionDelay: getDelay(2),
          left: '10%',
          width: '48%',
          top: '0',
        },
        breakpoints: {
          breakpoint600: {
            top: '-60%',
            width: '90%',
            left: '0',
          },
          breakpoint768: {
            top: '20%',
            width: '70%',
          },
          breakpoint1020: {
            top: '30%',
            width: '50%',
          },
        },
      },
    ],
    barColour: foundationTheme.colourSecondaryOrange100,
    authorQuote:
      'We want every digital experience to reflect the distinctiveness and value of our brand for our members. NEL helps us do that, consistently.',
    author: {
      image: {
        src: require('../../img/home-page/sj-avatar.jpeg'),
        alt: 'SJ profile image',
      },
      name: 'SJ',
      role: 'Senior Manager, Content Design',
    },
  },
];

const uniqueName: string = 'whatIsNelImage';

const { images: featureImages, styles: featureStyles } = useFeatureRows(
  uniqueName,
  items
);

const NealMeaning = ({ classes, sectionTitle }: NealMeaningProps) => {
  if (items && !items.length) return null;

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const generatedItems = generateFeatureRowImages(featureImages, uniqueName, classes);

  return (
    <>
      <FadeIn ref={titleRef} active={titleInView} className={classes.whatIsNel}>
        <ContentDivider />

        <SectionTitle {...sectionTitle}>{sectionTitle.content}</SectionTitle>
      </FadeIn>

      <FeatureRows items={generatedItems} />
    </>
  );
};

const styles: Styles = {
  whatIsNel: {},

  ...featureStyles,
};

export default withNEL(styles)(NealMeaning);
