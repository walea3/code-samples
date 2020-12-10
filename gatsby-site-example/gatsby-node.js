const path = require('path');
const dataFunctions = require('./src/data/_build').functions;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { createFilePath } = require('gatsby-source-filesystem');

const { iconModuleRule } = require('@nel-ui/tooling-typescript/webpack.config');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const createPagesFor = (pages, componentResolver) => {
    pages.forEach((page) => {
      const id = page.id;
      console.log('Adding dynamic page', page.fields.slug);
      createPage({
        path: page.fields.slug,
        component: path.resolve(componentResolver(page)),
        // additional data can be passed via context
        context: {
          id,
          title: page.frontmatter.title,
        },
      });
    });
  };

  const createPagesFromDataCollection = (data, component, context = {}) => {
    data.forEach((data) => {
      console.log('Creating page from data', data.url);
      createPage({
        path: data.url,
        component,
        context: { ...context, slug: data.slug, title: data.title },
      });
    });
  };

  const {
    data: { allMarkdownPages },
  } = await graphql(`
    {
      allMarkdownPages: allMarkdownRemark {
        pages: nodes {
          id
          fileAbsolutePath
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
          }
        }
      }
    }
  `);

  const pagesWithExplicitTemplate = allMarkdownPages.pages.filter(
    (node) => !!node.frontmatter.templateKey
  );

  createPagesFor(
    pagesWithExplicitTemplate,
    (page) => `src/templates/${page.frontmatter.templateKey}.js`
  );

  createPagesFromDataCollection(
    dataFunctions.getAllGuides().result,
    path.resolve('src/templates/guide.js')
  );
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark` || node.internal.type === `GuidesYaml`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  config.module.rules.unshift(iconModuleRule);
  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  actions.replaceWebpackConfig(config);
};

exports.onCreateDevServer = ({ app }) => {
  // add the file-system api as a middelware to use netlify cms locally:
  // https://github.com/ADARTA/netlify-cms-components/tree/master/packages/netlify-cms-backend-fs
  const fsMiddlewareAPI = require('netlify-cms-backend-fs/dist/fs');
  fsMiddlewareAPI(app);
};
