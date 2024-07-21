Feature: Navigate to the Playwright Home Page

  Scenario: Navigating trough Playwright website
    Given I open the Playwright website
    When I click on "GET STARTED" button
    Then the url should be "https://playwright.dev/docs/intro"
    And the title should be "Installation | Playwright"
    And the "Installation" header should be visible
    And the url in the scenario context should be the same