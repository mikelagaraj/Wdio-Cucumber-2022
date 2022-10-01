//TC21

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");

Given(/^I am on hotels website$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I click on the link of "Sign in"$/, async function () {
    await $('//div//button[text()="Sign in"]').click();
    await browser.pause(3000);
});

Then(/^Then I click on Sign in button$/, async function () {
    await $('//a[@data-stid="link-header-account-signin"]').click();
    await browser.pause(3000);
});

Then(/^I enter invalid email address$/, async function () {
    await $('#loginFormEmailInput').setValue('Mikelaga124@')
    await browser.pause(3000);
});

When(/^I enter invalid password$/, async function () {
    await $('#loginFormPasswordInput').setValue('1235%$')
    await browser.pause(3000);
});

When(/^I Verify Verification message is displayed$/, async function () {
      const VerifyEnterInvalidEmail =  await $('//div[text()="Enter a valid email address"]').isDisplayed();
     expect(VerifyEnterInvalidEmail, 'Error enter a valid email address is NOT displayed').to.be.true;
     await browser.pause(5000);
});