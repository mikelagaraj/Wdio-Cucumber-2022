//TC30

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");

Given(/^I am on Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Scroll to “Get the app“ button$/, async function () {
    await $('#submitBtn').scrollIntoView();
    await browser.pause(5000);
});

Then(/^I Enter “0000000000” in Phone number$/, async function () {
    await $('#phoneNumber').setValue('0000000000')
    await browser.pause(5000);
});

Then(/^I Click on “Get the app“ button$/, async function () {
    await $('#submitBtn').click();
    await browser.pause(5000);
});


Then(/^I Verify “Please enter a valid phone number.“ error is displayed$/, async function () {
    const ValidPhoneNumber = await $('//div[text()="Please enter a valid phone number."]').isDisplayed();
    expect(ValidPhoneNumber, 'Please enter a valid phone number is NOT displayed').to.be.true;
    await browser.pause(5000);
});