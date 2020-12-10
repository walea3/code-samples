import React, { createRef } from 'react';

import { Dropdown } from '@nel-ui/react';
import { Example } from 'nel-doc-utils';

import { getOptions } from './fixtures';

export const DropdownContainer = ({
  id,
  title,
  height = 300,
  width = 'auto',
  ...props
}) => {
  const containerRef = createRef<HTMLDivElement>();
  return (
    <Example {...{ title }}>
      <div
        {...props}
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          height,
          width,
          padding: 20,
          maxWidth: '100%',
          border: '1px dotted',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          ...props.style,
        }}
        ref={containerRef}
      >
        <Dropdown
          {...{ id, containerRef }}
          data-ref={title}
          options={getOptions(3, id)}
          placeholder="Select"
          onChange={() => null}
          style={{ marginTop: 0 }}
        />
      </div>
    </Example>
  );
};
