@all @form @check
Feature: NEL UI - Checkbox

  Scenario Outline: Checkbox css property checks
    Given I navigate to the "checkbox states" page
    Then I should see the "checkbox states normal container" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property   | css_value_key        |
      | padding-top    | check padding-top    |
      | padding-bottom | check padding-bottom |

  Scenario Outline: Normal checkbox icon css property checks
    Given I navigate to the "checkbox states" page
    Then I should see the "checkbox states normal icon" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property           | css_value_key                    |
      | height                 | normal check height              |
      | width                  | normal check width               |
      | margin-right           | normal check margin-right        |
      | border-top-color       | normal check border-color        |
      | border-top-style       | normal check border-top-style    |
      | border-top-width       | normal check border-top-width    |
      | border-top-left-radius | normal check border-radius       |
      | transition-duration    | normal check transition-duration |

  @notSafariOrMobile
  Scenario Outline: Normal check box visual states
    Given I navigate to the "checkbox states" page
    Then the "checkbox states normal label" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Normal check box visual states
    Given I navigate to the "checkbox states" page
    Then the "checkbox states normal label" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Focus  |

  Scenario Outline: Disabled checkbox icon css property checks
    Given I navigate to the "checkbox states" page
    Then I should see the "checkbox states disabled icon" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key       |
      | background-color | disabled background |
      | cursor           | disabled cursor     |

  @smoke
  Scenario: Disabled check box visual states
    Given I navigate to the "checkbox states" page
    Then the "checkbox states disabled label" is displayed as expected in "Normal" state

  Scenario Outline: Warning checkbox icon css property checks
    Given I navigate to the "checkbox states" page
    Then I should see the "checkbox states warning icon" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key        |
      | background-color | warning background   |
      | border-top-color | warning border-color |

  @notSafariOrMobile
  Scenario Outline: Warning check box visual states
    Given I navigate to the "checkbox states" page
    Then the "checkbox states warning label" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Warning check box visual states
    Given I navigate to the "checkbox states" page
    Then the "checkbox states warning label" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

  Scenario Outline: Error checkbox icon css property checks
    Given I navigate to the "checkbox states" page
    Then I should see the "checkbox states error icon" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key      |
      | background-color | error background   |
      | border-top-color | error border-color |

  Scenario Outline: Error check box visual states
    Given I navigate to the "checkbox states" page
    Then the "checkbox states error label" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @smoke
  Scenario: Custom label check box visual states
    Given I navigate to the "checkbox custom label" page
    Then the "checkbox custom label container" is displayed as expected in "Normal" state
