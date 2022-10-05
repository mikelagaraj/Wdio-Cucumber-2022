#Sprint2
Feature: Testing hotels.com homepage

    @TC-17
    Scenario: Verify past dates and back button on Current month's calendar is disabled
     Given I am on Hotels.com
      When I Click on Dates
      And I Go to current month if not displayed
      Then I Verify For current month Past dates if any are disabled
      And I Verify Back button on current month is disabled



    @TC-19
    Scenario: Verify Share feedback button is displayed at the end of search results
        Given I am on Hotels.com
        When I Enter “bora” in destination
        And I Select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion
        And I Select Dec 1, 2022 as Check-in
        And I Select Dec 10, 2022 as Check-out
        When I Click Apply
        And I Click on “Search”button
        Then I Verify Text: Tell us how we can improve our site is displayed
        And I Verify Button Share feedback is displayed and enabled



    @TC-23
    Scenario: Verify filter-by and sort-by functionality works as expected
      Given I am on Hotels.com
      When I Search Manhattan, NY
      And I Enter Check-in date as Jan-10-2023
      And I Enter Check-out date as Jan-23-2023
      When I Click on Search button
      And I Click on 5 star from star-rating filter
      And I Select “Price” from sort-by dropdown
      Then I Verify all hotels in search results are 5 star rated as selected in above step
      And I Verify all hotels are listed in increasing order price



    @TC-29
    Scenario: Verify "List your Property" flow
        Given I am on Hotels.com
        When I Click on “List your property”
        Then I Verify What would you like to list is displayed
        And I Verify “Lodging“ and “Private residence“ options are displayed
        When I Click on “Private residence“
        Then I Verify Step 1 of 3 is displayed
        And I Verify “See how much you could earn!” is displayed
        When I Enter “4“ as bedroom
        And I Enter “2.5“ as bathroom
        And I Click on “Next” button
        Then I Verify ”Step 2 of 3” is displayed
        And I Verify Where is your property located is displayed
        When I Enter “121” in address
        And I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
        Then I Verify graph is displayed
        And I Verify pin in graph is displayed
        And I Verify “Pin location may not be exact.“ is displayed below graph



    @TC-30
    Scenario: Verify invalid phone number error
        Given I am on Hotels.com
        When I Scroll to “Get the app“ button
        And I Enter “0000000000” in Phone number
        And I Click on “Get the app“ button
        Then I Verify “Please enter a valid phone number.“ error is displayed



    @TC-31
    Scenario: Verify language can be changed successfully
        Given I am on Hotels.com
        When I Click on “English“ language
        And I Select “Español ,Estados Unidos” in Language dropdown
        And I Click on “Save“ button
        Then I Verify “Español” is displayed
        And I Click on “Español“ language
        And I Select “English ,United States” in Language dropdown
        And I Click on “Guardar“ button
        Then I Verify “English” is displayed
        