@all @form @formsfieldstates
Feature: NEL UI - Form Fields

  Background:
    Given I navigate to the "field states" page

  @notSafariOrMobile
  Scenario: Basic field css property checks
    Then I should see the "field states basic label" attributes match as expected from global content
      | property    | value            |
      | font-size   | h4 L font-size   |
      | line-height | h4 L line-height |
      | color       | h4 L color       |
      | font-weight | h4 L font-weight |
    And I should see the "field states basic input" attributes match as expected from global content
      | property   | value                  |
      | margin-top | field input margin-top |

  @notSafariOrMobile
  Scenario: Field with description css property checks
    Then I should see the "field states desc text" attributes match as expected from global content
      | property    | value                 |
      | font-size   | small L font-size     |
      | line-height | small L line-height   |
      | color       | small L color         |
      | font-weight | small L font-weight   |
      | margin-top  | field desc margin-top |

  @desktopOnly
  Scenario: Field with warnings css property checks
    Then I should see the "field states warning field" attributes match as expected from global content
      | property          | value                                   |
      | border-top-color  | warning message border-color            |
      | border-left-style | formAlertMessage form border-left-style |
      | border-left-width | formAlertMessage form border-left-width |
      | padding-left      | space tracker large                     |

  @tabletOnly
  Scenario: Field with warnings css property checks
    Then I should see the "field states warning field" attributes match as expected from global content
      | property          | value                                   |
      | border-top-color  | warning message border-color            |
      | border-left-style | formAlertMessage form border-left-style |
      | border-left-width | formAlertMessage form border-left-width |
      | padding-left      | space tracker medium                    |

  @mobileOnly
  Scenario: Field with warnings css property checks
    Then I should see the "field states warning field" attributes match as expected from global content
      | property          | value                                   |
      | border-top-color  | warning message border-color            |
      | border-left-style | formAlertMessage form border-left-style |
      | border-left-width | formAlertMessage form border-left-width |
      | padding-left      | space tracker small                     |

  @notSafariOrMobile
  Scenario: Warning alert css property checks
    And I should see the "field states warning alert" element attribute "margin-top" match "field alert margin-top" global content


  @desktopOnly
  Scenario: Field with error css property checks
    Then I should see the "field states error field" attributes match as expected from global content
      | property          | value                                   |
      | border-top-color  | error message border-color              |
      | border-left-style | formAlertMessage form border-left-style |
      | border-left-width | formAlertMessage form border-left-width |
      | padding-left      | space tracker large                     |

  @tabletOnly
  Scenario: Field with error css property checks
    Then I should see the "field states error field" attributes match as expected from global content
      | property          | value                                   |
      | border-top-color  | error message border-color              |
      | border-left-style | formAlertMessage form border-left-style |
      | border-left-width | formAlertMessage form border-left-width |
      | padding-left      | space tracker medium                    |

  @mobileOnly
  Scenario: Field with error css property checks
    And I should see the "field states error field" element attribute "<property>" match "<value>" global content
      | property          | value                                   |
      | border-top-color  | error message border-color              |
      | border-left-style | formAlertMessage form border-left-style |
      | border-left-width | formAlertMessage form border-left-width |
      | padding-left      | space tracker small                     |

  Scenario: Check whether optional text appears when the fieldset is optional
    Then I should see the "field states optional field label" text match "(Optional)" content
    And the "field states optional field" is displayed as expected in "Normal" state

  Scenario: Check whether customised optional text appears when the fieldset is set with custom optional text
    Then I should see the "field states optional custom field label" text match "(Dewisol)" content
    And the "field states optional custom field" is displayed as expected in "Normal" state

  Scenario: Check whether a long field label with optional text wraps under
    Then I should see the "field states textarea error field label" text match "(Optional)" content
    And the "field states textarea error field" is displayed as expected in "Normal" state

  @smoke
  Scenario: Check whether the input field is focussed when the label is clicked
    When I click on the "field states basic label"
    Then the "field states basic field" is displayed as expected in "Normal" state

  Scenario: Check whether the input field with warning is focussed when the label is clicked
    When I click on the "field states warning label"
    Then the "field states warning field" is displayed as expected in "Normal" state

  Scenario: Check whether the textarea with error is focussed when the label is clicked
    When I click on the "field states textarea error field label"
    Then the "field states textarea error field" is displayed as expected in "Normal" state

  Scenario: Check whether the dropdown focussed when the label is clicked
    When I click on the "field states dropdown field label"
    Then the "field states dropdown field" is displayed as expected in "Normal" state
