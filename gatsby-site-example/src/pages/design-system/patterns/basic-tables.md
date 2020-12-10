---
templateKey: design-system
title: Tables
lead: >-
  Tables help users to scan and compare information by organising text and data
  about our products and services across rows and columns.
inDevelopment: true
thumbnail: /img/patterns_tables_thumb.png
web:
  contentSections:
    - contentBlocks:
        - rulesListBlock:
            - isLarge: false
              items:
                - >-
                  To help users find and compare information quickly - like
                  features and benefits of different accounts.
                - >-
                  To show precise numerical values and related content in a
                  small space.
                - >-
                  We must follow precise regulatory rules - such as tables and
                  summary boxes for savings accounts.
              label: 'Use tables:'
              ruleType: do
            - isLarge: false
              items:
                - As a substitute for the grid.
                - To show a trend in data (a chart would work better).
                - >-
                  To layout large amounts of content. If you have a lot of
                  product text to display, consider using product comparison
                  cards instead.
              label: 'Don’t use tables:'
              ruleType: dont
          type: rulesListBlock
      heading: Usage
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_table_patterns_basic.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: >-
            There’s no limit to the number of columns or rows a table can
            contain - but the more you add, the harder the table is to
            understand.


            **Accessibility information:** Keep tables simple. Navigating a
            table with a screen reader can be difficult, so the simpler the
            table and the fewer rows and columns you use, the better.
          type: richtext
        - headingBlock:
            level: '3'
            text: Table widths
          type: headingBlock
        - richtext: >-
            A table can span all 12 columns of the grid. But try to keep the
            width appropriate to the size of other components on screen.
          type: richtext
        - imagesCaptionBlock:
            - borderless: false
              caption: >-
                In this example, the table spans the same number of grid columns
                as the nearby content.
              image: /img/patterns_tables_grid_animation_2.gif
              isLarge: true
          type: imagesCaptionBlock
        - headingBlock:
            level: '3'
            text: When a table becomes horizontally scrollable
          type: headingBlock
        - richtext: >-
            A table with few, relatively short columns will scale automatically
            to fit on small screens.


            Where you have multiple columns and content overflows the screen
            size, the table can become horizontally scrollable.
          type: richtext
        - imagesCaptionBlock:
            - borderless: false
              caption: >-
                Swipe gestures allow the table to be horizontally scrolled on
                touch screen devices.
              image: /img/patterns_tables_horizontal-scroll_2.gif
              isLarge: true
          type: imagesCaptionBlock
        - richtext: |-
            You can tell a table is scrollable when:

            * Browser-specific scrollbars become visible on-screen.
            * The column margins overflow the width of the screen.
          type: richtext
        - headingBlock:
            level: '3'
            text: Setting minimum column widths
          type: headingBlock
        - richtext: >-
            For a table to become horizontally scrollable, you must set a
            minimum width for each column.
          type: richtext
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_patterns_min-col-widths.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: |-
            1. Small (120px minimum width)
            2. Medium (200px minimum width)
            3. Large (260px minimum width)
          type: richtext
        - rulesImageBlock:
            - image: /img/patterns_tables_patterns_min-widths_dont.png
              isLarge: true
              rule: >-
                Skip setting a minimum width. Without this, the table will
                automatically scale to the viewport, making it harder to read
                and compare content.
              ruleType: dont
          type: rulesImageBlock
      heading: Patterns and behaviours
    - contentBlocks:
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_patterns_elements.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: |-
            1. Table title and description (not part of table pattern)
            2. Column headings
            3. Row headings (optional)
            4. CTAs (optional)
            5. Zebra striping
            6. Tooltips (optional)
            7. Captions
          type: richtext
        - headingBlock:
            level: '3'
            text: Table titles and captions
          type: headingBlock
        - richtext: >-
            A table should always be introduced by a clear title and include a
            caption.


            Titles should be short and concise, focused on the subject of the
            table. If you need to provide additional context, you can also add a
            description below.
          type: richtext
        - headingBlock:
            level: '4'
            text: Captions
          type: headingBlock
        - richtext: >-
            Captions function exactly like on-screen titles - helping visually
            impaired users to understand the meaning and purpose of the table.


            Every table must contain a caption. The caption appears below the
            table on screen.


            If you need to, you can also add a summary description to describe
            the content, layout and context in more detail.


            Keep both the caption and optional summary short and concise.
          type: richtext
        - imagesCaptionBlock:
            - borderless: false
              caption: >-
                A caption is positioned underneath the table, but is read by a
                screen reader first.
              image: /img/patterns_tables_elements_caption.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: >-
            **Accessibility information:** A visually impaired user should be
            able to understand the purpose of the table without needing a screen
            reader to read every cell. Using “Tables Mode”, captions are the
            primary way to identify and describe tables.
          type: richtext
        - headingBlock:
            level: '3'
            text: CTAs
          type: headingBlock
        - richtext: >-
            You can use any type of CTA in a table - but only in the last cell
            in the row or column - to ensure users see all the information
            before navigating away.


            **Accessibility information:** Each CTA needs to be descriptive and
            unique within the table. So, rather than end every column with
            ‘Learn about this account’, use a more descriptive label such as
            ‘Learn about FlexPlus’.
          type: richtext
        - imagesCaptionBlock:
            - borderless: false
              caption: CTAs in the last cell in a column.
              image: /img/patterns_tables_ctas_column.png
              isLarge: false
            - borderless: false
              caption: CTAs in the last cell in a row.
              image: /img/patterns_tables_ctas_row.png
              isLarge: false
          type: imagesCaptionBlock
        - headingBlock:
            level: '3'
            text: Column and row headings
          type: headingBlock
        - richtext: >-
            Keep all column and row headings short and descriptive of the
            following content.


            Lengthy headings can distract users from the primary information in
            the cells.


            **Accessibility information:** Use the `<th>` element to identify
            heading cells and the scope attribute for the direction of each
            header - `‘row’` or `‘col’`.
          type: richtext
        - headingBlock:
            level: '3'
            text: Footnotes
          type: headingBlock
        - richtext: >-
            Avoid using footnotes, if you can.


            As the user has to remember a symbol and then find the corresponding
            content, it makes the user’s task of comparing information more
            difficult.


            If you can’t avoid using footnotes, they should appear under the
            caption below the table.


            **Accessibility information:** Use `aria-labels` to the relevant
            cell to make sure footnotes are read aloud by screen readers.
          type: richtext
        - headingBlock:
            level: '3'
            text: Formatting data
          type: headingBlock
        - richtext: >-
            Keep the number of decimal places consistent within the table to
            make the data comparable.
          type: richtext
        - rulesImageBlock:
            - image: /img/patterns_tables_patterns_dont_decimals_1.png
              isLarge: false
              rule: >-
                Mix the level of decimal places. Here, all numbers should have 2
                decimal places.
              ruleType: dont
            - image: /img/patterns_tables_patterns_dont_decimals_2.png
              isLarge: false
              rule: Mix currency values (pounds and pence).
              ruleType: dont
          type: rulesImageBlock
        - headingBlock:
            level: '3'
            text: Icons in tables
          type: headingBlock
        - richtext: >-
            Icon can be used to highlight and help users compare positive,
            negative or neutral attributes.


            * **For positive or negative attributes**, use icon lists. Add text
            to the right of the icon for extra detail, if needed.

            * **For neutral attributes**, use text only.
          type: richtext
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_icons_usage.png
              isLarge: true
          type: imagesCaptionBlock
        - headingBlock:
            level: '3'
            text: Images in tables
          type: headingBlock
        - richtext: >-
            We rarely use images in tables as they can distract the user from
            the primary information in the table.


            However, there are some exceptions, such as images of debit cards
            within some product comparison tables that add a visual distinction
            between similar accounts.
          type: richtext
        - headingBlock:
            level: '3'
            text: Zebra striping
          type: headingBlock
        - richtext: >-
            Zebra striping is where alternate rows are shaded in a different
            colour to help users scan and compare information across multiple
            rows and columns.


            **Note:** Additional testing is needed to understand if zebra
            striping on less than 4 rows (excl. column header row) could be
            confused with highlighting, potentially adding bias to information.
            If you have any findings, please email
            [nel@noopdigital.co.uk](<mailto:
            nel@noopdigital.co.uk>).


            **Accessibility information:** Zebra striping isn’t classed as a
            graphical element, so colour contrast of stripe to background is not
            an issue.
          type: richtext
        - headingBlock:
            level: '3'
            text: Aligning content in tables
          type: headingBlock
        - richtext: >-
            * **Text:** always align left. As English-language readers read
            left-to-right, this makes comparing information easier.

            * **Numerical data (like percentages and monetary values):** always
            align right. Generally, users scan numerical data by looking for
            decimal places first, so aligning-right speeds up comprehension.

            * **Text and data:** Where a column or row contains a mix of text
            and numbers, left-align all cells (including headings).

            * **Column headings:** align column headings with the content
            beneath. So, if a column contains right-aligned numbers, the header
            must be right-aligned, too.

            * **Row headings:** always align left.

            * **Icon lists:** always align left.
          type: richtext
        - rulesImageBlock:
            - image: /img/patterns_tables_alignment_mix.png
              isLarge: false
              rule: Mix alignments in the same column.
              ruleType: dont
            - image: /img/patterns_tables_alignment_left.png
              isLarge: false
              rule: >-
                Use left-alignment when dealing with a mix of text and numerical
                data.
              ruleType: do
          type: rulesImageBlock
      heading: Elements of a basic table
    - contentBlocks:
        - headingBlock:
            level: '3'
            text: Column header cells
          type: headingBlock
        - richtext: >-
            Column header cells use a solid fill of our primary brand colour,
            elevating their importance.
          type: richtext
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_tech-specs_column-header.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: "**Label text:** Styled as H4 headline\L<br>**Label colour:** Colour text reverse<br>**Background colour:** Colour brand 01<br>**Cell padding:** 4\n\n**Accessibility information:** Text-to-background colour contrast ratio: 13.8:1(AAA)."
          type: richtext
        - headingBlock:
            level: '3'
            text: Row header cells
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_tech-specs_row-header.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: "**Label text:** Styled as paragraph, strong <br>**Label colour:** colour-text-headline<br>**Standard background colour:** Colour ui 00\L<br>**Zebra background colour:** Colour ui 05<br>**Cell padding:** 4\n\n**Accessibility information:**\L<br>Text-to-background colour contrast ratio: 18.41:1 (AAA).\L<br>Text-to-zebra stripe colour contrast ratio: 16.6:1 (AAA)."
          type: richtext
        - headingBlock:
            level: '3'
            text: Body cells
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_tech-specs_row-cells.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: "**Label text:** Styled as paragraph\n<br>**Standard background colour:** Colour ui 00\L\n<br>**Zebra background colour:** Colour ui 05\n<br>**Border:** 1px, Colour ui 50\n<br>**Cell padding:** 4\n\n**Accessibility information:** \n<br>Text-to-background colour contrast ratio: 9.92:1 (AAA)\n<br>Text-to-zebra stripe colour contrast ratio: 8.95:1 (AAA"
          type: richtext
        - headingBlock:
            level: '3'
            text: Corner radius
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_tech-specs_corners.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: |-
            **Border radius on outer cells:** 4px
            <br>**Border:** 1px solid
            <br>**Border colour:** Colour ui 50
          type: richtext
        - headingBlock:
            level: '3'
            text: Empty cells
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_tech-specs_empty-cell.png
              isLarge: false
          type: imagesCaptionBlock
        - headingBlock:
            level: '3'
            text: Dividers
          type: headingBlock
        - richtext: |-
            Vertical divider lines are used to aid with vertical scanning.

            **Border:** 1px, Colour ui 50
          type: richtext
        - headingBlock:
            level: '3'
            text: Spacing
          type: headingBlock
        - imagesCaptionBlock:
            - borderless: false
              image: /img/patterns_tables_tech-specs_padding.png
              isLarge: true
          type: imagesCaptionBlock
        - richtext: |-
            **Spacer above table:** Vertical spacer 6 above table
            <br>**Spacer above caption:** Vertical spacer 3 above caption
          type: richtext
      heading: Technical specs
    - contentBlocks:
        - richtext: >-
            Here’s a summary of the key accessibility guidelines for the tables
            pattern.


            * Keep tables simple. Navigating a table with a screen reader can be
            difficult, so the simpler the table and the fewer rows and columns
            you use, the better.

            * Always add a caption. Using “Tables Mode”, captions are the
            primary way for visually impaired users to identify and understand
            tables.

            * Keep CTAs descriptive. Keep CTAs short and unique, so users with
            accessibility needs understand exactly where they’re navigating to.

            * Avoid footnotes. But if you have to include them, use aria-labels
            to make sure they’re read aloud by screen readers.

            * Styling. Label text should be styled as `<h4>\`, using \`<th>\`
            element for header cells (not header tags). Use \`scope` attribute
            to set direction of header: ‘col’ or ‘row’.




            For more information on accessibility in tables, visit the
            [accessibility
            website](https://www.noop.co.uk/guides/data-tables/611/).
          type: richtext
      heading: Accessibility
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

