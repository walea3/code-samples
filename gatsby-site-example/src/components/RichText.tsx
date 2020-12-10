import React from 'react';
import ReactMarkdown from 'react-markdown';

import { H1, H2, H3, H4, Link, OL, P, Strong, UL } from '@nel-ui/react';
import ImageContainer from './ImageContainer';

// @TODO move to basic markdown pasing to use global element styles (inline with FW)

const HEADING_COMPONENTS = {
  1: H1,
  2: H2,
  3: H3,
  4: H4,
};

const RichTextHeading = ({ children, level }) =>
  React.createElement(HEADING_COMPONENTS[level], { children });

const PWithLead = ({ children }) => <P lead>{children}</P>;

const List = ({ children, ordered }) =>
  ordered ? <OL>{children}</OL> : <UL>{children}</UL>;

export interface RichTextProps extends React.AllHTMLAttributes<HTMLDivElement> {
  content: string;
  leadFirstParagraph?: boolean;
}

const RichText = ({ content, leadFirstParagraph }: RichTextProps) => (
  <ReactMarkdown
    source={content}
    escapeHtml={false}
    renderers={{
      paragraph: leadFirstParagraph ? PWithLead : P,
      heading: RichTextHeading,
      list: List,
      listItem: UL.Item,
      link: Link,
      image: ImageContainer,
      strong: Strong,
    }}
  />
);

export default RichText;
