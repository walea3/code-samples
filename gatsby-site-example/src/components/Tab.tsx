import React from 'react';

export interface TabProps {
  title: string;
  children: React.ReactChild[] | React.ReactChild;
}

export const Tab = ({ children }) => children;

export default Tab;
