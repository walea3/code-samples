import React from 'react';
import { graphql } from 'gatsby';
import { Grid, HeadingCabernet, P } from '@nel-ui/react';

import PageLayout from '../components/layout/PageLayout';
import RichText from '../components/RichText';
import FeatureCard from '../components/FeatureCard';

export const GuidesPageTemplate = ({ title, lead, guides = [] }) => {
  return (
    <>
      <Grid>
        <Grid.Col span={{ sm: 12, md: 10, lg: 8 }}>
          <HeadingCabernet level={1}>{title}</HeadingCabernet>

          <RichText leadFirstParagraph content={lead} />
        </Grid.Col>
      </Grid>

      <Grid>
        {guides.map(({ guide }, i) => (
          <Grid.Col key={`guide-item-${i}`} span={{ sm: 12, md: 6, lg: 4 }}>
            {guide.fields ? (
              <FeatureCard
                title={guide.title}
                link={guide.fields.slug}
                image={{
                  src: guide.thumbnail,
                  alt: guide.title,
                }}
              >
                <P>{guide.description}</P>
              </FeatureCard>
            ) : (
              <FeatureCard title={guide} image={{ src: '/img/blank_thumbnail.png' }} />
            )}
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

const GuidesPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  const seo = {
    title: `${frontmatter.title} | NEL`,
    description: frontmatter.lead.replace(/^(.{100}[^\s]*).*/, '$1'),
  };

  return (
    <PageLayout {...{ seo }} path={location.pathname}>
      <GuidesPageTemplate {...frontmatter} />
    </PageLayout>
  );
};

export default GuidesPage;

export const pageQuery = graphql`
  query Guides($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        lead
        guides {
          guide {
            title
            description
            thumbnail
            fields {
              slug
            }
          }
        }
      }
    }
  }
`;
