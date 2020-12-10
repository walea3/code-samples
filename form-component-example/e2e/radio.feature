@all @form @radio
Feature: NEL UI - Radiobutton

  Scenario Outline: Normal radio icon css property checks
    Given I navigate to the "radio states" page
    Then I should see the "radio states normal icon" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property        | css_value_key                    |
      | height              | normal check height              |
      | width               | normal check width               |
      | margin-right        | normal check margin-right        |
      | border-top-color    | normal check border-color        |
      | border-top-style    | normal check border-top-style    |
      | border-top-width    | normal check border-top-width    |
      | transition-duration | normal check transition-duration |

  @notSafariOrMobile
  Scenario Outline: Normal radio button visual states
    Given I navigate to the "radio states" page
    Then the "radio states normal label" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Normal radio button visual states
    Given I navigate to the "radio states" page
    Then the "radio states normal label" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

  Scenario Outline: Disabled radio icon css property checks
    Given I navigate to the "radio states" page
    Then I should see the "radio states disabled icon" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key       |
      | background-color | disabled background |
      | cursor           | disabled cursor     |

  Scenario: Disabled radio button visual states
    Given I navigate to the "radio states" page
    Then the "radio states disabled label" is displayed as expected in "Normal" state

  Scenario Outline: Warning radio icon css property checks
    Given I navigate to the "radio states" page
    Then I should see the "radio states warning icon" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key        |
      | background-color | warning background   |
      | border-top-color | warning border-color |

  Scenario Outline: Warning radio button visual states
    Given I navigate to the "radio states" page
    Then the "radio states warning label" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  Scenario Outline: Error radio icon css property checks
    Given I navigate to the "radio states" page
    Then I should see the "radio states error icon" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key      |
      | background-color | error background   |
      | border-top-color | error border-color |

  @notSafariOrMobile
  Scenario Outline: Error radio button visual states
    Given I navigate to the "radio states" page
    Then the "radio states error label" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Error radio button visual states
    Given I navigate to the "radio states" page
    Then the "radio states error label" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

  @smoke
  Scenario: Custom label radio visual states
    Given I navigate to the "radio custom label" page
    Then the "radio custom label container" is displayed as expected in "Normal" state

