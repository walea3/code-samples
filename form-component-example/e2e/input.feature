@all @form @input
Feature: NEL UI - Input

  Scenario Outline: Default input field css property checks when normal
    Given I navigate to the "input states" page
    Then I should see the "input states normal input" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property           | css_value_key              |
      | height                 | normal height              |
      | border-top-color       | normal border-color        |
      | border-top-style       | normal border-top-style    |
      | border-top-width       | normal border-top-width    |
      | border-top-left-radius | normal border-radius       |
      | transition-property    | normal transition-property |
      | transition-duration    | normal transition-duration |

  Scenario Outline: Default input field css property checks when normal
    Given I navigate to the "input states" page
    Then I should see the "input states normal input field" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property   | css_value_key               |
      | padding-right  | normal input padding-right  |
      | padding-left   | normal input padding-left   |
      | padding-top    | normal input padding-top    |
      | padding-bottom | normal input padding-bottom |

  @smoke
  Scenario: Default input field text entry
    Given I navigate to the "input states" page
    And I enter "test" page content in the "input states normal input field" field
    Then I should see the "input states normal input field" value display "test" page content

  @notSafariOrMobile
  Scenario Outline: Default Input field visual states
    Given I navigate to the "input states" page
    Then the "input states normal input field" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Default Input field visual states
    Given I navigate to the "input states" page
    Then the "input states normal input field" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

  Scenario Outline: Disabled input field css property checks when normal
    Given I navigate to the "input states" page
    Then I should see the "input states disabled input" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key       |
      | background-color | disabled background |
      | cursor           | disabled cursor     |

  @notSafariOrMobile
  Scenario Outline: Disabled Input field visual states
    Given I navigate to the "input states" page
    Then the "input states disabled input field" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |

  @safariAndMobile
  Scenario Outline: Disabled Input field visual states
    Given I navigate to the "input states" page
    Then the "input states disabled input field" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |

  Scenario Outline: Warning input field css property checks when normal
    Given I navigate to the "input states" page
    Then I should see the "input states warning input" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key        |
      | background-color | warning background   |
      | border-top-color | warning border-color |

  @manual
  Scenario Outline: Warning input field css property checks when focussed
    Given I navigate to the "input states" page
    And the "input states warning input field" is in "Focus" state
    Then I should see the "input states warning input field" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key      |
      | box-shadow   | warning box-shadow |

  @notSafariOrMobile
  Scenario Outline: Warning Input field visual states
    Given I navigate to the "input states" page
    Then the "input states warning input field" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Warning Input field visual states
    Given I navigate to the "input states" page
    Then the "input states warning input field" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

  Scenario Outline: Error input field css property checks when normal
    Given I navigate to the "input states" page
    Then I should see the "input states error input" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key      |
      | background-color | error background   |
      | border-top-color | error border-color |

  @manual
  Scenario Outline: Error input field css property checks when focussed
    Given I navigate to the "input states" page
    And the "input states error input field" is in "Focus" state
    Then I should see the "input states error input field" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key    |
      | box-shadow   | error box-shadow |

  @notSafariOrMobile
  Scenario Outline: Error Input field visual states
    Given I navigate to the "input states" page
    Then the "input states error input field" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Error Input field visual states
    Given I navigate to the "input states" page
    Then the "input states error input field" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

  Scenario Outline: Prefix field css property checks
    Given I navigate to the "input prefix" page
    Then I should see the "input prefix only prefix" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key               |
      | padding-left | input prefix suffix padding |

  Scenario Outline: Prefix input field css property checks
    When I navigate to the "input prefix" page
    Then I should see the "input prefix input" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property  | css_value_key               |
      | padding-left  | input prefix suffix padding |
      | padding-right | input prefix suffix padding |

  Scenario Outline: Suffix input field css property checks
    Given I navigate to the "input prefix" page
    Then I should see the "input prefix only suffix" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property  | css_value_key               |
      | padding-right | input prefix suffix padding |

  @smoke
  Scenario: Prefix input page visual states
    Given I navigate to the "input prefix" page
    Then the the "input prefix only prefix" is displayed as expected in "Normal" state

  @smoke
  Scenario: Input sublabel page visual states
    Given I navigate to the "input label" page
    Then the the 1st "input label input" is displayed as expected in "Normal" state

  @smoke
  Scenario: Input types page visual states
    Given I navigate to the "input types" page
    Then the the 1st "input types input" is displayed as expected in "Normal" state

  @smoke
  Scenario: Character size based input width visual states
    Given I navigate to the "input size" page
    Then the the 1st "input size input" is displayed as expected in "Normal" state
    Then the the 5th "input size input" is displayed as expected in "Normal" state
    Then the the last "input size input" is displayed as expected in "Normal" state

  Scenario: Check input widths based on character size
    Given I navigate to the "input size" page
    Then I should see the 2nd "input size input" element property "style" match "input size 3 width" global content
    Then I should see the 5th "input size input" element property "style" match "input size 6 width" global content
