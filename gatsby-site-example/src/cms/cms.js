import CMS from 'netlify-cms-app';

import { sitePath } from './util';
import collections from './collections';

import { formatGuide } from '../data/_formatters';

import createGenericPreview from './createGenericPreview';

const getGuidePreviewData = ({ entry, fieldsMetaData, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  const getAuthorByName = (name) => {
    const author = fieldsMetaData.getIn(['authors', 'author', name]);
    if (!author) return null;
    return author.toJS();
  };

  const getImage = (src) => {
    const asset = getAsset(src);

    if (!asset) return null;
    return asset.toString();
  };

  return formatGuide(data, { getAuthorByName, getImage });
};

const designSystemCategoryPreview = createGenericPreview('design-system-category');
const designSystemPreview = createGenericPreview('design-system');

CMS.registerPreviewTemplate('home', createGenericPreview('home'));

CMS.registerPreviewTemplate('guide', createGenericPreview('guide', getGuidePreviewData));
CMS.registerPreviewTemplate('guides', createGenericPreview('guides'));

CMS.registerPreviewTemplate(
  'design-system-overview',
  createGenericPreview('design-system-overview')
);

CMS.registerPreviewTemplate('brand-styles-overview', designSystemCategoryPreview);
CMS.registerPreviewTemplate('brand-styles', designSystemPreview);

CMS.registerPreviewTemplate('foundations-overview', designSystemCategoryPreview);
CMS.registerPreviewTemplate('foundations', designSystemPreview);

CMS.registerPreviewTemplate('patterns-overview', designSystemCategoryPreview);
CMS.registerPreviewTemplate('patterns', designSystemPreview);

CMS.registerPreviewTemplate('templates-overview', designSystemCategoryPreview);
CMS.registerPreviewTemplate('templates', designSystemPreview);

const config = {
  backend: {
    squash_merges: true,
    commit_messages: {
      create: 'docs(nel-site): Create {{collection}} "{{slug}}"',
      update: 'docs(nel-site): Update {{collection}} "{{slug}}"',
      delete: 'docs(nel-site): Delete {{collection}} "{{slug}}"',
      uploadMedia: 'docs(nel-site): Upload "{{path}}"',
      deleteMedia: 'docs(nel-site): Delete "{{path}}"',
    },
  },

  load_config_file: false,
  media_folder: sitePath('static/img'),
  public_folder: '/img',

  site_url: process.env.GATSBY_SITE_URL,

  collections,
};

if (process.env.NODE_ENV === 'development') {
  config.backend = {
    name: 'file-system',
    api_root: '/api',
    ...config.backend,
  };

  config.site_url = 'http://localhost:5371';

  CMS.registerBackend('file-system', require('netlify-cms-backend-fs'));
} else {
  config.backend = {
    name: 'bitbucket',
    repo: 'noop/nel-ui',
    branch: process.env.GATSBY_GIT_BRANCH || 'content-editor',
    auth_type: process.env.GATSBY_CMS_AUTH_TYPE,
    app_id: process.env.GATSBY_CMS_AUTH_APP_ID,
    ...config.backend,
  };
}

CMS.init({ config });
