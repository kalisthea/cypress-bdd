Feature: Admin Functionality
    Scenario: Add new admin user
        Given I am logged in to OrangeHRM
        When I navigate to the admin page
        And I add a new admin user
        Then I should see the new user in the list