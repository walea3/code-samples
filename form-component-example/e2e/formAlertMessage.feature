@all @message
Feature: NEL UI - Form Alert Message

    @smoke
    Scenario: Alert box messages visual check
        Given I navigate to the "alert box" page
        And the "alert box page" is displayed as expected in "Normal" state

    @notSafariOrMobile @only
    Scenario: alert box error message icon css property checks
        Given I navigate to the "alert box" page
        Then I should see the "alert box error icon" attributes match as expected from global content
            | property     | value                       |
            | margin-right | message icon margin-right   |
            | height       | message icon height         |
            | fill         | information error icon fill |
        And I should see the "alert box error content" attributes match as expected from global content
            | property    | value           |
            | font-size   | p L font-size   |
            | line-height | p L line-height |
            | color       | p L color       |
            | font-family | p L font-family |
            | font-weight | p L font-weight |
        And I should see the "alert box error message list" element attribute "margin-top" match "message link margin-top" global content

    @desktopOnly @only
    Scenario: alert box error message form css property checks
        Given I navigate to the "alert box" page
        Then I should see the "alert box error message" attributes match as expected from global content
            | property               | value                          |
            | background-color       | error message background-color |
            | border-top-left-radius | formAlertMessage border-radius         |
            | padding-top            | space tracker large            |
            | padding-right          | space tracker large            |
            | padding-bottom         | space tracker large            |
            | padding-left           | space tracker large            |
            | margin-top             | message form margin-top        |

    @tabletOnly
    Scenario: alert bo error message form css property checks
        Given I navigate to the "alert box" page
        Then I should see the "alert box error message" attributes match as expected from global content
            | property               | value                          |
            | background-color       | error message background-color |
            | border-top-left-radius | formAlertMessage border-radius         |
            | padding-top            | space tracker medium           |
            | padding-right          | space tracker medium           |
            | padding-bottom         | space tracker medium           |
            | padding-left           | space tracker medium           |
            | margin-top             | message form margin-top        |

    @mobileOnly
    Scenario: alert bo error message form css property checks
        Given I navigate to the "alert box" page
        Then I should see the "alert box error message" attributes match as expected from global content
            | property               | value                          |
            | background-color       | error message background-color |
            | border-top-left-radius | formAlertMessage border-radius         |
            | padding-top            | space tracker small            |
            | padding-right          | space tracker small            |
            | padding-bottom         | space tracker small            |
            | padding-left           | space tracker small            |
            | margin-top             | message form margin-top        |
