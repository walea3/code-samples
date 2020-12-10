---
templateKey: design-system
title: Grid
lead: >-
  The grid is an invisible framework of columns, gutters and margins. It dictates the size and width of everything on a page, creating a sense of visual unity.
  
  
  Without it, the page would become chaotic and unreadable.
  
  

inDevelopment: false
thumbnail: /img/layout-foundation_grid.png
web:
  contentSections:
    - contentBlocks:
        - richtext: >-
            ![](/img/pattern_grid_specs.png)
            
            
            All margin and horizontal gutter measurements are multiples of 4px. This helps with our vertical and horizontal rhythm.
            
            

          type: richtext
        - headingBlock:
            level: '3'
            text: Elements of the grid
          type: headingBlock
        - richtext: |-
            ![](/img/pattern_grid_elements.png)

            1. **Columns**<br>
               The columns dictate the size and width of all objects on the grid.
            2. **Margins**<br>
               Margins are the outer space around either side of the columns. They ensure objects don't hit the edge of the page, to give it more space. Margins increase on larger viewports, as the columns become larger.
            3. **Gutters**<br>
               The gutters are the spaces between columns. They separate the content, giving it room to breathe. Gutters increase on larger viewports.
            4. **Baseline grid**<br>
                The baseline is an invisible horizontal grid, measured in increments of 4px. All objects and typography are aligned to the baseline, which creates a vertical rhythm on the page.
          type: richtext
        - headingBlock:
            level: '3'
            text: Using the grid
          type: headingBlock
        - rulesImageBlock:
            - image: /img/pattern_grid_using-the-grid_do.png
              isLarge: true
              rule: >-
                Apply the grid across all breakpoints. When using imagery with text, ensure the image size doesn't overshadow any related content. Bear in mind the line length and [content readability](/guides/readability).
                
                

              ruleType: do
            - image: /img/pattern_grid_using-the-grid_dont.png
              isLarge: true
              rule: >-
                Break away from the page templates or alter the column usage patterns.
                
                

              ruleType: dont
          type: rulesImageBlock
      heading: Grid specs
    - contentBlocks:
        - headingBlock:
            level: '3'
            text: Fluid width layout
          type: headingBlock
        - richtext: Percentage-based widths allow fluid resizing of columns and rows.
          type: richtext
        - examplesBlock:
            - center: false
              component: fluidgrid
              isLarge: true
          type: examplesBlock
        - headingBlock:
            level: '3'
            text: Responsive layout
          type: headingBlock
        - richtext: >-
            Columns can be responsive across different breakpoints. This enables us to specify different column sizes, offsets, alignments and distribution at various viewports.
            
            

          type: richtext
        - examplesBlock:
            - center: false
              component: responsivegrid
              isLarge: true
          type: examplesBlock
        - headingBlock:
            level: '3'
            text: Column offsets
          type: headingBlock
        - richtext: >-
            Offsets work like an invisible column, which precedes the visible column on the page.
            
            

          type: richtext
        - examplesBlock:
            - center: false
              component: columnoffset
              isLarge: true
          type: examplesBlock
        - headingBlock:
            level: '3'
            text: Nested grids
          type: headingBlock
        - richtext: >-
            These are grids, which sit inside of other grids. An example of this would be a card with multiple columns inside.
            
            

          type: richtext
        - examplesBlock:
            - center: false
              component: nestedgrid
              isLarge: true
          type: examplesBlock
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
