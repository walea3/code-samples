import responsiveImage from './responsive-image';

const field = {
  name: 'featureBlock',
  label: 'Feature block',
  widget: 'object',
  fields: [
    {
      label: 'Heading',
      name: 'heading',
      widget: 'string',
    },
    { label: 'Body', name: 'body', widget: 'markdown' },
    responsiveImage,
  ],
};

export const getFeatureBlockField = (props) => ({
  ...field,
  ...props,
});

export default field;
