---
templateKey: design-system
title: Radios
lead: 'Radio buttons allow a user to make a single selection from 2 or more options. '
inDevelopment: false
thumbnail: /img/patterns_radio.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            Radio buttons can be stacked, or in a horizontal pattern. If there are more than 5 options, a [dropdown](/design-system/patterns/dropdowns/) should be used instead of radio buttons.
            

          type: richtext
        - examplesBlock:
            - center: false
              component: radio
              data: |-
                {
                  "field": { "label": "Stacked radio pattern" },
                  "options": [
                    {
                      "id": "stacked-option-1",
                      "name": "stacked",
                      "value": "option1",
                      "label": "Option 1"
                    },
                    {
                      "id": "stacked-option-2",
                      "name": "stacked",
                      "value": "option2",
                      "label": "Option 2"
                    },
                    {
                      "id": "stacked-option-3",
                      "name": "stacked",
                      "value": "option3",
                      "label": "Option 3"
                    }
                  ]
                }
              description: >-
                Vertically stacked radio buttons is the most common pattern for radio buttons. It’s easier to scan than a horizontal pattern.
                

              isLarge: false
            - center: false
              component: radio
              data: |-
                {
                  "field": { "label": "Horizontal radio pattern", "inline": true },
                  "options": [
                    {
                      "id": "inline-tes",
                      "name": "inline",
                      "value": "yes",
                      "label": "Yes"
                    },
                    {
                      "id": "inline-no",
                      "name": "inline",
                      "value": "no",
                      "label": "No"
                    }
                  ]
                }
              description: >-
                We only use radio buttons horizontally when there are only 2 options and the labels are very short.
                

              isLarge: false
          type: examplesBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Radio buttons can be used anywhere on a page, or at any point in a journey.
            

          type: richtext
        - richtext: >-
            ### Elements of a radio
            
            
            ![](/img/radio_usage_elements.png)
            
            
            1. **Header**<br>The header should always explain what the radio buttons are asking the user to decide. If there are a large number of options, use different headers to group and break up the list of radio buttons.
            
            
            2. **Descriptor**<br>Descriptor text provides the user with more detailed information about what's required. It should only be used when a heading or options need further explanation.
            
            
            3. **Option text**<br>Option text gives the detail about the radio button. They should start with a capital letter, unless it follows a colon and/or form part of an existing sentence. Radio buttons only let the user select one answer, so the options need to be clear and unambiguous. Terminology between a group of radio buttons needs to be consistent, to give the user clear alternatives.
            
            
            4. **Radio controls**<br>This is the actual radio button, which changes colour when selected.
            

          type: richtext
        - rulesImageBlock:
            - image: /img/radio_usage_option_do.png
              isLarge: false
              rule: 'Keep the question simple, and the options concise.'
              ruleType: do
            - image: /img/radio_usage_option_dont.png
              isLarge: false
              rule: >-
                Repeat phrases in the option text. This makes them difficult to skim read and unnecessarily long.
                

              ruleType: dont
          type: rulesImageBlock
        - richtext: |-
            ### Radio control states

            ![](/img/radio_usage_controls.png)
          type: richtext
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            When writing radio button options:
            
            
            * Use capital letters.
            
            * Do not use full stops.
            
            * Front load the option text.
            
            * Do not start the radio buttons in the same words or phrases. They need to be clearly differentiated.
            
            * Make it clear how the options are different to each other.
            
            * Radio buttons lists options often form a sliding scale. For example, they might go from 0 to 100. Be mindful of this scale, so that it doesn’t jump about.
            
            
            For radio groups or several groups in the same journey, consider the following:
            
            
            * Follow the same pattern and rhythm for your radio groups. They need to be consistent throughout. For example, when using a ‘yes’ or ‘no’ radio pattern, keep the options in the same order and don’t switch to ‘no’ or ‘yes’.
            
            * Terminology between radio buttons needs to be consistent, to give the user clear alternatives. For example , if you’re using the phrase ‘More than..’, don’t switch to ‘Over’.
            

          type: richtext
      heading: 'Writing radio buttons '
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              caption: Vertical layout
              image: /img/radio_technical_vertical.png
              isLarge: false
            - borderless: false
              caption: Horizontal layout
              image: /img/radio_technical_horizontal.png
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
