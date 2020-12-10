---
templateKey: design-system
title: Tooltips
lead: >-
  Tooltips are used to show a small amount of text in an overlay box. When the
  user interacts with the tooltip icon (the GUI), the information box is
  displayed.
inDevelopment: false
thumbnail: /img/patterns_tooltip.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            Tooltips are displayed as a circle, with an 'i' in the centre. To
            remove the overlay, the user can click outside of the box, anywhere
            on the page.
          type: richtext
        - examplesBlock:
            - center: false
              component: tooltip
              data: ''
              isLarge: true
          type: examplesBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Collision detection ensures the tooltip doesn’t bleed off the edge
            of the page. It means the tooltip opens at different points around
            the icon, depending on where it’s situated.
          type: richtext
        - headingBlock:
            level: '3'
            text: Large screens
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: true
              image: /img/pattern_tooltip_collision_large.png
              isLarge: true
          type: imagesCaptionBlock
        - headingBlock:
            level: '3'
            text: Small screens
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: true
              image: /img/pattern_tooltip_collision_small.png
              isLarge: true
          type: imagesCaptionBlock
      heading: Collision detection
    - contentBlocks:
        - richtext: >-
            Tooltips are used in line with the text on a page, to provide
            additional contextual information. It’s a way of showing text that
            might be useful to some readers, but not others.


            Use tooltips sparingly, to maintain their visual impact.
          type: richtext
        - rulesImageBlock:
            - image: /img/patterns_tooltip_do.png
              isLarge: true
              label: ''
              rule: Use a tooltip to explain something in more detail.
              ruleType: do
            - image: /img/patterns_tooltip_dont.png
              isLarge: true
              rule: Include lists or lots of text in a tooltip box.
              ruleType: dont
          type: rulesImageBlock
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            Tooltip text should be short. Aim for a single sentence where
            possible. Use normal writing casing.


            Never include essential information in a tooltip, or repeat content
            that’s already on the page. Important information should always be
            displayed permanently on the page content.


            Tooltip boxes should only include additional information that
            assists the main message. Make sure this information is useful  to
            the user and avoid superfluous content.
          type: richtext
      heading: Writing tooltips
    - contentBlocks:
        - richtext: >-
            Tooltips only appear when the user taps or clicks on it. They do not
            pop-up when the focus or hover is on the form field. The latter
            causes issues for a variety of users but are especially bad for
            those using a screen magnifier. In this case, the tooltip obscures
            the field underneath and prevents the user from being able to
            complete it.
          type: richtext
      heading: Accessibility
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              caption: Large screen
              image: /img/pattern_tooltip_tech-specs_large.png
              isLarge: true
            - borderless: false
              caption: Small screen
              image: /img/pattern_tooltip_tech-specs_small.png
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

