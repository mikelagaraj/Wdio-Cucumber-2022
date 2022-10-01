//TC18

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");

Given(/^I Launch Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Click on Travelers$/, async function () {
    await $('//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]').click();
    await browser.pause(5000);
});

Then(/^I Select "Adults" as 6$/, async function () {
    var times = 4;
    for(var i = 0; i < times; i++){
    await $('//span//*[@aria-label="Increase the number of adults in room 1"]').click();
}
    await browser.pause(5000);
});

Then(/^I Select "Children" as 3$/, async function () {
    var times = 3;
    for(var i = 0; i < times; i++){
    await $('//span//*[@aria-label="Increase the number of children in room 1"]').click();
}
    await browser.pause(5000);
});

Then(/^I Select first child age: 4$/, async function () {
    await $('#age-traveler_selector_children_age_selector-0-0').selectByIndex(5);
    await browser.pause(5000);
});

Then(/^I Select second child age: Under 1$/, async function () {
    await $('#age-traveler_selector_children_age_selector-0-1').selectByIndex(1);
    await browser.pause(5000);
});

Then(/^I Select third child age: 7$/, async function () {
    await $('#age-traveler_selector_children_age_selector-0-2').selectByIndex(8);
    await browser.pause(5000);
});

Then(/^I Click Done$/, async function () {
    await $('#traveler_selector_done_button').click();
    await browser.pause(5000);
});

Then(/^I Verify total number of guests in sum of adults and children as same as selected on steps 3 and 4$/, async function () {
    await $('//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]').click();
    await browser.pause(3000);
   
   
    const adultsTotal = await $('#traveler_selector_adult_step_input-0').getText();
    console.log(adultsTotal);

    const childrenTotal = await $('#traveler_selector_children_step_input-0').getText();
    console.log(childrenTotal);

    const totalNumberGuests = await $('//span//*[@input="9 travelers, 1 room"]').getText();
    console.log(totalNumberGuests);


    expect(adultsTotal + childrenTotal, 'Total number of guests in sum of adults and children are NOT the same as selected on steps 3 and 4').to.equal(totalNumberGuests);
    await browser.pause(7000);
});