import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Grid, PageHeading } from '@nel-ui/react';

import Breadcrumbs from '../components/Breadcrumbs';
import FeatureCard from '../components/FeatureCard';
import PageLayout from '../components/layout/PageLayout';
import SideBar from '../components/SideBar/SideBar';
import RichText from '../components/RichText';
import useDesignSystemMenu from '../hooks/useDesignSystemMenu';

export const DesignSystemCategoryTemplate = ({
  pageKey,
  slug,
  title,
  lead,
  description,
}) => {
  const { sections } = useDesignSystemMenu();
  const { pages = [] } = sections[pageKey];

  return (
    <>
      <Grid>
        <Grid.Col span={{ md: 10, lg: 8 }}>
          <PageHeading
            heading={title}
            control={slug && <Breadcrumbs path={slug} />}
            cabernet
          >
            <RichText content={lead} leadFirstParagraph />
            <RichText content={description} />
          </PageHeading>
        </Grid.Col>
      </Grid>

      <Grid>
        {pages.map(
          (
            {
              page: {
                fields: { slug },
                frontmatter: { title, thumbnail },
              },
            },
            i
          ) => (
            <Grid.Col key={`page-${i}`} span={{ md: 6, lg: 4 }}>
              <FeatureCard link={slug} title={title} image={{ src: thumbnail }} />
            </Grid.Col>
          )
        )}
      </Grid>
    </>
  );
};

DesignSystemCategoryTemplate.propTypes = {
  pageKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lead: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

const DesignSystemCategory = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { pathname } = location;

  const seo = {
    title: `${frontmatter.title} | NEL - Design System`,
    description: frontmatter.lead.replace(/^(.{100}[^\s]*).*/, '$1'),
  };

  return (
    <PageLayout seo={seo} left={<SideBar path={pathname} />} path={pathname}>
      <DesignSystemCategoryTemplate {...frontmatter} slug={pathname} />
    </PageLayout>
  );
};

DesignSystemCategory.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default DesignSystemCategory;

export const pageQuery = graphql`
  query DesignSystemCategory($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        pageKey
        title
        lead
        description
      }
    }
  }
`;
