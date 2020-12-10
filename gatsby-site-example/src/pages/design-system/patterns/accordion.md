---
templateKey: design-system
title: Accordion
lead: >-
  An accordion expands to reveal more content when the user interacts with it. Used for progressive disclosure, accordions work well when pages are long or space is limited.

inDevelopment: true
thumbnail: /img/patterns_accordions.png
web:
  contentSections:
    - contentBlocks:
        - richtext: 'Accordions can be used in isolation, or as part of a longer list.'
          type: richtext
        - examplesBlock:
            - center: true
              component: accordion
              isLarge: true
          type: examplesBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Accordions are used to house additional information. With this in mind, never include important information in an accordion. 
            
            
            Although they are used to shorten pages, don't overuse accordions on a page. The user still has to read every title in a list of accordions to find the information they want. Too many options can be overbearing for the user.
            
            
            When placed in a group, accordions can be expanded independently. This allows the user to compare information if they need to, and stops the page jumping around.
            
            
            Accordions should never be nested, so don’t put an accordion inside an accordion. It makes it hard for the user to know where they are on the page.

          type: richtext
        - headingBlock:
            level: '3'
            text: Elements of an accordion
          type: headingBlock
        - richtext: >-
            ![](/img/patterns_accordion_elements.png)
            
            
            1. **Heading<br>**The heading text of the accordion is always visible to the user. It should be understood in isolation, and explain the subject of the hidden accordion messaging. Heading text should be short, and to the point.
            
            2. **Chevron<br>**The chevron sits to the right of the accordion heading. It faces downwards when collapsed, and spins round to face upwards when expanded. Although the heading and the chevron will expand the accordion, the entire panel can be used to expand/contract the content.
            
            3. **Divider<br>**An accordion has a divider above and below, to clearly define its boundaries. When an accordion is expanded, the divider will move to the bottom of the expanded content.

          type: richtext
        - rulesImageBlock:
            - image: /img/patterns_accordion_groups_do.png
              isLarge: false
              rule: >-
                Group accordions into themes so users can easily see related content.

              ruleType: do
            - image: /img/patterns_accordion_hiding_dont.png
              isLarge: false
              rule: Hide critical content just to clean up the interface.
              ruleType: dont
          type: rulesImageBlock
      heading: Usage and placement
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              caption: Large screens
              image: /img/patterns_accordion_tech-spec_large.png
              isLarge: true
            - borderless: false
              caption: Small screens
              image: /img/patterns_accordion_tech-spec_small.png
              isLarge: true
          type: imagesCaptionBlock
      heading: Technical specs
    - contentBlocks:
        - richtext: >-
            The expansion panel headers are buttons. Therefore, additional interactive elements should not be put inside of the header.
            
            
            [Learn more about accordion accessibility](https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction)

          type: richtext
      heading: Accessibility
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
