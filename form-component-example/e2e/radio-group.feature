@all @form @radio
Feature: NEL UI - RadioGroup

  @notSafariOrMobile
  Scenario: Navigate to a radio in a group and select it
    Given I navigate to the "radio group" page
    When I press "tab" on the 1st "radio group first item"
    And I press "arrowDown" on the 1st "radio group first item"
    Then the "radio group first item" is displayed as expected in "Normal" state

  @smoke
  Scenario: Navigate to radio group with initial value and select a new radio item
    Given I navigate to the "radio group initial value" page
    Then the "radio group initial value third item" is displayed as expected in "Normal" state
    When I click on the "radio group initial value second item"
    Then the "radio group initial value second item" is displayed as expected in "Normal" state

  @notSafariOrMobile
  Scenario Outline: Inline radio group visual states
    Given I navigate to the "radio group inline" page
    Then the "radio group inline first item" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Hover  |
      | Focus  |

  @safariAndMobile
  Scenario Outline: Inline radio group visual states
    Given I navigate to the "radio group inline" page
    Then the "radio group inline first item" is displayed as expected in "<State>" state

    Examples:
      | State  |
      | Normal |
      | Focus  |
