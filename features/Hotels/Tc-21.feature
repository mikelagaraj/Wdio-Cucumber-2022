#TC21
Feature: Sign In

    Scenario: Verify Verification message for invalid sign in credentials
        Given I am on hotels website
        When I click on the link of "Sign in" 
        And Then I click on Sign in button
        And I enter invalid email address
        Then I enter invalid password
        And I Verify Verification message is displayed