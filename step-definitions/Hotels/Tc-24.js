//TC24

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const Searchpage = require("../../Pages/Hotels/Searchpage")
const Homepage = require("../../Pages/Hotels/Homepage");
const {expect} = require("chai");

const homepage = new Homepage();

Given(/^I am on the hotels.com landing page$/, async function () {
    await browser.url('https://www.hotels.com/')
    await browser.pause(5000);
});

When(/^I Click on Sign In$/, async function () {
    await $('//div//button[text()="Sign in"]').click();
    await browser.pause(5000);
});

Then(/^I Click “Feedback”$/, async function () {
    await $('//a[text()="Feedback"]').click();
    await browser.pause(5000);
});


Then(/^I Click on Submit button$/, async function () {

   await browser.switchWindow('DirectWord');

   const submitButton = await $('#submit-button');
   await submitButton.scrollIntoView();
     await submitButton.click();
     await browser.pause(5000);

});

 Then(/^I Verify error message is displayed ,Please fill in the required information highlighted below.$/, async function () {
     const isVerifyErrorMessageDisplayed = await $('//p[contains(text(), "fill in the required")]').isDisplayed();
     expect(isVerifyErrorMessageDisplayed, 'Please fill in the required information highlighted below is NOT displayed').to.be.true;
     await browser.pause(5000);
 });

 Then(/^I Verify star boxes section in feedback is in a red dotted box$/, async function () {
     const isStarBoxesSectionInRed = await $('#required_box_page_rating').isDisplayed();
     expect(isStarBoxesSectionInRed, 'Star boxes section is NOT in a red dotted box').to.be.true;
     await browser.pause(5000);
 });