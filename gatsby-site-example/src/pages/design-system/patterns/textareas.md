---
templateKey: design-system
title: Text areas
lead: >-
  Text area is a larger variation of an [input field](/design-system/patterns/input-fields), which can run over multiple lines.
  

inDevelopment: false
thumbnail: /img/patterns_text-area.png
web:
  contentSections:
    - contentBlocks:
        - examplesBlock:
            - center: false
              component: textarea
              data: |-
                {
                  "field": { "label": "Text area header" },
                  "text": {
                    "cols": 75
                  }
                }
              isLarge: true
          type: examplesBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Text areas let the user input information. They're used to collect data from a user, and can be added anywhere on the page.
            

          type: richtext
        - richtext: >-
            ### Elements of an text area
            
            
            Text areas comprise a header, a descriptor and the editable text area.
            
            
            ![](/img/patterns_text-area_elements.png)
            
            
            ###
            
            
            1. **Header**<br>Keep heading text short, and to the point. The header should always explain what the input field is asking the user to input.
               <br><br> Show which fields are not compulsory by adding: (optional) after the heading.
            2. **Descriptor**<br>Descriptor text provides the user with more detailed information about what's required. It should only be used when a heading or options need further explanation.
            
            3. **Text area<br>**This type of input is free form text. Do not include any placeholder copy inside the text area box, as it disappears once the user begins typing. This makes it hard for users to know what data needs to be entered.
            

          type: richtext
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            When writing for text areas:
            
            
            * Make sure you include clear labelling, which tells the user what they need to enter.
            
            * Use sentence casing.
            
            * Clearly state any character limits.
            
            * Consider if there's any information you do not want the user to enter, such as their personal details. This should be called out in the descriptor.
            

          type: richtext
      heading: Writing text areas
    - contentBlocks:
        - richtext: >-
            Make sure the user knows what content they need to enter into the text area. This should be displayed in the header – not as a placeholder within the text area.
            
            
            Disappearing text strains users’ short-term memory and makes it harder to check for and fix errors. It also puts an additional burden on users with visual and cognitive impairments.
            
            
            Showing which fields are compulsory on a form is something welcomed by our users who are short on time. They must be labelled correctly however, otherwise users will experience unnecessary errors that can lead to confusion.
            

          type: richtext
      heading: Accessibility
    - contentBlocks:
        - richtext: >-
            ![Text areas have left and right spacers of 3, a minimum height of 160px. The maximum width is 6 cols.](/img/patterns_text-area_tech-spec.png)
            

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
