import React from 'react';
import { NELProvider } from '@nel-ui/react';
import { SheetsRegistry } from 'react-jss';
import { createGenerateClassName } from './jss';

/**
 * Keep track of SheetRegistry for each page
 */
const sheetsRegistryManager = new Map();

// eslint-disable-next-line react/prop-types,react/display-name
export const wrapRootElement = ({ element, pathname }, { theme = {} }) => {
  const generateClassName = createGenerateClassName();
  const registry = new SheetsRegistry();
  sheetsRegistryManager.set(pathname, registry);

  return <NELProvider {...{ registry, theme, generateClassName }}>{element}</NELProvider>;
};

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  const sheets = sheetsRegistryManager.get(pathname);
  if (sheets) {
    setHeadComponents([
      <style
        type="text/css"
        id="server-side-jss"
        key="server-side-jss"
        dangerouslySetInnerHTML={{ __html: sheets.toString() }}
      />,
    ]);
    sheetsRegistryManager.delete(pathname);
  }
};
