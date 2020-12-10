import React from 'react';

import { utils } from '@nel-ui/foundations';
import { H4, withNEL } from '@nel-ui/react';
import { StylingProps } from '@nel-ui/tooling-react';
import { Styles } from '@nel-ui/tooling-styling';
import cx from 'classnames';

const { spacer, px } = utils;

interface DetailTableProps extends StylingProps {
  className?: string;
  tableHeadings: string[];
  rows: any[];
}

const DetailTable = ({ className, tableHeadings, rows, classes }: DetailTableProps) => {
  if (rows.length === 0) return null;

  return (
    <table className={cx(classes.table, className)}>
      <thead className={classes.tableHeader}>
        <tr>
          {tableHeadings.map((heading, key) => (
            <th {...{ key }} className={classes.tableHeaderTh} scope="col">
              <H4>{heading}</H4>
            </th>
          ))}
        </tr>
      </thead>

      <tbody className={classes.tableBody}>
        {rows.map((item, rowIndex) => (
          <tr key={`row-${rowIndex}`} className={classes.tableRow}>
            {Object.values(item).map((row, objectIndex) => (
              <td key={`row-${objectIndex}`}>{row}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles: Styles = {
  table: {
    width: '100%',
  },

  tableHeader: {},

  tableHeaderTh: {
    padding: `${px(spacer(4))} 0`,
    textAlign: 'left',
  },

  tableBody: {},

  tableRow: {
    isolate: 0,

    '& td': {
      padding: `${px(spacer(5))} 0 ${px(spacer(6))}`,
      borderTop: '1px solid #D8D8D8',
      verticalAlign: 'top',

      // @note - list has a proximity on first element
      '&:last-child': {
        isolate: 0,
        paddingTop: px(spacer(1)),
      },
    },
  },
};

export default withNEL(styles)(DetailTable);
