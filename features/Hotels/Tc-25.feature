#TC25
Feature: Feedback form
    
    Scenario: Verify user can submit feedback after completing the feedback form
        Given I am on the website Hotels.com
        When I Click on “Sign in”
        And I Click on “Feedback”
        And I Select any star-rating
        And I Enter any comments
        And I Select any option for How likely are you to return to Hotels.com
        And I Select any answer for Prior to this visit, have you ever booked on Hotels.com
        And I Select any answer for Did you accomplish what you wanted to do on this page
        Then I Click on Submit button at the end of the page
        And I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed