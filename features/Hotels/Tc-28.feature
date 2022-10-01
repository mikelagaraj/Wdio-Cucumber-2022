#TC-28
Feature: DropDown
    
    Scenario: Verify Child-age dropdowns are same as number of Children selected
        Given I am on google and Launch Hotels.com
        When I Click on Travelers button
        And I Select “Children” as 2
        And I Verify Children-age dropdown are 2
        And I Verify Plus-button is enabled
        And I Verify minus-button is enabled
        And I Select “Children” as 6
        And I Verify Children-age dropdown are 6
        And I Verify Plus button is disabled
        And I Verify minus-button is enabled
        And I Select “Children” as 5
        And I Verify Children-age dropdown are 5
        And I Verify Plus--button is enabled
        And I Verify minus--button is enabled
        And I Select “Children” as 0
        And I Verify Children-age dropdown is NOT displayed
        Then I Verify Plus---button is enabled
        And I Verify minus---button is disabled