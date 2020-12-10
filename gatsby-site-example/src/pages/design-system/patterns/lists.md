---
templateKey: design-system
title: Lists
lead: >-
  Lists are a clean, easily scannable way of displaying content on a page. They break things down into bitesize chunks, making it quicker to read and easier to compare.

inDevelopment: false
thumbnail: /img/patterns_list.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            There are several types of list patterns, all of which serve different purposes.

          type: richtext
        - examplesBlock:
            - center: true
              component: unorderedList
              description: >-
                Bulleted lists should be used when the information does not have a specific order.

              heading: Bulleted lists
              isLarge: true
            - center: true
              component: orderedList
              description: >-
                Numbered lists should be used when the information has a specific order - such as a process or instructions.

              heading: Numbered lists
              isLarge: true
            - center: true
              component: iconList
              data: |-
                {
                  "listItems": [
                    {
                      "heading": "The purpose of a tick list is to: ",
                      "type": "tick",
                      "items": [
                        "Highlight positive attributes.",
                        "List things a user needs to have or do."
                      ]
                    },
                    {
                      "heading": "The purpose of a cross list is to: ",
                      "type": "cross",
                      "items": [
                        "Highlight the negatives or things that won't influence the user.",
                        "List things a user shouldn't do."
                      ]
                    },
                    {
                      "heading": "The purpose of a warning list is to: ",
                      "type": "warning",
                      "items": ["Highlight potential concerns or errors."]
                    }
                  ]
                }
              description: Icon lists are used to group information with a common theme.
              heading: Icon lists
              isLarge: true
          type: examplesBlock
      heading: Patterns
    - contentBlocks:
        - richtext: >-
            Bullets and numbered lists stand out on a page and draw the reader’s
            attention. Too many lists on a page reduce their impact. Therefore,
            lists should be used sparingly.


            When using icons lists, only use one type of symbol per list. For
            example, do not use ticks and a crosses in the same list.
          type: richtext
        - rulesImageBlock:
            - image: /img/lists_usage_do.png
              isLarge: false
              rule: >-
                Write concise list entries and follow the same sentence structure.

              ruleType: do
            - image: /img/lists_usage_dont.png
              isLarge: false
              rule: Use the same word at the start of every list entry.
              ruleType: dont
          type: rulesImageBlock
      heading: Usage and placement
    - contentBlocks:
        - richtext: >-
            Every list includes a lead-in line and the text labels, which make up the list content.


            ### List lead-in


            This introduces the list and gives it context. Lists should always include a lead-in line or heading.


            ### Text labels


            If the bullets are self-contained sentences, they should start with
            a capital letter and end with a full stop. If they are not complete
            sentences, they should start with a lower case. Only the last bullet
            should end with a full stop.


            Numbered lists should start with a capital letter and end with a
            full stop.


            Be mindful about the number of entries in a list. Too many and the
            benefits of succinct, scannable content is lost.


            ### List patterns


            'How to' lists are mostly to help users understand a process. They
            are similar to numbered (ordered lists), but have some unique
            elements.


            * Don't use 'Click', 'Tap', 'Select'. Use **Choose.**

            * Don't put ' ' around actions that users can take (just use strong
            tags)

            * The call to action link should appear after the list, not inline
            within a bullet.


            ### Example of a 'How to' list.


            #### Make an overpayment


            To make an overpayment on your loan:


            1. Log in to the Internet Bank.

            2. Choose the <strong>Quick Transfer</strong> option.

            3. Choose the accounts to transfer from and to.

            4. Add the amount to transfer.

            5. Use the strong tags around the **Go** button.

            6. Check the details and, if you're happy to make the transfer,
            choose <strong>Yes</strong>.


            **Log into the Internet Bank.**
          type: richtext
      heading: Writing lists
    - contentBlocks:
        - imagesTitleDescBlock:
            - hasImageFirst: false
              heading: Bulleted (unordered) specs
              image: /img/lists_technical_unordered.png
              isLarge: true
            - hasImageFirst: false
              heading: Numbered (ordered) specs
              image: /img/lists_technical_ordered.png
              isLarge: true
            - hasImageFirst: false
              heading: Icon list specs
              image: /img/lists_technical_icon.png
              isLarge: true
          type: imagesTitleDescBlock
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
