import React from 'react';
import FeatureRow, { FeatureRowProps } from './FeatureRow';

interface FeatureRowItem extends FeatureRowProps {
  content: FeatureRowProps['children'];
}

interface FeatureRowsProps {
  items: FeatureRowItem[];
}

const FeatureRows = ({ items }: FeatureRowsProps) => {
  if (items && !items.length) return null;

  return (
    <>
      {items.map(({ content, ...item }, i) => (
        <FeatureRow key={i} imageLeft={!!(i % 2)} {...item}>
          {content}
        </FeatureRow>
      ))}
    </>
  );
};

FeatureRows.Item = FeatureRow;

export default FeatureRows;
