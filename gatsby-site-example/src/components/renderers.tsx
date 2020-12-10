import { _kebabCase } from '@nel-ui/js-helpers';
import { Grid, H2, Heading, List, P, Strong } from '@nel-ui/react';
import React from 'react';

import ColourTable from './ColorTable/ColorTable';
import ColourDrop from './ColorTable/ColourDrop';
import DetailTable from './DetailTable';
import Divider from './Divider';
import ExampleContainer, { ExampleContainerProps } from './ExampleContainer';
import IconSet from './IconSet';
import ImageContainer, { ImageContainerProps } from './ImageContainer';
import ImagesContainer, { ImagesContainerProps } from './ImagesContainer';
import Note from './Note';
import RichText from './RichText';
import Rule, { RulesBlockProps } from './Rule';
import RulesList from './RulesList';

import AccordionExample from './examples/Accordion';
import ActionCtaExample from './examples/ActionCta';
import BackCtaExample from './examples/BackCta';
import BodyExample from './examples/Body';
import CheckboxExample from './examples/Checkbox';
import ColumnOffsetExample from './examples/ColumnOffset';
import DobExample from './examples/DOB';
import DropdownExample from './examples/Dropdown';
import FluidGridExample from './examples/FluidGrid';
import HeadingsExample from './examples/Headings';
import IconActionCtaExample from './examples/IconActionCta';
import IconListExample from './examples/IconList';
import InlineLinkExample from './examples/InlineLink';
import InputExample from './examples/Input';
import LaunchCtaExample from './examples/LaunchCta';
import LinkListExample from './examples/LinkList';
import NestedGridExample from './examples/NestedGrid';
import OrderedListExample from './examples/OrderedList';
import PrimaryCtaExample from './examples/PrimaryCta';
import RadioExample from './examples/Radio';
import ResponsiveGridExample from './examples/ResponsiveGrid';
import TextAreaExample from './examples/TextArea';
import TextCtaExample from './examples/TextCta';
import TooltipExample from './examples/Tooltip';
import UnorderedListExample from './examples/UnorderedList';

interface RendererType {
  type: string;
}

export const blockTypeRenderers = {
  headingBlock: ({ headingBlock: { level, text } }, key) => (
    <Heading key={key} level={level}>
      {text}
    </Heading>
  ),

  richtext: ({ richtext, lead }, key) => (
    <RichText key={key} content={richtext} leadFirstParagraph={lead} />
  ),

  rulesImageBlock: ({ rulesImageBlock = [] } = {}, key) => (
    <Grid key={key}>
      {(rulesImageBlock || []).map(({ ruleType, rule, ...props }, i) => (
        <Rule
          key={i}
          type={ruleType}
          description={<RichText content={rule} />}
          {...props}
        />
      ))}
    </Grid>
  ),

  rulesListBlock: ({ rulesListBlock = [] } = {}, key) => (
    <Grid key={key}>
      {(rulesListBlock || []).map(({ ruleType, items, ...props }, i) => (
        <RulesList
          key={key}
          type={ruleType}
          items={items.map((item, idx) => (
            <RichText key={idx} content={item} />
          ))}
          large={props.isFullWidth}
          {...props}
        />
      ))}
    </Grid>
  ),

  imagesTitleDescBlock: ({ imagesTitleDescBlock = [] } = {}, key) => (
    <ImagesContainer key={key} blocks={imagesTitleDescBlock || []} />
  ),

  imagesCaptionBlock: ({ imagesCaptionBlock = [] } = {}, key) => (
    <Grid key={key}>
      {(imagesCaptionBlock || []).map(({ borderless, isLarge, ...props }, i) => (
        <Grid.Column key={`image-block-${i}`} span={{ w600: isLarge ? 12 : 6 }}>
          <ImageContainer basic={borderless} {...props} />
        </Grid.Column>
      ))}
    </Grid>
  ),

  iconsBlock: ({ iconsBlock }, key) => <IconSet key={key} iconSet={iconsBlock} />,

  coloursTableBlock: ({ coloursTableBlock = [] } = {}, key) => (
    <DetailTable
      key={key}
      tableHeadings={['Colour', 'Used for']}
      rows={(coloursTableBlock || []).map(({ name, hex, usedFor }) => ({
        color: <ColourDrop title={name} value={hex} />,
        detail: !!usedFor && <RichText content={usedFor} />,
      }))}
    />
  ),

  examplesBlock: ({ examplesBlock = [] } = {}, key) => (
    <Grid key={key}>
      {examplesBlock.map(({ component, data, description, ...props }, i) => {
        let exampleData;

        if (data) {
          try {
            exampleData = JSON.parse(data);
          } catch {
            exampleData = data;
          }

          if (typeof exampleData === 'string') {
            exampleData = { text: exampleData };
          }
        }

        return (
          <ExampleContainer
            key={i}
            {...props}
            description={description && <RichText content={description} />}
            interactive
          >
            {(exampleRenderers[component] || (() => null))(exampleData)}
          </ExampleContainer>
        );
      })}
    </Grid>
  ),

  /**
   * @TODO - remove all below after cms migration
   */
  heading: ({ level, data }, key) => (
    <Heading {...{ key }} {...{ level }}>
      {data}
    </Heading>
  ),

  note: ({ data }, key) => <Note {...{ key }} heading={data.heading} text={data.text} />,

  paragraph: ({ data }, key) => <P {...{ key }}>{data}</P>,

  list: ({ type, data, ...props }, key) => (
    <List {...{ key }} {...props}>
      {data.map((item, i) => (
        <List.Item key={i}>{item}</List.Item>
      ))}
    </List>
  ),

  image: ({ type, ...props }: ImageContainerProps & RendererType, key) => (
    <ImageContainer {...{ key }} {...props} />
  ),

  images: ({ type, ...props }: ImagesContainerProps & RendererType, key) => (
    <ImagesContainer {...{ key }} {...props} />
  ),

  icons: ({ type, ...props }, key) => <IconSet {...{ key, ...props }} />,

  example: (
    {
      type,
      component,
      data,
      ...props
    }: ExampleContainerProps & RendererType & { component: any; data: any },
    key
  ) => (
    <ExampleContainer {...{ key }} {...props}>
      {(exampleRenderers[component] || (() => null))(data)}
    </ExampleContainer>
  ),

  rule: (
    {
      type,
      rule,
      ...props
    }: RulesBlockProps & { type: string; rule: RulesBlockProps['type'] },
    key
  ) => <Rule {...{ key }} type={rule} {...props} />,

  ruleslist: ({ type, iconType, title, ...props }, key) => (
    <RulesList
      {...{ key }}
      label={title}
      type={iconType}
      items={props.items}
      isLarge={props.isFullWidth}
      {...props}
    />
  ),

  grid: ({ blocks }, key) => <Grid {...{ key }}>{renderContentBlocks(blocks)}</Grid>,

  contentSection: ({ heading, blocks }, key) => {
    const id: string = _kebabCase(heading);

    return (
      <React.Fragment {...{ key }}>
        <Divider {...{ id }} />

        <H2>{heading}</H2>
        {renderContentBlocks(blocks)}
      </React.Fragment>
    );
  },

  colourTable: (props, key) => <ColourTable {...{ key }} {...props} />,

  detailList: ({ data }, key) => (
    <List variant="ol" {...{ key }}>
      {data.map((item, i) => (
        <List.Item key={i}>
          <Strong>{item.title}</Strong>
          <P style={{ margin: 0 }}>{item.data}</P>
        </List.Item>
      ))}
    </List>
  ),
};

export const exampleRenderers = {
  dropdown: (props) => <DropdownExample {...props} />,
  checkbox: (props) => <CheckboxExample {...props} />,
  orderedList: () => <OrderedListExample />,
  unorderedList: () => <UnorderedListExample />,
  linkList: () => <LinkListExample />,
  inlineLink: () => <InlineLinkExample />,
  input: (props) => <InputExample {...props} />,
  radio: (props) => <RadioExample {...props} />,
  image: (props) => <ImageContainer {...props} />,
  headings: () => <HeadingsExample />,
  body: () => <BodyExample />,
  primarycta: (props) => <PrimaryCtaExample {...props} />,
  textcta: (props) => <TextCtaExample {...props} />,
  launchcta: (props) => <LaunchCtaExample {...props} />,
  backcta: (props) => <BackCtaExample {...props} />,
  actioncta: (props) => <ActionCtaExample {...props} />,
  iconactioncta: (props) => <IconActionCtaExample {...props} />,
  fluidgrid: () => <FluidGridExample />,
  responsivegrid: () => <ResponsiveGridExample />,
  columnoffset: () => <ColumnOffsetExample />,
  nestedgrid: () => <NestedGridExample />,
  tooltip: () => <TooltipExample />,
  textarea: (props) => <TextAreaExample {...props} />,
  dob: () => <DobExample />,
  iconList: (props) => <IconListExample {...props} />,
  accordion: () => <AccordionExample />,
};

export const renderContentBlocks = (blocks: any[]) =>
  !!blocks &&
  blocks.map((block, i) => (blockTypeRenderers[block.type] || (() => null))(block, i));
