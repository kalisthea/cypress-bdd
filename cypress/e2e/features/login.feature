Feature: Login Functionality
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard

  @negative
  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter invalid credentials
    Then I should see an error message