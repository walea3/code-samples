---
templateKey: design-system
title: Dropdowns
lead: >-
  When selected, the dropdown allows the user to choose one option from the list.

inDevelopment: false
thumbnail: /img/patterns_dropdown.png
web:
  contentSections:
    - contentBlocks:
        - examplesBlock:
            - center: true
              component: dropdown
              data: |-
                {
                  "field": { "label": "Dropdown header" },
                  "dropdown": {
                    "items": ["Option 1", "Option 2", "Permanent (including zero hours)"]
                  }
                }
              description: >-
                Dropdowns let users choose a single option from a predefined list.

              isLarge: true
          type: examplesBlock
        - rulesImageBlock:
            - image: /img/dropdown_patterns_do.png
              isLarge: false
              rule: >-
                Use a dropdown if there are more than 5 options. If you have over 12 options, consider using predictive text fields in a dropdown, or freeform fields.

              ruleType: do
            - image: /img/dropdown_patterns_dont.png
              isLarge: false
              rule: >-
                Use a dropdown if there are fewer than 5 options. In this instance, use [radio buttons](/design-system/patterns/radios/), so the user can see all the options.

              ruleType: dont
          type: rulesImageBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Dropdowns have a similar functionality to radio buttons, but take up less space on the page. 
            
            
            ### Elements of a dropdown
            
            
            ![](/img/dropdown_usage_elements.png)
            
            
            1. **Heading<br>**
               Keep heading text short, and to the point. The heading should always explain what the dropdown is asking the user to choose.
            2. **Descriptor text (optional)<br>**
               Descriptor text provides the user with more detailed information about what's required. It should only be used when a heading or options need further explanation.
            3. **Option text<br>**Each dropdown option should make sense in isolation with the header text. The option text should always start with an upper case letter, but shouldn’t have a full stop.

          type: richtext
        - rulesImageBlock:
            - image: /img/dropdown_usage_option.png
              isLarge: true
              rule: >-
                Longer option text will truncate when selected, meaning the user won't see the whole line of text.

              ruleType: caution
          type: rulesImageBlock
        - headingBlock:
            level: '3'
            text: Dropdown states
          type: headingBlock
        - examplesBlock:
            - center: true
              component: dropdown
              data: |-
                {
                  "dropdown": {
                    "disabled": true,
                    "placeholder": "Option text",
                    "items": ["Option 1", "Option 2", "Permanent (including zero hours)"]
                  }
                }
              heading: Disabled state
              isLarge: false
            - center: true
              component: dropdown
              data: |-
                {
                  "dropdown": {
                    "placeholder": "Option text",
                    "items": ["Option 1", "Option 2", "Permanent (including zero hours)"]
                  }
                }
              heading: Enable state
              isLarge: false
            - center: true
              component: dropdown
              data: |-
                {
                  "dropdown": {
                    "alert": "warning",
                    "placeholder": "Option text",
                    "items": ["Option 1", "Option 2", "Permanent (including zero hours)"]
                  }
                }
              heading: Warning state
              isLarge: false
            - center: true
              component: dropdown
              data: |-
                {
                  "dropdown": {
                    "alert": "error",
                    "placeholder": "Option text",
                    "items": ["Option 1", "Option 2", "Permanent (including zero hours)"]
                  }
                }
              heading: Error state
              isLarge: false
          type: examplesBlock
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            Dropdowns should both key and mouse input. Access keys should make it quick and easy for users to choose an option, without the use of a mouse. 
            
            
            For more information on dropdown accessibility, visit the [w3 website. ](https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html)

          type: richtext
      heading: Accessibility
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              image: /img/dropdown_technical.png
              isLarge: true
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
