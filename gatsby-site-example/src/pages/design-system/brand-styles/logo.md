---
templateKey: design-system
title: Logo
lead: >-
  Our logo is our main visual identity and has been around for many years. It's
  made up of our [brand colours](/design-system/brand-styles/colour/), the
  village icon and the serif typeface.
inDevelopment: false
thumbnail: /img/brand-style_logo.png
contentSections:
  - contentBlocks:
      - richtext: There are 2 variants of our logo that can be used for digital formats.
        type: richtext
      - imagesTitleDescBlock:
          - description: >-
              This is our main logo. It should be displayed at a minimum size of
              140px x 56px.
            hasImageFirst: false
            heading: Full colour logo
            image: /img/logo_styles_full-colour.png
            isLarge: false
          - description: >-
              Our small icon logo has been developed for use in smaller spaces.
              This version of the logo should be displayed at a minimum size of
              40px x 40px.
            hasImageFirst: false
            heading: Icon logo
            image: /img/logo_styles_icon-logo.png
            isLarge: false
        type: imagesTitleDescBlock
      - imagesTitleDescBlock:
          - description: >-
              A favicon is used by most web browsers to show a graphical
              representation of the site being visited, often displayed in the
              header and bookmarks.
            hasImageFirst: false
            heading: Favicon
            image: /img/logo_styles_favicon.png
            isLarge: false
        type: imagesTitleDescBlock
    heading: Styles
  - contentBlocks:
      - richtext: >-
          The full colour logo is mainly used in the header area of the website.
          When we use the logo digitally, we should only use the RGB version.
        type: richtext
      - rulesImageBlock:
          - image: /img/logo_usage_colour-backgrounds.png
            isLarge: false
            rule: >-
              Place the logo on the NBS blue or red background without a holding
              keyline.
            ruleType: dont
          - image: /img/logo_usage_stretch.png
            isLarge: false
            rule: Distort or edit the logo.
            ruleType: dont
        type: rulesImageBlock
      - headingBlock:
          level: '3'
          text: Exclusion zones
        type: headingBlock
      - richtext: >-
          The exclusion zone is an invisible barrier around the logo and icon.
          It protects them and allows them to breathe. Do not place anything
          inside the exclusion zones.
        type: richtext
      - imagesCaptionBlock:
          - borderless: false
            caption: Full colour logo exclusion zone.
            image: /img/logo_usage_exclusion-full.png
            isLarge: false
          - borderless: false
            caption: Icon logo exclusion zone.
            image: /img/logo_usage_exclusion-icon.png
            isLarge: false
        type: imagesCaptionBlock
    heading: Usage and placement
  - contentBlocks:
      - richtext: >-
          Alt text can be used to add a text description of our logo where our
          users cannot access the image.


          We add alt text differently depending on where the logo image appears
          and whether or not it’s interactive.
        type: richtext
      - headingBlock:
          level: '3'
          text: 'Interactive logo '
        type: headingBlock
      - richtext: >-
          Where the logo is used to link to another area of the site (eg to the
          homepage from the header), we add alt text (to describe the image) and
          an aria label (to describe the destination of the link).


          For an interactive logo:


          alt=“Noop”


          aria-label=“Link to home” or aria-label=“Link to noop.co.uk”
        type: richtext
      - headingBlock:
          level: '3'
          text: Image-only logo
        type: headingBlock
      - richtext: >-
          Where the logo isn’t interactive (eg it is used within the content of
          a page), you only need the alt text. You just need to add the word
          ‘logo’ to the description.


          For image-only logo:


          alt=“Noop logo”
        type: richtext
      - headingBlock:
          level: '3'
          text: Further reading
        type: headingBlock
      - richtext: >-
          Visit Noop’s Designing for Everybody toolkit for more guidance
          on using alt text and aria labels.
        type: richtext
        type: richtext
    heading: Accessibility
---

