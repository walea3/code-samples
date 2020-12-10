@all @form @textarea
Feature: NEL UI - Text area

  Scenario Outline: Default textarea field css property checks when normal
    Given I navigate to the "textarea states" page
    Then I should see the "textarea states normal" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property           | css_value_key               |
      | min-height             | textarea min-height         |
      | border-top-color       | normal border-color         |
      | border-top-style       | normal border-top-style     |
      | border-top-width       | normal border-top-width     |
      | border-top-left-radius | normal border-radius        |
      | transition-property    | normal transition-property  |
      | transition-duration    | normal transition-duration  |
      | padding-right          | normal input padding-right  |
      | padding-left           | normal input padding-left   |
      | padding-top            | normal input padding-top    |
      | padding-bottom         | normal input padding-bottom |

  @smoke
  Scenario: Normal textarea field text entry
    Given I navigate to the "textarea states" page
    And I enter "test" page content in the "textarea states normal" field
    Then I should see the "textarea states normal" value display "test" page content
    Then the "textarea states normal" is displayed as expected in "Normal" state

  @notSafariOrMobile
  Scenario Outline: Default textarea field visual states
    Given I navigate to the "textarea states" page
    Then the "textarea states normal" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Default textarea field visual states
    Given I navigate to the "textarea states" page
    Then the "textarea states normal" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

  Scenario Outline: Disabled textarea field css property checks when normal
    Given I navigate to the "textarea states" page
    Then I should see the "textarea states disabled" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key       |
      | background-color | disabled background |
      | cursor           | disabled cursor     |

  @notSafariOrMobile
  Scenario Outline: Disabled textarea field visual states
    Given I navigate to the "textarea states" page
    Then the "textarea states disabled" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Disabled textarea field visual states
    Given I navigate to the "textarea states" page
    Then the "textarea states disabled" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |

  Scenario Outline: Warning textarea field css property checks when normal
    Given I navigate to the "textarea states" page
    Then I should see the "textarea states warning" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key        |
      | background-color | warning background   |
      | border-top-color | warning border-color |

  @manual
  Scenario Outline: Warning textarea field css property checks when focussed
    Given I navigate to the "textarea states" page
    And the "textarea states warning" is in "Focus" state
    Then I should see the "textarea states warning" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key               |
      | box-shadow   | text area normal box-shadow |

  @notSafariOrMobile
  Scenario Outline: Warning textarea field visual states
    Given I navigate to the "textarea states" page
    Then the "textarea states warning" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Warning textarea field visual states
    Given I navigate to the "textarea states" page
    Then the "textarea states warning" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

  Scenario Outline: Error textarea field css property checks when normal
    Given I navigate to the "textarea states" page
    Then I should see the "textarea states error" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property     | css_value_key      |
      | background-color | error background   |
      | border-top-color | error border-color |

  @manual
  Scenario Outline: Error textarea field css property checks when focussed
    Given I navigate to the "textarea states" page
    And the "textarea states error" is in "Focus" state
    Then I should see the "textarea states error" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key             |
      | box-shadow   | textarea error box-shadow |

  @notSafariOrMobile
  Scenario Outline: Error textarea field visual states
    Given I navigate to the "textarea states" page
    Then the "textarea states error" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Error textarea field visual states
    Given I navigate to the "textarea states" page
    Then the "textarea states error" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |

