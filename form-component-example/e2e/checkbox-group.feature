@all @form @check
Feature: NEL UI - CheckboxGroup

  @notSafariOrMobile
  Scenario: Navigate to a checkbox group and select using keys
    Given I navigate to the "checkbox group" page
    When I press "tab" on the "checkbox group first item"
    And I press "tab" on the "checkbox group second item"
    And I press "space" on the "checkbox group second item"
    Then the "checkbox group first item" is displayed as expected in "Normal" state

  @smoke
  Scenario: Navigate to checkbox group and unselect the third item
    Given I navigate to the "checkbox group initial value" page
    When I click on the "checkbox group initial value selected third checkbox label"
    Then the "checkbox group initial value selected third checkbox label" is displayed as expected in "Normal" state

  @smoke
  Scenario: Navigate to checkbox group and select the second item, then the second and third item should be selected
    Given I navigate to the "checkbox group initial value" page
    When I click on the "checkbox group initial value second checkbox label"
    Then the "checkbox group initial value second checkbox label" is displayed as expected in "Normal" state

  @notSafariOrMobile
  Scenario Outline: Inline checkbox group visual states
    Given I navigate to the "checkbox group inline" page
    Then the "checkbox group inline first item" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Inline checkbox group visual states
    Given I navigate to the "checkbox group inline" page
    Then the "checkbox group inline first item" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |