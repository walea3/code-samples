import richText from './simple-rich-text';
import heading from './block-heading';
import cabernetHeading from './block-cabernet-heading';
import rulesImage from './block-rules-image';
import rulesList from './block-rules-list';
import examples from './block-examples';
import imagesCaption from './block-images-caption';
import imagesTitleDesc from './block-images-title-desc';
import coloursTable from './block-colours-table';
import icons from './block-icons';

const field = {
  name: 'contentSections',
  label: 'Content sections',
  widget: 'list',
  fields: [
    { name: 'heading', label: 'Heading', widget: 'string' },
    {
      name: 'contentBlocks',
      label: 'Block',
      widget: 'list',
      default: [],
      types: [
        heading,
        cabernetHeading,
        richText,
        rulesImage,
        rulesList,
        examples,
        imagesCaption,
        imagesTitleDesc,
        coloursTable,
        icons,
      ].map((block) => ({
        // Workaround to have Nested list when using list with variable types
        name: block.name,
        label: block.label,
        fields: [block],
      })),
    },
  ],
};

export const getFlexibleContentSectionField = (props) => ({
  ...field,
  ...props,
});

export default field;
