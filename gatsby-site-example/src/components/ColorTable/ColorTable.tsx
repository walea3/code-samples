import * as React from 'react';

import DetailTable from '../DetailTable';
import ColourDrop, { ColourDropProps } from './ColourDrop';
import ColourList, { ColourListProps } from './ColourList';

export interface ColourTableProps {
  rows: Array<{
    color: ColourDropProps;
    detail?: ColourListProps['list'];
  }>;
}

const ColourTable = ({ rows }: ColourTableProps) => {
  const tableRows = rows.map(({ color, detail: list }) => ({
    color: <ColourDrop {...color} />,
    detail: !!list && <ColourList {...{ list }} />,
  }));

  return <DetailTable tableHeadings={['Colour', 'Used for']} rows={tableRows} />;
};

export default ColourTable;
