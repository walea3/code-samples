import { _kebabCase } from '@nel-ui/js-helpers';
import { H2 } from '@nel-ui/react';
import React from 'react';

import Divider from './Divider';
import { renderContentBlocks } from './renderers';

export const ContentSections = ({ sections }) => (
  <>
    {sections.map(({ heading, contentBlocks }) => {
      const id = _kebabCase(heading);

      return (
        <React.Fragment key={id}>
          <Divider id={id} />

          <H2>{heading}</H2>
          {renderContentBlocks(contentBlocks)}
        </React.Fragment>
      );
    })}
  </>
);

export default ContentSections;
