---
templateKey: design-system
title: Spacing
lead: >-
  Spacing is the invisible area around the components on the page. Consistent spacing improves the quality of the UI, creating a visual harmony of patterns and typography.

inDevelopment: false
thumbnail: /img/layout-foundation_spacing.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            We use 3 types of spacing units; vertical spacers, horizontal spacers and space trackers.
            
            
            ![](/img/pattern_spacers_types.png)
            
            
            1. **Vertical spacer**<br>
               A vertical spacer dictates the proximity between objects. They're used to ensure a harmonious vertical rhythm on the page. Like [typography](/design-system/brand-styles/typography/), vertical spacers are responsive across different viewports.
            2. **Horizontal spacer**<br>
               Horizontal spacers are used for padding to the sides of objects.
            3. **Space tracker**<br>
               A space tracker is the horizontal and vertical inner padding of a container (such as a card). The size of a space tracker varies depending on the responsive gutter size.
            
            ### 4px baseline grid
            
            
            ![](/img/pattern_spacers_baseline.png)
            
            
            The baseline grid is an invisible framework that underpins the page. As with all spacing units, it's measured in increments of 4px.
            
            
            When positioning the text, ensure the line height (the edges of the text box) aligns to the baseline grid and not the text baseline.

          type: richtext
      heading: Types of spacers
    - contentBlocks:
        - richtext: >-
            A vertical spacer is a margin-top that's applied to an element, to help with the vertical rhythm. It's responsive across different viewports, and aligns with the responsive typography.
            
            
            Larger vertical spacers should be used for bigger objects, as well as objects that are not related to each other.

          type: richtext
        - imagesCaptionBlock:
            - borderless: true
              image: /img/pattern_spacers_vertical-spacer_table.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: |-
            ### Vertical spacers on large and small screens

            ![](/img/pattern_spacers_vertical-spacer_lge-sm-screens.png)

            Large screens are 768px and above. Small screens are 320 - 767px.
          type: richtext
      heading: Vertical spacer
    - contentBlocks:
        - richtext: >-
            Horizontal spacers define the horizontal padding of objects.
            
            
            Unlike vertical spacers, horizontal spacers are not responsive, but can have different values across different breakpoints.

          type: richtext
        - imagesCaptionBlock:
            - borderless: true
              image: /img/pattern_spacers_horizontal-spacer_table.png
              isLarge: true
          type: imagesCaptionBlock
        - rulesImageBlock:
            - image: /img/pattern_spacers_horizontal-spacer_do.png
              isLarge: false
              rule: Use horizontal spacers inside buttons.
              ruleType: do
            - image: /img/pattern_spacers_horizontal-spacer_dont.png
              isLarge: false
              label: 'Do not:'
              rule: Change the standard spacing patterns
              ruleType: dont
          type: rulesImageBlock
      heading: Horizontal spacer
    - contentBlocks:
        - richtext: >-
            The space tracker is used to measure the internal padding for containers, such as cards. It's responsive and mirrors the gutter across the 3 respective grid breakpoints.
            
            
            Space tracker sizing has been designed to work with the grid, and should never be altered or adjusted.
            
            ![](/img/pattern_spacers_space-tracker.png)

          type: richtext
      heading: Space tracker
  title: Web
ios:
  contentSections: []
  title: iOS
android:
  contentSections: []
  title: Android
colleague:
  contentSections: []
  title: Colleague
---
