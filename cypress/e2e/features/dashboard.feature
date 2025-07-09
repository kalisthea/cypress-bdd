Feature: Dashboard Validation
  Scenario: Validate dashboard page after login
    Given I am logged in to OrangeHRM
    When I view the dashboard
    Then I should see all dashboard elements