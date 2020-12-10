@all @form @dropdown
Feature: NEL UI - Dropdown Behaviour

  Scenario: Open top dropdown
    Given I navigate to the "dropdown behaviour" page
    When I click on the "dropdown behaviour top dropdown"
    Then I should see the 1st "dropdown behaviour top dropdown option"
    And the "dropdown behaviour top dropdown" is displayed as expected in "Normal" state

  @smoke
  Scenario: Open center dropdown
    Given I navigate to the "dropdown behaviour" page
    When I click on the "dropdown behaviour center dropdown"
    Then I should see the 1st "dropdown behaviour center dropdown option"
    And the "dropdown behaviour center dropdown" is displayed as expected in "Normal" state

  Scenario: Open bottom dropdown
    Given I navigate to the "dropdown behaviour" page
    When I click on the "dropdown behaviour bottom dropdown"
    Then I should see the 1st "dropdown behaviour bottom dropdown option"
    And the "dropdown behaviour bottom dropdown" is displayed as expected in "Normal" state

  Scenario: Check the top drop down displays the selected option when opened again
    Given I navigate to the "dropdown behaviour" page
    When I click on the "dropdown behaviour top dropdown"
    Then I should see the 3rd "dropdown behaviour top dropdown option"
    When I click on the 3rd "dropdown behaviour top dropdown option"
    Then I should see the "dropdown behaviour top dropdown" text match "Option 3" content
    When I click on the "dropdown behaviour top dropdown"
    Then I should see the 3rd "dropdown behaviour top dropdown option" element property "aria-selected" match "aria-prop true" global content
    And the "dropdown behaviour top dropdown" is displayed as expected in "Normal" state

  @smoke
  Scenario: Check the center drop down displays the selected option when opened again
    Given I navigate to the "dropdown behaviour" page
    When I click on the "dropdown behaviour center dropdown"
    Then I should see the 3rd "dropdown behaviour center dropdown option"
    When I click on the 3rd "dropdown behaviour center dropdown option"
    Then I should see the "dropdown behaviour center dropdown" text match "Option 3" content
    When I click on the "dropdown behaviour center dropdown"
    Then I should see the 3rd "dropdown behaviour center dropdown option" element property "aria-selected" match "aria-prop true" global content
    And the "dropdown behaviour center dropdown" is displayed as expected in "Normal" state

  Scenario: Check the bottom drop down displays the selected option when opened again
    Given I navigate to the "dropdown behaviour" page
    When I click on the "dropdown behaviour bottom dropdown"
    Then I should see the 3rd "dropdown behaviour bottom dropdown option"
    When I click on the 3rd "dropdown behaviour bottom dropdown option"
    Then I should see the "dropdown behaviour bottom dropdown" text match "Option 3" content
    When I click on the "dropdown behaviour bottom dropdown"
    Then I should see the 3rd "dropdown behaviour bottom dropdown option" element property "aria-selected" match "aria-prop true" global content
    And the "dropdown behaviour bottom dropdown" is displayed as expected in "Normal" state
