import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Grid, HeadingCabernet, Link, P } from '@nel-ui/react';

import PageLayout from '../components/layout/PageLayout';
import SideBar from '../components/SideBar/SideBar';
import RichText from '../components/RichText';
import DesignSystemBlock from '../components/DesignSystemBlock';
import useDesignSystemMenu from '../hooks/useDesignSystemMenu';

export const DesignSystemOverviewTemplate = ({ title, lead, description }) => {
  const { menus: pages } = useDesignSystemMenu();
  return (
    <>
      <Grid>
        <Grid.Col>
          <HeadingCabernet level={1}>{title}</HeadingCabernet>
        </Grid.Col>

        <Grid.Col span={{ md: 10, lg: 8 }}>
          <RichText content={lead} leadFirstParagraph />
          <RichText content={description} />
        </Grid.Col>

        {pages.map(
          (
            {
              overviewPage: {
                fields: { slug },
                frontmatter: { title, category },
              },
            },
            i
          ) => (
            <Grid.Col key={`page-${i}`}>
              <DesignSystemBlock
                title={title}
                content={
                  <>
                    <RichText content={category.description} />
                    <P />
                    <Link href={slug}>{category.linkTitle}</Link>
                  </>
                }
                image={category.image}
                invert={!!(i % 2)}
              />
            </Grid.Col>
          )
        )}
      </Grid>
    </>
  );
};

DesignSystemOverviewTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const DesignSystemOverview = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;
  const { pathname } = location;

  const seo = {
    title: `${frontmatter.title} | NEL - Design System`,
    description: frontmatter.lead.replace(/^(.{100}[^\s]*).*/, '$1'),
  };

  return (
    <PageLayout seo={seo} left={<SideBar path={pathname} />} path={pathname}>
      <DesignSystemOverviewTemplate {...frontmatter} />
    </PageLayout>
  );
};

DesignSystemOverview.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default DesignSystemOverview;

export const pageQuery = graphql`
  query DesignSystemOverview($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        lead
        description
      }
    }
  }
`;
