@all @form @dropdown
Feature: NEL UI - Dropdown Visual States

  @notSafariOrMobile
  Scenario Outline: Normal dropdown visual states
    Given I navigate to the "dropdown states" page
    Then the "dropdown states normal listbox" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Normal dropdown visual states
    Given I navigate to the "dropdown states" page
    Then the "dropdown states normal listbox" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Focus  |

  @notSafariOrMobile
  Scenario Outline: Warning dropdown visual states
    Given I navigate to the "dropdown states" page
    Then the "dropdown states warning listbox" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Warning dropdown visual states
    Given I navigate to the "dropdown states" page
    Then the "dropdown states warning listbox" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Focus  |

  @notSafariOrMobile
  Scenario Outline: Error dropdown visual states
    Given I navigate to the "dropdown states" page
    Then the "dropdown states error listbox" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Error dropdown visual states
    Given I navigate to the "dropdown states" page
    Then the "dropdown states error listbox" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Focus  |

  @notSafariOrMobile
  Scenario Outline: Disabled dropdown visual states
    Given I navigate to the "dropdown states" page
    And the "dropdown states disabled listbox" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Hover  |

  @safariAndMobile
  Scenario Outline: Disabled dropdown visual states
    Given I navigate to the "dropdown states" page
    And the "dropdown states disabled listbox" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |

  Scenario Outline: Dropdown listbox css property checks
    Given I navigate to the "dropdown states" page
    And I should see the "dropdown states normal listbox" element attribute "<css_property>" match "<css_value_key>" global content
    Examples:
      | css_property           | css_value_key           |
      | padding-top            | dropdown padding-top    |
      | padding-bottom         | dropdown padding-bottom |
      | padding-right          | dropdown padding-right  |
      | padding-left           | dropdown padding-left   |
      | border-top-left-radius | dropdown border-radius  |

  @desktopOnly
  Scenario Outline: Dropdown list css property checks
    Given I navigate to the "dropdown states" page
    When I click on the "dropdown states normal listbox"
    And I should see the 1st "dropdown states normal dropdown option" element attribute "<css_property>" match "<css_value_key>" global content
    Examples:
      | css_property   | css_value_key                  |
      | padding-top    | dropdown option padding-top    |
      | padding-bottom | dropdown option padding-bottom |
      | padding-right  | dropdown option padding-right  |
      | padding-left   | dropdown option padding-left   |
      | font-size      | p L font-size                  |
      | line-height    | p L line-height                |

  Scenario: Check the visual when the dropdown selected value is long
    Given I navigate to the "dropdown states" page
    When I click on the "dropdown states normal listbox"
    Then I should see the 2nd "dropdown states normal dropdown option"
    When I click on the 2nd "dropdown states normal dropdown option"
    Then the "dropdown states normal listbox" is displayed as expected in "Normal" state

  @notSafariOrMobile
  Scenario: Check the visual state when previous item is navigated
    Given I navigate to the "dropdown default selection" page
    When I press tab to focus on "dropdown default selection second dropdown" from "dropdown default selection first dropdown"
    And I press "space" on the "dropdown default selection second dropdown"
    Then I should see the 6th "dropdown default selection second dropdown option" element property "aria-selected" match "aria-prop true" global content
    When I press "arrowUp" on the 6th "dropdown default selection second dropdown option"
    And the "dropdown default selection second dropdown" is displayed as expected in "<State>" state
