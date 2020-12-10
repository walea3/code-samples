// this file is imported with val-loader which means it is evaluated at build time
// in webpack rather than in the browser
// this means we can do filesystem calls, caching etc

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const yaml = require('js-yaml');

const { formatGuide } = require('./_formatters');

const loadYamlsIn = (urlBasePath, basePath, globPattern) => {
  const yamlPaths = glob.sync(globPattern, {
    cwd: basePath,
  });

  return yamlPaths.map((fileName) => {
    const slug = path.basename(fileName, path.extname(fileName));
    return {
      slug,
      url: `${urlBasePath}/${slug}/`,
      ...yaml.safeLoad(fs.readFileSync(path.join(basePath, fileName), 'utf8')),
    };
  });
};

const loadYamlAt = (urlBasePath, basePath, fileName) => {
  const _path = path.resolve(path.join(basePath, fileName));
  const slug = path.basename(fileName, path.extname(fileName));

  return {
    _path,
    slug,
    url: `${urlBasePath}/${slug}/`,
    ...yaml.safeLoad(fs.readFileSync(_path, 'utf8')),
  };
};

const authorsBasePath = path.join(__dirname, './authors');
const authors = loadYamlsIn('/authors', authorsBasePath, '*.yml');

const getters = {
  getAuthorByName: (name) => authors.find((author) => author.name === name),
  getImage: (src) => src,
};

const getPartialGuide = (guide) => ({
  slug: guide.slug,
  url: guide.url,
  title: guide.title,
  description: guide.description,
  listImage: guide.listImage,
  publishDate: guide.publishDate,
});

const functions = {
  getAllGuides() {
    const basePath = path.join(__dirname, '../pages/guides');

    const guides = loadYamlsIn('/guides', basePath, '*.yml')
      .map((guide) => formatGuide(getPartialGuide(guide), getters))
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

    return { result: guides, contextDependencies: [basePath] };
  },
  getGuideBySlug({ slug }) {
    const basePath = path.join(__dirname, '../pages/guides');

    const guide = formatGuide(loadYamlAt('/guides', basePath, `${slug}.yml`), getters);

    return { result: guide, dependencies: [guide._path] };
  },
  getFullGuides() {
    const basePath = path.join(__dirname, '../pages/guides');

    const guides = loadYamlsIn('/guides', basePath, '*.yml').map((guide) =>
      formatGuide(guide, getters)
    );

    const guidesBySlug = {};
    guides.forEach((guide) => (guidesBySlug[guide.slug] = guide));

    return { result: guidesBySlug, contextDependencies: [basePath] };
  },
};

module.exports = (loaderOptions) => {
  const { fn, ...args } = loaderOptions;

  if (!fn || !functions[fn]) {
    return { code: 'module.exports = null;' };
  }

  const { result, dependencies, contextDependencies } = functions[fn](args);

  return {
    code: `module.exports = ${JSON.stringify(result)};`,
    dependencies,
    contextDependencies: [...(contextDependencies || []), authorsBasePath],
  };
};

module.exports.functions = functions;
