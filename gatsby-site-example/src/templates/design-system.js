import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { Grid, PageHeading } from '@nel-ui/react';

import Breadcrumbs from '../components/Breadcrumbs';
import PageLayout from '../components/layout/PageLayout';
import SideBar from '../components/SideBar/SideBar';
import Tab from '../components/Tab';
import Contents from '../components/Contents';
import EmptyContent from '../components/EmptyContent';
import TabContainer from '../components/TabContainer';
import Note from '../components/Note';
import RichText from '../components/RichText';
import ContentSections from '../components/ContentSections';

import '../cms/queries/contentSections';

export const DesignSystemDetailTemplate = ({
  slug,
  title,
  lead,
  inDevelopment,
  contentSections,
  web,
  ios,
  android,
  colleague,
}) => {
  const withPlatforms = !!(web || ios || android || colleague);
  const platforms = [web, ios, android, colleague];

  return (
    <Grid>
      <Grid.Column span={{ lg: 10, w1260: 8 }} offset={{ lg: 1, w1260: 2 }}>
        <PageHeading
          heading={title}
          control={slug && <Breadcrumbs path={slug} />}
          cabernet
        >
          <RichText content={lead} leadFirstParagraph />
        </PageHeading>

        {inDevelopment && <Note heading="Note: " text="This pattern is in development" />}

        {withPlatforms ? (
          <TabContainer>
            {platforms.map(({ title, contentSections = [] }, i) => (
              <Tab title={title} key={i}>
                {contentSections.length ? (
                  <>
                    <Contents list={contentSections} />
                    <ContentSections sections={contentSections} />
                  </>
                ) : (
                  <EmptyContent />
                )}
              </Tab>
            ))}
          </TabContainer>
        ) : (
          <>
            <Contents list={contentSections} />
            <ContentSections sections={contentSections} />
          </>
        )}
      </Grid.Column>
    </Grid>
  );
};

DesignSystemDetailTemplate.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lead: PropTypes.node.isRequired,
  inDevelopment: PropTypes.bool,
  web: PropTypes.object,
  ios: PropTypes.object,
  android: PropTypes.object,
  colleague: PropTypes.object,
  contentSections: PropTypes.any,
};

const DesignSystemDetail = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { pathname } = location;

  const seo = {
    title: `${frontmatter.title} | NEL - Design System`,
    description: frontmatter.lead.replace(/^(.{100}[^\s]*).*/, '$1'),
  };

  return (
    <PageLayout seo={seo} left={<SideBar path={pathname} />} path={pathname}>
      <DesignSystemDetailTemplate {...frontmatter} slug={pathname} />
    </PageLayout>
  );
};

DesignSystemDetail.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default DesignSystemDetail;

export const pageQuery = graphql`
  query DesignSystemDetail($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        templateKey
        inDevelopment
        lead
        contentSections {
          ...ContentSectionsFields
        }
        web {
          contentSections {
            contentBlocks {
              richtext
              type
              examplesBlock {
                center
                component
                data
                description
                heading
                isLarge
              }
              headingBlock {
                level
                text
              }
              imagesCaptionBlock {
                borderless
                caption
                image
                isLarge
              }
              imagesTitleDescBlock {
                image
                heading
                isLarge
              }
              rulesImageBlock {
                image
                isLarge
                rule
                ruleType
              }
              rulesListBlock {
                ruleType
                label
                items
                isLarge
              }
            }
            heading
          }
          title
        }
        ios {
          title
        }
        android {
          title
        }
        colleague {
          title
        }
      }
    }
  }
`;
