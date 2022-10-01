#TC20
Feature: TermsAndConditions

    Scenario:Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
        Given I am on Hotels.com page
        When I go and Click Sign in link
        And I go and Click Sign up link
        And I Click “Terms and Conditions” link
        And I Verify “Terms and Conditions” page opens in new tab
        Then I Click “Privacy Statement” link
        And I Verify “Privacy Statement” page opens in new tab