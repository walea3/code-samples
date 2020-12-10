---
templateKey: design-system
title: CTAs and buttons
lead: >-
  Calls to action (CTAs) are links, which take the user to another page. CTAs can be styled as buttons, to increase their visual prominence.
  
  
  Buttons enable the user to trigger an action, such as submitting a form.

inDevelopment: false
thumbnail: /img/patterns_cta.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            CTAs require different levels of UI prominence and placement depending on the need.

          type: richtext
        - examplesBlock:
            - center: true
              component: primarycta
              data: '"View our accounts"'
              description: >-
                This is the most prominent CTA, which is used to navigate around the site, link to related pages or to take the user to the next step in a journey. The solid fill gives the button more emphasis, and makes it clearly visible on the page.

              heading: Primary CTA (high UI prominence)
              isLarge: true
            - center: true
              component: actioncta
              data: '"View our savings accounts"'
              heading: Secondary CTA (medium UI prominence)
              isLarge: true
            - center: true
              component: textcta
              data: '"View our loan rates"'
              description: >-
                A text CTA is styled in the same way as a standalone link. It's used to navigate around the site, link to related pages or to take the user to the next step in a journey. It can be used as a secondary CTA to the primary CTA.

              heading: Text CTA
              isLarge: true
            - center: true
              component: backcta
              data: '"Back link"'
              description: >-
                The back CTA allows the user to take a step back in their application or journey. The back link pattern comprises the text CTA with a left-facing chevron.

              heading: Back CTA
              isLarge: true
            - center: true
              component: launchcta
              data: '"Start application"'
              description: >-
                The launch CTA is always used for the start of an application journey, such as a mortgage or current account application. It will always lead the user to start a form.

              heading: Launch CTA
              isLarge: true
            - center: true
              component: actioncta
              data: '"Upload file"'
              description: >-
                This type of button is used to complete tasks in a page - such as uploading documentation or finding an address. It's visually more subtle, with a white fill that helps it blend in and feel part of the page.

              heading: Action button
              isLarge: true
            - center: true
              component: iconactioncta
              data: |-
                {
                  "icon": "sys-plus",
                  "text": "Add more"
                }
              description: >-
                This has the same functionality as the action button, but includes an icon at the start or end.

              heading: Icons in action buttons
              isLarge: true
          type: examplesBlock
      heading: CTA patterns
    - contentBlocks:
        - richtext: >-
            Keep label text short, and to the point. The text should always explain either the destination of the CTA or the purpose of the button.

          type: richtext
        - rulesListBlock:
            - isLarge: false
              items:
                - Keep labels concise.
                - 'Write the label as a short, action-driven statements.'
                - Start the label with a capital letter.
              ruleType: do
            - isLarge: false
              items:
                - >-
                  Don't use generic terms, such as 'Find out more'. This is bad practise from an accessibility point of view.

                - Use symbols in the label.
                - Use technical or exaggerated language.
              ruleType: dont
          type: rulesListBlock
      heading: Writing CTAs and buttons
    - contentBlocks:
        - headingBlock:
            level: '3'
            text: Global button dimensions
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: false
              caption: Large screens
              image: /img/pattern_buttons_tech-specs_lge-screen.png
              isLarge: false
            - borderless: false
              caption: Small screens
              image: /img/pattern_buttons_tech-specs_sm-screen.png
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
