#TC24
Feature: Feedback form

   @empty1
    Scenario: Verify error is displayed when user submits the empty feedback form
       Given I am on the hotels.com landing page
        When I Click on Sign In
        And I Click “Feedback”
        And I Click on Submit button
        Then I Verify error message is displayed ,Please fill in the required information highlighted below.
        And I Verify star boxes section in feedback is in a red dotted box