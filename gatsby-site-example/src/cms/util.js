export const sitePath = (path) =>
  process.env.NODE_ENV === 'development' ? path : `4.site-docs/nel-site/${path}`;
