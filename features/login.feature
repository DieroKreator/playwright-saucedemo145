Feature: Login on SauceDemo

  Scenario Outline: Successful login with valid credentials
    Given the user is on the login page
    When the user enters a valid "<username>" and "<password>"
    And clicks on the login button
    Then the user is redirected to the "<url>" page and title is "<title>"

    Examples:
      | username      | password     | url       | title   |
      | standard_user | secret_sauce | inventory | Product |
      | visual_user   | secret_sauce | inventory | Product |
#   Scenario: Successful login with valid credentials
#     Given the user is on the login page
#     When the user enters a valid username "standard_user" and password "secret_sauce"
#     And clicks on the login button
#     Then the user is redirected to the Inventory page
