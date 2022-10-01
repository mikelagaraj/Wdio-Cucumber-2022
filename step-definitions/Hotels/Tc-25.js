//TC25

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");


Given(/^I am on the website Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Click on “Sign in”$/, async function () {
    await $('//div//button[text()="Sign in"]').click();
    await browser.pause(3000);
});

Then(/^I Click on “Feedback”$/, async function () {
    await $('//a[text()="Feedback"]').click();
    await browser.pause(5000);
});

Then(/^I Select any star-rating$/, async function () {
    await browser.switchWindow('DirectWord');
    await $('//div[@class="radio-button"][5]').click();
    await browser.pause(7000);
});

Then(/^I Enter any comments$/, async function () {
    const enterComment = await $('#verbatim');
    await enterComment.setValue('Best service');
    await browser.pause(7000);
});

Then(/^I Select any option for How likely are you to return to Hotels.com$/, async function () {
    const selectOption = await $('#will-you-return').selectByIndex(1);
    await browser.pause(7000);
});

Then(/^I Select any answer for Prior to this visit, have you ever booked on Hotels.com$/, async function () {
    const selectAnswer = await $('//label[@for="booked-here-before-no"]').click();
    await browser.pause(7000);
});

Then(/^I Select any answer for Did you accomplish what you wanted to do on this page$/, async function () {
    const selectAnswer = await $('//label[@for="were-you-successful-yes"]').click();
    await browser.pause(7000);
});

Then(/^I Click on Submit button at the end of the page$/, async function () {
    await $('#submit-button').click();
    await browser.pause(7000);
});

Then(/^I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function () {
    const isThankYouForYourFeedbackDisplayed = await $('//h5[text()="THANK YOU FOR YOUR FEEDBACK."]').isDisplayed();
     expect(isThankYouForYourFeedbackDisplayed, 'THANK YOU FOR YOUR FEEDBACK. is NOT displayed').to.be.true;
    await browser.pause(7000);
});
