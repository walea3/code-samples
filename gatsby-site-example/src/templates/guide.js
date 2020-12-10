import React from 'react';
import { H2 } from '@nel-ui/react';
import { _kebabCase } from '@nel-ui/js-helpers';
import { getGuide } from '../data';

import GuideDetailPage from '../components/GuideDetailPage/GuideDetailPage';
import PageLayout from '../components/layout/PageLayout';
import Divider from '../components/Divider';
import RichText from '../components/RichText';

import RulesList from './components/RulesList';
import RulesBlock from './components/RulesBlock';
import ParagraphImageGrid from './components/ParagraphImageGrid';
import ImagesWithCaption from './components/ImagesWithCaption';

const BLOCK_COMPONENTS = {
  richText: RichText,
  rulesList: RulesList,
  rulesBlock: RulesBlock,
  imagesWithCaption: ImagesWithCaption,
  paragraphImageGrid: ParagraphImageGrid,
};

const Blocks = ({ blocks }) =>
  blocks.map((block, index) =>
    !!BLOCK_COMPONENTS[block.type] ? (
      React.createElement(BLOCK_COMPONENTS[block.type], {
        key: index,
        ...block,
      })
    ) : (
      <div>Component not found for {block.type}</div>
    )
  );

export const GuideTemplate = ({
  url,
  title,
  mainParagraph,
  authors,
  publishDate,
  heroImage,
  sections,
}) => {
  const contributors = authors.map((author) => ({
    name: author.name,
    role: author.role,
    image: {
      src: author.avatar,
      alt: author.name,
    },
  }));

  const heroImages = heroImage
    ? {
        sm: {
          src: heroImage.sm,
        },
        lg: {
          src: heroImage.lg,
        },
      }
    : {};

  const titleData = sections.map((section) => ({
    id: _kebabCase(section.heading),
    heading: section.heading,
  }));

  return (
    <GuideDetailPage
      path={url}
      title={title}
      heroImages={heroImages}
      titleData={titleData}
      intro={<RichText leadFirstParagraph content={mainParagraph} />}
      contributors={contributors}
      publishedDate={
        publishDate
          ? new Date(publishDate).toLocaleDateString('en-GB', { dateStyle: 'long' })
          : null
      }
    >
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <Divider />
          <H2 id={titleData[index].id}>{section.heading}</H2>
          <Blocks blocks={section.blocks} />
        </React.Fragment>
      ))}
    </GuideDetailPage>
  );
};

const Guide = ({ pageContext, location }) => {
  const { slug } = pageContext;
  const guide = getGuide(slug);

  const seo = {
    title: `${guide.title} | NEL Guides`,
    description: guide.description,
  };

  return (
    <PageLayout seo={seo} path={location.pathname}>
      <GuideTemplate {...guide} />
    </PageLayout>
  );
};

export default Guide;
