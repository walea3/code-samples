import { P, Small, Strong } from '@nel-ui/react';
import React from 'react';

const BodyExample = () => (
  <div>
    <P lead>
      This is a lead paragraph and this is <Strong>emphasis</Strong>
    </P>
    <P>
      This is a paragraph and this is <Strong>emphasis</Strong>
    </P>
    <Small>
      This is a caption paragraph and this is <Strong>emphasis</Strong>
    </Small>
  </div>
);

export default BodyExample;
