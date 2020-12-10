---
templateKey: design-system
title: Checkboxes
lead: >-
  Checkboxes allow the user to select and deselect one or more options. Unlike
  [radio buttons](/design-system/patterns/radios/), a user can select multiple
  checkboxes from the same list.
inDevelopment: false
thumbnail: /img/patterns_checkboxes.png
web:
  contentSections:
    - contentBlocks:
        - examplesBlock:
            - center: false
              component: checkbox
              data: |-
                {
                 "field": { "label": "Checkbox header" },
                  "options": [
                    {
                      "id": "checkbox-option-1",
                      "label": "Option 1"
                    },
                    {
                      "id": "checkbox-option-2",
                      "label": "Option 2"
                    },
                    {
                      "id": "checkbox-option-3",
                      "label": "Option 3"
                    }
                  ]
                }
              isLarge: true
          type: examplesBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Checkboxes should be used when the user can choose more than one
            option. In some instances, it won't be mandatory to tick any of the
            boxes.


            ### Elements of a checkbox


            ![](/img/checkboxes_usage_elements.png)


            1. **Heading**<br>Keep heading text short, and to the point. The
            header should always explain what the checkboxes are asking the user
            to decide. <br><br>If there are a large number of options, use
            different headers to group and break up the list of checkboxes.

            2. **Descriptor text (optional)**<br>Descriptor text provides the
            user with more detailed information about what's required. It should
            only be used when a heading or options need further explanation.

            3. **Option tex**t<br>Multiple options should always be presented
            vertically, with one choice per line.

            4. **Checkbox controls**<br> The controls change colour and a tick
            appears when the box is ticked.
          type: richtext
        - richtext: |-
            ### Checkbox control states

            ![](/img/checkboxes_usage_controls.png)
          type: richtext
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            When writing check boxes, consider the following:


            * Start every checkbox list with an introduction heading. This can
            be a question or a statement.

            * Keep the checkbox options as simple as possible. 

            * Do not start the checkbox options with the same phrase. They need
            to be clearly and visibly different from each other.
          type: richtext
        - rulesImageBlock:
            - image: /img/checkboxes_usage_headings_do.png
              isLarge: false
              rule: Use positive phrasing wherever possible for the labelling.
              ruleType: do
            - image: /img/checkboxes_usage_headings_dont.png
              isLarge: false
              label: 'Do not:'
              rule: Use complex language or repetitive phrasing.
              ruleType: dont
            - image: /img/checkboxes_usage_option_caution.png
              isLarge: true
              rule: ' Multiple options presented horizontally can overload the user, making it difficult to read.'
              ruleType: consider
          type: rulesImageBlock
      heading: Writing checkboxes
    - contentBlocks:
        - richtext: >-
            The clickable area of the checkbox has been considered from an
            accessibility perspective. Adequate spacing between each element has
            also been created, to ensure that clickable regions do not cross
            over.


            Checkboxes are focusable and keyboard accessible. For more
            information on checkbox accessibility, [visit the w3
            website](https://www.w3.org/TR/wai-aria-practices/examples/checkbox/checkbox-1/checkbox-1.html).
          type: richtext
      heading: Accessibility
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              caption: Vertical layout
              image: /img/checkboxes_technical_vertical.png
              isLarge: false
            - borderless: false
              caption: Horizontal layout
              image: /img/checkboxes_technical_horizontal.png
              isLarge: false
          type: imagesCaptionBlock
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

