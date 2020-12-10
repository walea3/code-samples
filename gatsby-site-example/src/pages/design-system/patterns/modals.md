---
templateKey: design-system
title: Modals
lead: >-
  A modal displays content on top of the original view. Removing a modal
  requires an interaction from the user.
inDevelopment: true
thumbnail: /img/patterns_modal.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            Modals inform users about a task and can contain critical
            information.


            ![Modal ](/img/pattern_modal_asknel.png "Modal")
          type: richtext
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Modals can appear as a result of a user action, or without warning.
            They’re used for things like a postcode finder, image upload
            functionality or for terms and conditions.


            Modals sit on top of a page’s original content, and have to be
            dismissed by the user. This makes them disruptive to the user
            journey, and therefore they should be used sparingly.


            Modals shouldn’t be obscured by other elements or appear partially
            on screen, with the exception of full-screen modals.
          type: richtext
        - headingBlock:
            level: '3'
            text: Basic modal
          type: headingBlock
        - richtext: >-
            The basic modal comprises a container, with a heading and a control
            footer.
          type: richtext
        - richtext: "![Modal breakdown](/img/patterns_modal_brakedown.png \"Modal breakdown\")\n\n1. **Container**<br>\n   The modal container is styled from the card pattern. It's the visual container that holds the modal's information.\n2. **Heading**<br>\n   The header (H2) should clearly articulate the purpose of the modal.\n3. **Rich text area**<br>\n   This can include paragraph text, bulleted lists, numbered lists and hyperlinks.\n4. **Control footer**\L<br>\n   This uses the card footer patterns.\n5. **Overlay**\L<br>\n   When the modal appears, the original page will be covered with an overlay. The overlay uses the navy blue from our secondary colour palette, at 90% opacity. At this opacity, the user can still see they’re on the same page."
          type: richtext
        - headingBlock:
            level: '3'
            text: Fixed height modal
          type: headingBlock
        - richtext: >-
            In some instances, modals need to accommodate lots of content. This
            elongates the modal container, which pushes the CTA down the page.
            In these scenarios, a fixed height modal should be used. This
            ensures the action is always visible to the user, helping them
            continue their onward journey.
          type: richtext
        - richtext: "\n\n![Modal breakdown](/img/pattern_modal_fixed_hight.png \"Modal breakdown\")\n\n1. **Modal header**<br>\n   The header contains the close icon for the modal, as well as any required links.\n2. **Scroll bar**<br>\n   A scroll bar lets the user know there's more content in the modal. When scrolling is required, the modal control layer is pinned at the top, with the buttons pinned at the bottom.\n3. **Modal footer**\L<br>\n   The footer is fixed to the bottom of modal, and separated from the scrollable content by a divider."
          type: richtext
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            Modals are a disruptive way of displaying content. As a result,
            consider the following when writing content for modals:


            * Clearly state the purpose of the modal in the title. The user
            should know why they are seeing it.

            * Use normal sentence casing.

            * Keep the messaging short. Avoid using scrolling where possible.

            * Make the content actionable where applicable. Tell the user how to
            progress on their journey.
          type: richtext
      heading: Writing for modals
    - contentBlocks:
        - headingBlock:
            level: '3'
            text: Large screens
          type: headingBlock
        - richtext: "![Modal Tech Spec ](/img/patterns_tec_spec_fixed.png \"Modal \")\n\n**Overlay background\L <br>Opacity:** 90%<br>\L**Colour:** colour-secondary-navy-100"
          type: richtext
        - headingBlock:
            level: '3'
            text: Small screens
          type: headingBlock
        - richtext: >-
            ![Modal Tech Spec for Small
            screens](/img/patterns_tech_spec_modal_small.png "Modal Tech Spec
            for Small screens")
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

