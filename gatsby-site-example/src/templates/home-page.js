import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { theme as foundationTheme } from '@nel-ui/foundations';
import { List, Link, P, Strong } from '@nel-ui/react';

import PageLayout from '../components/layout/PageLayout';
import {
  DesignSystemDetail,
  HomeQuote,
  HomeWelcome,
  NelMeaning,
  OtherPages,
  WhatIsNel,
} from '../components/HomePage';

const staticData = {
  welcome: {
    blueQuote: 'Welcome to ',
    redQuote: 'NEL',
    content: (
      <P lead>
        Noop’s Experience Language (NEL) is our shared{' '}
        <Strong>design and communication framework</Strong>. It is our foundation for
        creating legendary digital member and colleague experiences that are distinctly
        Noop.
      </P>
    ),
    image: {
      sm: {
        src: require('../img/home-page/home_welcome_hero_small.jpg'),
        alt: 'Homepage Hero, small version',
      },
      md: {
        src: require('../img/home-page/home_welcome_hero_medium.jpg'),
        alt: 'Homepage Hero, medium version',
      },
      lg: {
        src: require('../img/home-page/home_welcome_hero_large.jpg'),
        alt: 'Homepage Hero, large version',
      },
    },
  },
  whatIsNel: {
    heading: 'What is NEL?',
    content: (
      <>
        <P>
          NEL is a growing set of reusable patterns, templates and guides. Together, they
          make up the touchpoints and journeys of our digital estate. These established
          patterns can be used again and again, which will save time, money and improve
          consistency.
        </P>
        <P>
          It’s for everyone to contribute to – and to learn from. By working
          collaboratively, we’ll develop an experience language that’s driven by user
          needs and refined through testing.
        </P>
        <List data-ref="links">
          <List.Item>
            <Link href="/design-system">View the design system</Link>
          </List.Item>
          <List.Item>
            <Link href="/guides">Read our guides</Link>
          </List.Item>
        </List>
      </>
    ),
    // downloadLink: {
    //   link: {
    //     href: '',
    //     alt: '',
    //     content: 'What is NEL presentation',
    //   },
    //   subText: '(PDF, 720KB)',
    // },
  },
  quote: {
    barColour: foundationTheme.colourBrand01,
    message:
      'NEL puts us in a truly exciting place, where we’ll be able to focus all our efforts on answering the needs of our members and colleagues.',
    author: {
      image: {
        src: require('../img/home-page/nel-ch.jpg'),
      },
      name: 'CH',
      role: 'Design Manager',
    },
  },
  ourMeaning: {
    sectionTitle: {
      heading: 'What NEL means for you',
      content:
        'NEL will improve the way we collaborate across disciplines, and work as individuals on a daily basis. With NEL, we can:',
    },
  },
  designSystem: {
    sectionTitle: {
      heading: 'What NEL means for Noop',
      content:
        'NEL is our collective experience language. It’s something we create, digest and improve collaboratively. It brings our society together, to build a better way of working, and a better experience for our members.',
    },
    items: [
      {
        heading: 'Quality',
        content:
          'NEL has been developed from tried and tested layout foundations and patterns. Everything is based on real user insight, with a focus on the member need. ',
        image: {
          src: require('../img/home-page/home_design-system_quality.svg'),
        },
      },
      {
        heading: 'Efficiency',
        content:
          'NEL gives us the freedom to move at pace. Our tried and tested scalable system will improve operational efficiencies, giving other teams the tools to build quickly, and with confidence.',
        image: {
          src: require('../img/home-page/home_design-system_efficiency.svg'),
        },
      },
      {
        heading: 'Consistency',
        content:
          'We need to look and sound the same, across every touchpoint with our members. NEL will make it easy for us to maintain consistency, ensuring we preserve our precious brand legacy.',
        image: {
          src: require('../img/home-page/home_design-system_consistency.svg'),
        },
      },
      {
        heading: 'Agility',
        content:
          'NEL’s modular infrastructure and distributed working model empowers us to respond quickly to business and market changes.',
        image: {
          src: require('../img/home-page/home_design-system_agility.svg'),
        },
      },
      {
        heading: 'Collaboration',
        content:
          'NEL will bring our society together. It will help us break down silos across the business, empowering everyone to connect and contribute to our shared language.',
        image: {
          src: require('../img/home-page/home_design-system_collaboration.svg'),
        },
      },
      {
        heading: 'Distinctiveness',
        content:
          'We want to make our digital channels feel as human as our in-branch interactions. NEL will bring a tangible presence to our online platforms, making us instantly recognisable and distinct to our members.',
        image: {
          src: require('../img/home-page/home_design-system_distinctiveness.svg'),
        },
      },
    ],
  },
  otherPages: {
    items: [
      {
        title: 'Explore the NEL site',
        content: (
          <>
            <P>
              Here you can learn about our design system, view existing patterns and stay
              up-to-date with the latest developments and research.
            </P>
          </>
        ),
        actionLinks: [
          {
            href: '/design-system',
            content: 'View the design system',
          },
          {
            href: '/guides',
            content: 'Read our guides',
          },
        ],
      },
      {
        title: 'Get involved',
        content: (
          <P>
            NEL is for everyone, made by everyone, and we want your contributions. If you
            have any suggestions, comments or research you’d like to share, we’d love to
            hear from you. You can get in touch with the NEL team by emailing{' '}
            <Link href="mailto:nel@noopdigital.co.uk">
              nel@noopdigital.co.uk
            </Link>
            .
          </P>
        ),
      },
    ],
  },
};

export const HomePageTemplate = ({
  welcome,
  whatIsNel,
  quote,
  ourMeaning,
  designSystem,
  otherPages,
} = staticData) => (
  <>
    <HomeWelcome {...welcome} />

    <WhatIsNel {...whatIsNel} />

    <HomeQuote {...quote} />

    <NelMeaning {...ourMeaning} />

    <DesignSystemDetail {...designSystem} />

    <OtherPages {...otherPages} />
  </>
);

HomePageTemplate.propTypes = {
  welcomeSection: PropTypes.shape({
    heading: PropTypes.array,
    body: PropTypes.string,
    video: PropTypes.shape({
      image: PropTypes.string,
    }),
  }),
};

const HomePage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  const seo = {
    title: 'Noop Experience Language',
    description: 'Welcome to NEL',
  };

  return (
    <PageLayout seo={seo} path={location.pathname}>
      <HomePageTemplate hero={frontmatter.hero} {...staticData} />
    </PageLayout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
        hero {
          heading {
            isRed
            text
          }
          body
        }
      }
    }
  }
`;
