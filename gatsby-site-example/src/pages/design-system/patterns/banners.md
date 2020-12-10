---
templateKey: design-system
title: Banners
lead: >-
  Banners are static areas that sit at the top of a page. We use them to call
  out information to the user. There are several types of banner, which vary
  depending on the message.
inDevelopment: false
thumbnail: /img/patterns_banner.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            There are 4 banner patterns for the different types of messages.


            These are:


            * important

            * warning

            * marketing information

            * cookie information.


            Banners should appear 1 at a time, and should disappear once the
            issue is resolved. Only the cookie information banner can be
            dismissed by the user.


            ![](/img/pattern_banners_scale.png)
          type: richtext
        - headingBlock:
            level: '3'
            text: Defining the message urgency
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: true
              image: /img/patterns_banners_matrix.png
              isLarge: true
          type: imagesCaptionBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Banners appear at the top of a page, pushing the rest of the content
            downwards.


            ![The different elements of a banner
            pattern.](/img/patterns_banners_pattern.png)


            1. **Icon**<br>
               Each message has a default icon, which indicates the message type.
            2. **Heading**<br>
               Headings indicate the purpose of the banner message and must not be changed.
            3. **Description**<br>
               This should describe the issue or action the user needs to take, if any.
            4. **Link**<br>
               When including links, be careful that this does not distract the user from their onward journey.
            5. **CTA**<br>
               Keep label text short, and to the point. The text should always explain either the destination of the CTA or the purpose of the button.
          type: richtext
        - richtext: |-
            ### Positioning

            There are 2 locations that the banner pattern can be positioned.
          type: richtext
        - imagesCaptionBlock:
            - borderless: false
              caption: The cookie banner pattern sits above all page content.
              image: /img/patterns_banner_global_location.png
              isLarge: false
            - borderless: false
              caption: >-
                In-page banners e.g. IB status or market information patterns
                are located below the header pattern. These cannot be dismissed.
              image: /img/patterns_banners_in-page_location.png
              isLarge: false
          type: imagesCaptionBlock
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            ![Warning banner space tracker is 8
            pixels.](/img/pattern_banner_left_tech_spec.png)


            ![Cookie banner spacer tracker is 8
            pixels.](/img/pattern_banner_action_tech_spec.png)
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

