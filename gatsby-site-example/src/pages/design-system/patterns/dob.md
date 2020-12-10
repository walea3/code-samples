---
templateKey: design-system
title: D.O.B
lead: >-
  Date of birth (D.O.B) is a type of input field, specifically designed to
  capture a user’s date of birth. It’s made up 3 input fields for day, month and
  year.
inDevelopment: true
thumbnail: /img/patterns_dob.png
web:
  contentSections:
    - contentBlocks:
        - examplesBlock:
            - center: true
              component: dob
              description: >-
                This pattern aims to keep the data entry simple, and avoid
                ambiguity. The date options are clearly labelled with the 3
                separate date ranges.


                It also gives the user an example, to show them exactly how they
                need to enter their data. This specificity reduces the cognitive
                load on the user, making it quicker and easier to fill in.
              isLarge: true
          type: examplesBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            The date of birth pattern is used anywhere we need to capture the
            user’s personal details. The pattern should sit with other personal
            details the user needs to enter.


            ### Elements of a D.O.B field


            ![](/img/dob_usage_elements.png)


            1. **Heading<br>**This explains what we’re asking the user to enter.
            It can be a question or a statement, as long as it’s consistent with
            the rest of the form content.

            2. **Example<br>**This gives the user a visual example of how the
            date of birth should be entered. It sits above the form fields and
            is a permanent feature of the pattern. In this example, the month
            illustrates how to enter a single number into the double digit date
            field. The digits for the day cannot be confused with the month, to
            further avoid confusion.

            3. **Input labels<br>**D.O.B formats can vary, so it’s important to
            tell the user what to enter in each field. The date labels are
            spelled out in full, to aid readability.

            4. **Input fields<br>**Users enter their data into the input fields.
            Note that there is no label text inside the input fields, as this is
            inaccessible.
          type: richtext
      heading: Usage and placement
    - contentBlocks:
        - richtext: |-
            The D.O.B field has been designed with accessibility in mind:

              - It avoids using placeholder text inside the form fields
              - It doesn’t switch between dropdown and input data entry
              - It provides a permanent example of how to enter the content
              - The data input automatically skips to the next field when the user has entered text
          type: richtext
      heading: Accessibility
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              image: /img/dob_technical.png
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

