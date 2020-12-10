import marked from 'marked';
import React from 'react';

export interface MarkdownProps {
  content: string;
  children?(props: React.AllHTMLAttributes<HTMLElement>): JSX.Element;
}

export const Markdown = ({ content, children }: MarkdownProps) => {
  const dangerouslySetInnerHTML = { __html: marked(content) };
  // @TODO replace div with simple rich text
  return (
    <div dangerouslySetInnerHTML={!children ? dangerouslySetInnerHTML : undefined}>
      {children && children({ dangerouslySetInnerHTML })}
    </div>
  );
};

export default Markdown;
