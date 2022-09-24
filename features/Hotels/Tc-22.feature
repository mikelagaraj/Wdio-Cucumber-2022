#TC22
Feature: SignUp form

    Scenario: Verify error message for invalid data in SignUp form
        Given I am on hotels landing page
        When I Click on SignIn link
        And I Click on SignUp link
        And I Enter invalid email address with at least '@' symbol 
        And I Verify error is displayed after invalid email
        And I Enter invalid first name with '!'
        And I Verify error is displayed after invalid first name
        And I Enter invalid last name with '%'
        And I Verify error is displayed after invalid last name 
        And I Enter password with random numbers
        Then I Verify “Keep me signed in” checkbox is displayed and enabled
        And I Verify “Continue” button is displayed but NOT enabled