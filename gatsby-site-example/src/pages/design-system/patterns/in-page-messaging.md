---
templateKey: design-system
title: In-page messaging
lead: >-
  In-page messaging is a way for us to highlight information to the user. They
  can be used to pull out key facts or guide users through complex journeys.
inDevelopment: true
thumbnail: /img/patterns_in-page-messaging.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            There are several patterns for in-page messaging. Choosing the right
            pattern depends on the urgency of the message and the UI prominence
            it requires.


            ![](/img/patterns_mf_patterns.png)
          type: richtext
      heading: Patterns
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: true
              image: /img/patterns_mf_urgency.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: >-
            ### UI treatments


            Messages that are the highest on both the UI prominence and urgency
            scales have square corners. This is because angular objects elicit
            deeper levels of brain processing, and appear more visually
            prominent.


            ![](/img/patterns_mf_ui-treatments.png)
          type: richtext
      heading: Defining the message urgency
    - contentBlocks:
        - rulesListBlock:
            - isLarge: true
              items:
                - >-
                  The content is part of the journey, and can sit on the page
                  outside of the messaging framework.
                - There are more than 2 other callouts on the page.
                - >-
                  It has no context. There needs to be information to introduce
                  or explain the content in the messaging framework.
              label: 'Do not use in-page messaging if:'
              ruleType: dont
          type: rulesListBlock
        - richtext: |-
            ### Elements of in-page messaging

            ![](/img/patterns_mf_elements.png)

            1. **Icon**<br>
               Each message has a default icon, which indicates the message type.
            2. **Messaging pattern**<br>
               This indicates the purpose of the message and must not be changed.
            3. **Description**<br>
               This describes the issue or action the user needs to take, if any. The message should be clear, and include the problem, as well as the recommended solution.
            4. **Link (optional)**<br>
               Links should be used in context with the in-page message. Be careful the link doesn't distract the user from their onward journey. Do not include multiple links in a single message box. This can become confusing and overload the user.
            5. **List (optional)**<br>
               Lists can be added to instruct the user, or to highlight multiple pieces of information. Bear in mind, lists will make the message box longer, and may dustup the content flow.
            6. **Background**<br>
               Background colour mirrors the message type to increase the UI prominence.
          type: richtext
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            There are different styles of in-page message. As with the UI
            treatments, how we write each one depends on the context. 


            The style guide for writing these messages has not yet been defined.
            Further testing needs to be conducted around the best practise for
            each. Bear in mind that in-page messages are intended to be short,
            pulled out key information. Keep it concise and avoid any waffle.
          type: richtext
      heading: Writing in-page messages
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              caption: High UI prominence message specs
              image: /img/patterns_mf_tech-specs_high.png
              isLarge: true
            - borderless: false
              caption: Low UI prominence message specs
              image: /img/patterns_mf_tech-specs_low.png
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

