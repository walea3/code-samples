---
templateKey: design-system
title: Typography
lead: >-
  Our responsive typographic scale is a group of font sizes and styles. They are
  specifically designed to work in harmony across all digital viewports.
inDevelopment: false
thumbnail: /img/brand-style_typography.png
contentSections:
  - contentBlocks:
      - richtext: >-
          We use 2 type families across our communications. These are the NBS
          font and CabernetJF Pro.
        type: richtext
      - headingBlock:
          level: '3'
          text: NBS
        type: headingBlock
      - richtext: >-
          ![](/img/patterns_typography_typefaces_nbs.png)


          Our primary brand font is NBS - our bespoke corporate font. NBS is
          available in 3 weights; NBS-light, NBS-medium and NBS-Bold.


          The light version of the font is not used on the web, as it renders
          poorly on older displays and in small sizes.


          The italic weights are not true italics; they are sloped romans,
          meaning the font has been slanted at an angle.
        type: richtext
      - headingBlock:
          level: '3'
          text: Cabernet JF Pro
        type: headingBlock
      - richtext: >-
          ![](/img/patterns_typography_typefaces_cabernet.png)


          Cabernet JF Pro is a display font and must only be used for marketing
          headings. The font size should be at least 40px on large screens and
          30px on small screens. Any smaller and the readability is compromised.
          Cabernet should be used sparingly or the brand impact will be reduced.
        type: richtext
    heading: Typefaces
  - contentBlocks:
      - headingBlock:
          level: '3'
          text: NBS type scale
        type: headingBlock
      - imagesCaptionBlock:
          - borderless: true
            image: /img/patterns_typography_typefaces_scale.png
            isLarge: true
        type: imagesCaptionBlock
      - richtext: |-
          **Font stack**

          * NBS Bold: NBS-Bold, Arial-Narrow, Helvetica, Sans-serif;
          * NBS Medium: NBS-Medium, Arial-Narrow, Helvetica, Sans-serif;
          * Cabernet JF Pro: Cabernet-JF-Pro, Serif;
        type: richtext
      - richtext: >-
          **Emphasis**<br>

          All paragraph styles can have **emphasis** applied, which uses the
          bold weight of NBS and the darker text palette colour,
          ‘colour-text-headline’.


          Emphasis should be used sparingly through the text. Although it aids
          skim reading, it can be distracting if it's used too frequently.
        type: richtext
      - headingBlock:
          level: '3'
          text: Cabernet type scale
        type: headingBlock
      - imagesCaptionBlock:
          - borderless: true
            image: /img/patterns_typography_typefaces_cabernet-scale.png
            isLarge: true
        type: imagesCaptionBlock
      - richtext: |-
          **Font stack**

          * **Cabernet JF Pro:** CabernetJFPro, Georgia, serif;
        type: richtext
      - headingBlock:
          level: '3'
          text: Baseline grid
        type: headingBlock
      - richtext: >-
          ![](/img/patterns_typography_typefaces_baseline.png)


          The baseline grid is an invisible framework that underpins the page.
          As with all [spacing](/design-system/layout-foundations/spacing)
          units, it's measured in increments of 4px.




          When positioning the text, ensure the line height (the edges of the
          text box) aligns to the baseline grid and not the text baseline.
        type: richtext
    heading: Type Scale
  - contentBlocks:
      - richtext: >-
          Headings play an important part in the design and layout of a page.
          They improve the readability by breaking up the content and making it
          easier to scan for information.


          Headings provide an easy way to determine a page's content hierarchy.
          Because of this, we should never skip one or more heading levels.
        type: richtext
      - examplesBlock:
          - center: false
            component: headings
            data: |-
              {
                "h1": "This is an H1",
                "h2": "This is an H2",
                "h3": "This is an H3",
                "h4": "This is an H4"
              }
            isLarge: true
        type: examplesBlock
      - rulesImageBlock:
          - image: /img/patterns_typography_typefaces_headers_do.png
            isLarge: false
            rule: Ensure all headers follow a semantic order.
            ruleType: do
          - image: /img/patterns_typography_typefaces_headers_dont.png
            isLarge: false
            rule: Use more than 1 H1 on a page.
            ruleType: dont
        type: rulesImageBlock
    heading: Headings
  - contentBlocks:
      - richtext: >-
          Body is a paragraph of text, which should be left aligned. Be careful
          when aligning centrally and ensure the text does not exceed 3 lines.
        type: richtext
      - examplesBlock:
          - center: false
            component: body
            data: |-
              {
                "text": "This is a lead paragraph and this is {boldText}",
                "boldText": "emphasis",
                "order": ["lead", "paragraph", "caption"]
              }
            isLarge: true
        type: examplesBlock
      - rulesImageBlock:
          - image: /img/patterns_typography_typefaces_paragraph_do.png
            isLarge: false
            rule: >-
              Use a lead paragraph directly under an H1 and not elsewhere on the
              page.
            ruleType: do
          - image: /img/patterns_typography_typefaces_paragraph_dont.png
            isLarge: false
            rule: >-
              Use caption sized text for body as it's harder to read. This will
              also make line lengths too long.
            ruleType: dont
          - image: /img/patterns_typography_typefaces_paragraph_caution.png
            isLarge: true
            rule: >-
              Maximum line lengths should never exceed 8 columns on desktop.
              Going over this will reduce the content's readability.
            ruleType: consider
        type: rulesImageBlock
    heading: Body
  - contentBlocks:
      - richtext: >-
          **Emphasis**<br>

          When using emphasis, the strong tag and the emphasis tag are
          considered semantic markup. This gives added meaning to content, and
          can be interpreted by screen readers.


          **Headings**<br> Headings are crucial for accessibility. They help
          users of screen reading software to quickly navigate a page. They
          provide an easy way to determine a page's content hierarchy. Always
          follow the semantic hierarchy page headings, and never skip one or
          more heading levels.


          **Font sizing<br>**Small text can’t be read by many users. That’s why
          we ensure our font sizes are big enough to read, even on small
          devices. For body copy, we use 20px on large screens and 18px on
          smaller screens.


          **Line spacing**<br>The space between lines of text can pose an issue
          for users with cognitive disabilities. It makes it harder to track
          where they are in a paragraph of text. This is why we have set
          [spacing styles.](/design-system/layout-foundations/spacing/)
        type: richtext
    heading: Accessibility
---

