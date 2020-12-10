@all @form @fieldsetPatterns
Feature: NEL UI - Inline Fields

  @smoke
  Scenario: Checkbox optional fieldset visual states in normal state
    Given I navigate to the "fieldset" page
    Then I should see the "fieldset checkbox fieldset label" text match "(Optional)" content
    And the "fieldset checkbox fieldset" is displayed as expected in "Normal" state

  Scenario: Checking all check boxes in a fieldset are clickable
    Given I navigate to the "fieldset" page
    And I click on the following elements:
      | element             |
      | fieldset checkbox a |
      | fieldset checkbox b |
      | fieldset checkbox c |
    Then the "fieldset checkbox a" is displayed as expected in "Normal" state

  Scenario: Checking only one radio box in a fieldset are clickable
    Given I navigate to the "fieldset" page
    And I click on the following elements:
      | element              |
      | fieldset radio yes   |
      | fieldset radio no    |
      | fieldset radio maybe |
    Then the "fieldset radio maybe" is displayed as expected in "Normal" state


  Scenario Outline: Inline fieldset container css property checks
    Given I navigate to the "inline fieldset" page
    Then I should see the "inline fieldset input container" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key                         |
      | margin-right | fieldset inline inputdiv margin-right |
      | margin-top   | fieldset inline inputdiv margin-top   |

  Scenario Outline: Inline fieldset label css property checks
    Given I navigate to the "inline fieldset" page
    Then I should see the "inline fieldset input label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key                           |
      | margin-right | fieldset inline inputlabel margin-right |

  @desktopOnly
  Scenario Outline: Inline checkbox fieldset gutter css property checks
    Given I navigate to the "inline fieldset" page
    Then I should see the "inline fieldset checkbox label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key       |
      | margin-right | space tracker large |

  @tabletOnly
  Scenario Outline: Inline checkbox fieldset gutter css property checks
    Given I navigate to the "inline fieldset" page
    Then I should see the "inline fieldset checkbox label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key        |
      | margin-right | space tracker medium |

  @mobileOnly
  Scenario Outline: Inline checkbox fieldset gutter css property checks
    Given I navigate to the "inline fieldset" page
    Then I should see the "inline fieldset checkbox label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key       |
      | margin-right | space tracker small |

  @desktopOnly
  Scenario Outline: Inline radio fieldset gutter css property checks
    Given I navigate to the "inline fieldset" page
    Then I should see the "inline fieldset radio label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key       |
      | margin-right | space tracker large |

  @tabletOnly
  Scenario Outline: Inline radio fieldset gutter css property checks
    Given I navigate to the "inline fieldset" page
    Then I should see the "inline fieldset radio label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key        |
      | margin-right | space tracker medium |

  @mobileOnly
  Scenario Outline: Inline radio fieldset gutter css property checks
    Given I navigate to the "inline fieldset" page
    Then I should see the "inline fieldset radio label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key       |
      | margin-right | space tracker small |

  @smoke
  Scenario: Inline fieldset visual states in normal state
    Given I navigate to the "inline fieldset" page
    Then the "inline fieldset input fieldset" is displayed as expected in "Normal" state

  @smoke
  Scenario: Shared alerts fieldset visual states in normal state
    Given I navigate to the "shared alerts" page
    Then the "shared alerts input fieldset" is displayed as expected in "Normal" state

  @smoke
  Scenario: Individual field alerts visual states in normal state
    Given I navigate to the "individual alerts" page
    Then the "individual alerts input fieldset" is displayed as expected in "Normal" state

  Scenario Outline: Field action visual states
    Given I navigate to the "field action" page
    Then the "field action basic input" is displayed as expected in "<State>" state
    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  Scenario Outline: Field action top label css property checks
    Given I navigate to the "field action" page
    Then I should see the "field action basic top left label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key                 |
      | margin-right | fieldset action label spacing |

  Scenario Outline: Field action bottom label css property checks
    Given I navigate to the "field action" page
    Then I should see the "field action basic bottom left label" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key                           |
      | margin-right | fieldset action label spacing           |
      | max-width    | fieldset action bottom labels max-width |

  Scenario Outline: Field action bottom label container css property checks
    Given I navigate to the "field action" page
    Then I should see the "field action basic bottom container" element attribute "<css_property>" match "<css_value_key>" global content

    Examples:
      | css_property | css_value_key                               |
      | margin-top   | fieldset action bottom container margin-top |

  Scenario: Password show/hide check
    Given I navigate to the "field action" page
    And I enter "test" page content in the "field action pwd action input" field
    When I click on the "field action pwd action top label"
    Then the "field action pwd action input" is displayed as expected in "Normal" state
    When I click on the "field action pwd action top label"
    Then the "field action pwd action input" is displayed as expected in "Focus" state

  Scenario: Field action with warning visual states
    Given I navigate to the "field action" page
    Then the "field action warning action" is displayed as expected in "Normal" state

  Scenario: Field action with error visual states
    Given I navigate to the "field action" page
    Then the "field action error action" is displayed as expected in "Normal" state

  Scenario: Date Day-Month-Year visual states
    Given I navigate to the "field date" page
    Then the "field date dmy" is displayed as expected in "Normal" state

  Scenario: Date Day-Month visual states
    Given I navigate to the "field date" page
    Then the "field date dm" is displayed as expected in "Normal" state

  Scenario: Date Month-Year visual states
    Given I navigate to the "field date" page
    Then the "field date my" is displayed as expected in "Normal" state

  @smoke
  Scenario: Check whether the input field focussed when the sublabel is clicked
    Given I navigate to the "field date" page
    When I click on the "field date dmy label"
    Then the "field date dmy" is displayed as expected in "Normal" state

  Scenario: Check whether the input field is not focussed when there is a sublabel and when the fieldlabel is clicked
    Given I navigate to the "field date" page
    When I click on the "field date field label"
    Then the "field date dmy" is displayed as expected in "Normal" state







