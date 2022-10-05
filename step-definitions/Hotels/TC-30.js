//TC30

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();

Then(/^I Scroll to “Get the app“ button$/, async function () {
    await homepage.scrollToGetTheAppButton()
    await browser.pause(3000);
});

Then(/^I Enter “0000000000” in Phone number$/, async function () {
    await homepage.enterPhoneNumber('0000000000')
    await browser.pause(3000);
});

Then(/^I Click on “Get the app“ button$/, async function () {
    await homepage.clickGetTheAppButton();
    await browser.pause(3000);
});


Then(/^I Verify “Please enter a valid phone number.“ error is displayed$/, async function () {
    expect(await homepage.isPleaseEnterAValidPhoneNumberErrorDisplayed(), 'Please enter a valid phone number is NOT displayed').to.be.true;
    await browser.pause(3000);
});
