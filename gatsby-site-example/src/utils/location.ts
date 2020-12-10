const locationGlobal = typeof location !== 'undefined' ? location : false;

const removeTrailingSlash = (url: string = ''): string =>
  url.endsWith('/') ? url.slice(0, -1) : url;

export const isCurrentPage = (
  url: string,
  isStrict: boolean = false,
  compareUrl = undefined
): boolean => {
  if (!url || (!compareUrl && !locationGlobal)) return false;

  const pathname =
    removeTrailingSlash(compareUrl) ||
    removeTrailingSlash(locationGlobal ? locationGlobal.pathname : undefined);
  const currentUrl = removeTrailingSlash(url);

  const isCurrentUrl: boolean = pathname === currentUrl;

  const isUrlMoreThan1: boolean = url.length > 1;
  const validPathName: boolean = isStrict
    ? isCurrentUrl
    : pathname.startsWith(currentUrl);

  const pathnameStartsWidthUrl: boolean = isUrlMoreThan1 && validPathName;

  return pathnameStartsWidthUrl || isCurrentUrl;
};
