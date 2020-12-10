---
templateKey: design-system
title: Form validation
lead: >-
  Form validation lets the user know when there’s an error with the data they have entered. The pattern includes an error summary box and input level validation.


inDevelopment: false
thumbnail: /img/patterns_validation.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            There are 2 types of validation that make up this pattern; inline validation and the validation summary box. Each validation type has an error and a warning state, depending on the message.
            
            ![](/img/pattern_form_validation_urgency_scale.png)

          type: richtext
        - imagesCaptionBlock:
            - borderless: true
              image: /img/pattern_form_validation_table.png
              isLarge: true
          type: imagesCaptionBlock
      heading: Patterns
    - contentBlocks:
        - richtext: |-
            ### Inline validation

            ![](/img/pattern_form_validation_inline_validation.png)

            1. **Vertical line**<br>
               The vertical line highlights the field that requires attention and provides a visual connection with between the summary box and the inline validation.
            2. **Icon and heading**<br>
               Each message has a default icon, which indicates the message type. The icon is linked to the heading and must not be changed.
            3. **Validation message**<br>
               The message starts with the validation type, then tells the user what action they need to take.

            ### Validation summary box

            ![](/img/pattern_form_validation_summary_box.png)

            1. **Vertical line**<br>
               The vertical line gives the validation messages a higher UI prominence. It also provides a visual connection with between the summary box and inline validation.
            2. **Summary box**<br>
               The summary error box includes a list of all errors on the page.
            3. **Anchor links**<br>
               These are smooth scrolling anchor links that will take the user to the relevant input.
          type: richtext
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            There are different styles of validation message, which vary depending on the severity of the message.
            
            
            When writing the validation message, keep it simple and tell the user:
            
            
            1. Why the error occurred.
            
            2. How they can fix it.
            
            
            Validation messages should only include essential information, so keep them concise.
            
            
            ### Striking the right tone
            
            
            Consider the context of the validation message, and be mindful of the tone used in each scenario. For example, in sensitive situations (such as a bereavement closure form) we should respect the user’s emotional state, and tailor our language accordingly.
            
            
            ### Explaining the error
            
            
            The messages should be as specific to the scenario as possible. The user should be able to understand what the error refers to, without any visual cues.
            
            
            If writing an error message for a ‘Yes / No’ radio button, use the error message to explain what answering ‘Yes’ means. For example, “Do you save into this ISA regularly?” prompts “Choose yes if you save into this ISA regularly.”
            
            
            If an error has occurred on a date input field, specify which field it has occurred in (Day, Month, Year, all) and the reason the date is inaccurate. For example, “this date is in the future”.
            
            
            For multiple options tick boxes, make it clear that the user can select more than one answer. For example, “Choose at least one option, to tell us where your lump sum came from”.
            
            
            ### Language
            
            
            When writing any error message, use positive language to describe what needs to happen. For example, use ‘This amount must be less than your lump sum amount.’ as opposed to ‘This amount must not exceed your lump sum amount.’
            
            
            When referencing a specific input field, mirror the terminology where possible, to give consistency. For example the bank prompt for, ‘What’s your marital status?’ is ‘Choose your marital status’.
            
            
            If a written input is left blank, we always start the message with ‘Tell us…’.
            
            
            If a radio button, tick box or dropdown is left blank, start the message with ‘Choose…’.


          type: richtext
      heading: Writing validation messaging
    - contentBlocks:
        - richtext: >-
            If used at the top of the page, the summary error message will be the first thing read out by screen readers. This makes it simpler for screen reader users to identify all the errors on the page at once.
            
            
            All error messages include a symbol (as well as the colour change). This ensures the error is noticeable for users with colour vision deficiencies.
            
            
            When a field has an error message, the field title tag should be prefixed with ‘Error’.


          type: richtext
      heading: Accessibility
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              caption: Summary box
              image: /img/pattern_form_validation_summary_box_spec.png
              isLarge: true
            - borderless: false
              caption: Input level validation
              image: /img/pattern_form_validation_input_level_validation_spec.png
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
