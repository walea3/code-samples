---
templateKey: design-system
title: Cards
lead: >-
  A card is a visual container that holds related information. It comprises a header, body text and a footer (depending on the purpose).

inDevelopment: false
thumbnail: /img/patterns_cards.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            When used as a pattern, a card is very versatile. The card container is the only required element for a card. All other elements are optional.
            
            
            Card layouts vary, to support the types of content they contain. The header and body provide the space for static or dynamic content, while a footer can contain an interactive function, such as a button.

          type: richtext
        - imagesCaptionBlock:
            - borderless: true
              image: /img/pattern_card_pattern_animation.gif
              isLarge: true
          type: imagesCaptionBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            A card is designed to visually draw the users attention. Its shadow elevates card above the rest of the content on the page, making it visually prominent.

          type: richtext
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            A card is a structured, flexible, and extendable content container. It can include a header, body and footer.
            
            
            ![](/img/patterns_card_slots.png)
            
            
            1. **Card header<br>** Headers have their own patterns, which vary depending on the content. In the example below, the header contains an image, a product header and a section title. [View card header patterns.](/design-system/patterns/card-headers/)
            
            2. **Card body<br>**The body is a rich text area and accommodates dynamic content, such bullets, paragraphs, text links and body text.
            
            3. **Card footer<br>**Footer content blocks are interactive patterns. There are many different combinations available depending on the user's needs. [View card footer patterns.](/design-system/patterns/card-footers/)

          type: richtext
        - type: imagesTitleDescBlock
        - rulesListBlock:
            - isLarge: false
              items:
                - Group relevant content.
                - Call out information on a page.
              label: 'Use a card to:'
              ruleType: do
            - isLarge: false
              items:
                - Inside another card (don't nest cards).
                - Too frequently on a page.
              label: 'Do not use a card:'
              ruleType: dont
          type: rulesListBlock
      heading: Elements of a card
    - contentBlocks:
        - richtext: |-
            ### Card styles

            ![](/img/patterns_card_shadow_tech_spec.png)
          type: richtext
        - richtext: >-
            ### Padding and spacing
            
            
            Space trackers track the small, medium and large viewport grid gutter (at respective breakpoints).
            
            
            ![](/img/patterns_card_spacing_tech_spec.png)

          type: richtext
        - richtext: |-
            ### Card types

            ![](/img/patterns_card_examples_tech_spec.png)
          type: richtext
      heading: Technical specs
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
