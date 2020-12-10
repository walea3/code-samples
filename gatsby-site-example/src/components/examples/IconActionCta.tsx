import { SecondaryButton } from '@nel-ui/react';
import React from 'react';

const IconActionCtaExample = ({ icon, text }) => (
  <SecondaryButton icon={icon} iconLeft>
    {text}
  </SecondaryButton>
);

export default IconActionCtaExample;
