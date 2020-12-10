import React from 'react';

import { HomePageTemplate } from '../../templates/home-page';
import { DesignSystemDetailTemplate } from '../../templates/design-system';
import { DesignSystemCategoryTemplate } from '../../templates/design-system-category';
import { DesignSystemOverviewTemplate } from '../../templates/design-system-overview';
import { GuideTemplate } from '../../templates/guide';
import { GuidesPageTemplate } from '../../templates/guides-page';

const PREVIEW_COMPONENTS = {
  home: HomePageTemplate,
  guide: GuideTemplate,
  guides: GuidesPageTemplate,
  'design-system-overview': DesignSystemOverviewTemplate,
  'design-system-category': DesignSystemCategoryTemplate,
  'design-system': DesignSystemDetailTemplate,
};

export default () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    function receiveMessage(event) {
      if (process.env.NODE_ENV !== 'production')
        console.log('Received data in preview', event.data.data);

      if (event.data.type === 'PREVIEW_DATA') setData(event.data);
    }

    window.addEventListener('message', receiveMessage, false);

    console.log('Waiting for data in preview iframe');

    if (window.parent && window.parent.parent)
      window.parent.parent.postMessage(
        { type: 'PREVIEW_INITIAL_LOAD' },
        process.env.GATSBY_SITE_URL
      );
  }, []);

  if (!data) return <div>Waiting for preview</div>;

  return (
    <>
      <style>
        {`html, body {
          margin: 0;
        }`}
      </style>
      {React.createElement(PREVIEW_COMPONENTS[data.previewKey], data.data)}
    </>
  );
};
