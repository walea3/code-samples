---
templateKey: design-system
title: Input fields
lead: An input field allows users to enter text on a page.
inDevelopment: false
thumbnail: /img/patterns_input-field.png
web:
  contentSections:
    - contentBlocks:
        - examplesBlock:
            - center: true
              component: input
              data: |-
                {
                  "field": { "label": "Input field header" },
                  "input": {
                    "size": 25
                  }
                }
              isLarge: true
          type: examplesBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            ### 


            ![](/img/input_usage_elements.png)


            1. **Header**<br>Keep heading text short, and to the point. The
            header should always explain what the input field is asking the user
            to input.

            2. **Descriptor**<br>This gives more detail about the information
            the user needs to enter.

            3. **Prefix**<br>The prefix is added to the start of the input
            field, to give the value or measurement of what's required.

            4. **Suffix**<br>The suffix is added to the end of the input field,
            to give the value or measurement of what's required.

            5. **Input field**<br>The type of input should be defined, such as
            text, number or email.
          type: richtext
        - headingBlock:
            level: '3'
            text: States
          type: headingBlock
        - examplesBlock:
            - center: false
              component: input
              data: |-
                {
                  "input": {
                    "size": 25
                  }
                }
              heading: Default state
              isLarge: false
            - center: false
              component: input
              data: |-
                {
                  "input": {
                    "alert": "warning",
                    "size": 25
                  }
                }
              heading: Warning state
              isLarge: false
            - center: false
              component: input
              data: |-
                {
                  "input": {
                    "alert": "error",
                    "size": 25
                  }
                }
              heading: Error state
              isLarge: false
            - center: false
              component: input
              data: |-
                {
                  "input": {
                    "disabled": true,
                    "size": 25
                  }
                }
              heading: Disabled state
              isLarge: false
          type: examplesBlock
      heading: Elements of an input field
    - contentBlocks:
        - richtext: >-
            It's important to tell the user what they need to enter into an
            input field. This should made clear in the title.  




            Both letters and numbers can be added to an input field. Numerical
            fields can be restricted, to ensure users enter the right
            characters.
          type: richtext
      heading: Writing input fields
    - contentBlocks:
        - richtext: >-
            The width of the text input field can change, depending on the
            amount of characters required. The minimum width is 'Sizing' x 14.
            For every additional character, it's 'Sizing' x 3. All text inputs
            over 288px on large screens revert to a 100% of the grid on small
            screens.
          type: richtext
        - imagesTitleDescBlock:
            - hasImageFirst: false
              heading: Input field dimensions
              image: /img/input_technical.png
              isLarge: true
          type: imagesTitleDescBlock
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

