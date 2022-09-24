Feature: SignUp form

 Scenario: Verify error message for invalid data in SignUp form
  Given I am on hotels landing page
    When I Click on SignIn link
    And I Click on SignUp link
    And I Enter invalid email address with at least '@' symbol (#!@###)
    And I Verify error is displayed (Enter a valid email address)
    And I Enter invalid first name (!@)
    And I Verify error is displayed (First name cannot contain special characters)
    And I Enter invalid last name (%^&)
    And I Verify error is displayed (Last name cannot contain special characters)
    And I Enter password
    Then I Verify “Keep me signed in” checkbox is displayed and enabled
    And I Verify “Continue” button is displayed but NOT enabled