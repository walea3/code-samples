@all @form @dropdown
Feature: NEL UI - Dropdown

  Scenario: Open dropdown with mouse click
    Given I navigate to the "dropdown states" page
    When I click on the "dropdown states normal listbox"
    Then I should see the 1st "dropdown states normal dropdown option"
    And the "dropdown states normal listbox" is displayed as expected in "Normal" state

  @notSafariOrMobile
  Scenario: Open dropdown with key tab + space
    Given I navigate to the "dropdown states" page
    When I press tab to focus on "dropdown states warning listbox" from "dropdown states normal listbox"
    And I press "space" on the "dropdown states warning listbox"
    Then I should see the 1st "dropdown states warning dropdown option"
    And I should see the "dropdown states warning listbox" element property "aria-expanded" match "aria-prop true" global content

  @notSafariOrMobile
  Scenario: Open dropdown with key tab + up arrow
    Given I navigate to the "dropdown states" page
    When I press tab to focus on "dropdown states warning listbox" from "dropdown states normal listbox"
    And I press "arrowUp" on the "dropdown states warning listbox"
    Then I should see the 1st "dropdown states warning dropdown option"
    And I should see the "dropdown states warning listbox" element property "aria-expanded" match "aria-prop true" global content

  @notSafariOrMobile
  Scenario: Open dropdown with key tab + down arrow
    Given I navigate to the "dropdown states" page
    When I press tab to focus on "dropdown states warning listbox" from "dropdown states normal listbox"
    And I press "arrowDown" on the "dropdown states warning listbox"
    Then I should see the 2nd "dropdown states warning dropdown option"
    And I should see the "dropdown states warning listbox" element property "aria-expanded" match "aria-prop true" global content

  @smoke
  Scenario: Select an option with mouse click
    Given I navigate to the "dropdown states" page
    When I click on the "dropdown states normal listbox"
    Then I should see the 1st "dropdown states normal dropdown option"
    When I click on the 1st "dropdown states normal dropdown option"
    Then I should see the "dropdown states normal listbox" text match "Option 1" content
    And I should see the "dropdown states normal listbox" element property "aria-expanded" match "aria-prop false" global content

  @notSafariOrMobile
  Scenario: Select an option with space bar
    Given I navigate to the "dropdown states" page
    When I press tab to focus on "dropdown states warning listbox" from "dropdown states normal listbox"
    And I press "space" on the "dropdown states warning listbox"
    And I press "space" on the 1st "dropdown states warning dropdown option"
    Then I should see the "dropdown states warning listbox" text match "Option 1" content
    And I should see the "dropdown states warning listbox" element property "aria-expanded" match "aria-prop false" global content

  @notSafariOrMobile
  Scenario: Select an option with enter
    Given I navigate to the "dropdown states" page
    When I press tab to focus on "dropdown states warning listbox" from "dropdown states normal listbox"
    And I press "space" on the "dropdown states warning listbox"
    And I press "enter" on the "dropdown states warning listbox"
    Then I should see the "dropdown states warning listbox" text match "Option 1" content
    And I should see the "dropdown states warning listbox" element property "aria-expanded" match "aria-prop false" global content

  @notSafariOrMobile
  Scenario: Highlight first option when dropdown is open
    Given I navigate to the "dropdown states" page
    When I press tab to focus on "dropdown states warning listbox" from "dropdown states normal listbox"
    And I press "space" on the "dropdown states warning listbox"
    Then I should see the 1st "dropdown states warning dropdown option" element property "aria-selected" match "aria-prop true" global content
    And the "dropdown states warning listbox" is displayed as expected in "Normal" state


  @notSafariOrMobile
  Scenario: Highlight first option using up arrow when dropdown is open
    Given I navigate to the "dropdown states" page
    When I press tab to focus on "dropdown states warning listbox" from "dropdown states normal listbox"
    And I press "space" on the "dropdown states warning listbox"
    And I press "arrowUp" on the "dropdown states warning listbox"
    Then I should see the 1st "dropdown states warning dropdown option" element property "aria-selected" match "aria-prop true" global content
    And the "dropdown states warning listbox" is displayed as expected in "Normal" state

  Scenario: Check the drop down with default selection is loaded with selected option
    Given I navigate to the "dropdown default selection" page
    Then I should see the "dropdown default selection second dropdown" text match "Option 6" content
    And the "dropdown default selection second dropdown" is displayed as expected in "Normal" state

  @notSafariOrMobile
  Scenario: Navigate to the previous item using up arrow and select it
    Given I navigate to the "dropdown default selection" page
    When I press tab to focus on "dropdown default selection second dropdown" from "dropdown default selection first dropdown"
    And I press "space" on the "dropdown default selection second dropdown"
    Then I should see the 6th "dropdown default selection second dropdown option" element property "aria-selected" match "aria-prop true" global content
    When I press "arrowUp" on the 6th "dropdown default selection second dropdown option"
    Then I should see the 5th "dropdown default selection second dropdown option" element property "aria-selected" match "aria-prop true" global content
    And I press "enter" on the 5th "dropdown default selection second dropdown option"
    Then I should see the "dropdown default selection second dropdown" text match "Option 5" content

  @notSafariOrMobile
  Scenario: Navigate to the next item using down arrow and select it
    Given I navigate to the "dropdown default selection" page
    When I press tab to focus on "dropdown default selection second dropdown" from "dropdown default selection first dropdown"
    And I press "space" on the "dropdown default selection second dropdown"
    Then I should see the 6th "dropdown default selection second dropdown option" element property "aria-selected" match "aria-prop true" global content
    When I press "arrowDown" on the 6th "dropdown default selection second dropdown option"
    Then I should see the 7th "dropdown default selection second dropdown option" element property "aria-selected" match "aria-prop true" global content
    And I press "enter" on the 7th "dropdown default selection second dropdown option"
    Then I should see the "dropdown default selection second dropdown" text match "Option 7" content
    And I should see the "dropdown default selection second dropdown" element property "aria-expanded" match "aria-prop false" global content

  Scenario: Close drop down with mouse click
    Given I navigate to the "dropdown states" page
    When I click on the "dropdown states normal listbox"
    Then I should see the 1st "dropdown states normal dropdown option"
    When I click on the "dropdown states normal listbox"
    Then I should see the "dropdown states normal listbox" element property "aria-expanded" match "aria-prop false" global content

  Scenario: Close drop down by pressing esc
    Given I navigate to the "dropdown states" page
    When I click on the "dropdown states normal listbox"
    Then I should see the 1st "dropdown states normal dropdown option"
    When I press "escape" on the 1st "dropdown states normal dropdown option"
    Then I should see the "dropdown states normal listbox" element property "aria-expanded" match "aria-prop false" global content
