import { graphql } from 'gatsby';

export const contentSectionsQuery = graphql`
  fragment ContentSectionsFields on MarkdownRemarkFrontmatterContentSections {
    contentBlocks {
      richtext
      type
      coloursTableBlock {
        hex
        name
        usedFor
      }
      examplesBlock {
        center
        component
        data
        isLarge
      }
      headingBlock {
        level
        text
      }
      iconsBlock {
        button
        name
      }
      imagesCaptionBlock {
        borderless
        isLarge
        caption
        image
      }
      imagesTitleDescBlock {
        image
        description
        hasImageFirst
        heading
        isLarge
      }
      rulesImageBlock {
        image
        isLarge
        label
        rule
        ruleType
      }
    }
    heading
  }
`;
