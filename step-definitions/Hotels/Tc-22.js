//TC22

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");


Given(/^I am on hotels landing page$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Click on SignIn link$/, async function () {
    await $('//div//button[text()="Sign in"]').click();
});

When(/^I Click on SignUp link$/, async function () {
    await $('//a[@data-stid="link-header-account-signup"]').click();
});

Then(/^I Enter invalid email address with at least '@' symbol$/, async function () {
  const enterInvalidEmail = await $('#signupFormEmailInput').setValue('mikel123@');
  await $("body").click()
  await browser.pause(5000);
});

 Then(/^I Verify error is displayed after invalid email$/, async function () {
     const VerifyEnterInvalidEmail =  await $('//div[text()="Enter a valid email address"]').isDisplayed();
     expect(VerifyEnterInvalidEmail, 'Error enter a valid email address is NOT displayed').to.be.true;
     await browser.pause(5000);
   });

 Then(/^I Enter invalid first name with '!'$/, async function () {
     const enterInvalidFirstName =  await $('#signupFormFirstNameInput');
     await enterInvalidFirstName.setValue('!@');
     await $("body").click()
     await browser.pause(5000);
   });

Then(/^I Verify error is displayed after invalid first name$/, async function () {
    const VerifyEnterInvalidFirstName =  await $('//div[text()="First name cannot contain special characters"]').isDisplayed();
     expect(VerifyEnterInvalidFirstName, 'Error enter a valid First Name is NOT displayed').to.be.true;
     await browser.pause(5000);
   });

 Then(/^I Enter invalid last name with '%'$/, async function () {
     const enterInvalidLastName =  await $('#signupFormLastNameInput');
     await enterInvalidLastName.setValue('%^&');
     await $("body").click()
     await browser.pause(5000);
   });

  Then(/^I Verify error is displayed after invalid last name$/, async function () {
     const VerifyEnterInvalidLastName =  await $('//div[text()="Last name cannot contain special characters"]').isDisplayed();
     expect(VerifyEnterInvalidLastName, 'Error enter a valid Last Name is NOT displayed').to.be.true;
     await browser.pause(5000);
   });

  Then(/^I Enter password with random numbers$/, async function () {
     const enterPassword =  await $('#signupFormPasswordInput')
     await enterPassword.setValue('1234567');
     await $("body").click()
     await browser.pause(5000);
   });

   Then(/^I Verify “Keep me signed in” checkbox is displayed and enabled$/, async function () {
    const KeepMeSignedInButtonDisplayed =  await $('//label[text()="Keep me signed in"]').isDisplayed();
    expect(KeepMeSignedInButtonDisplayed, 'Keep me signed in checkbox is NOT displayed').to.be.true;

    const KeepMeSignedInButtonEnabled = await $('#signUpFormRememberMeCheck').isEnabled();
    expect(KeepMeSignedInButtonEnabled, 'Keep me signed in checkbox is NOT enabled').to.be.true;
    await browser.pause(5000);
  });

  Then(/^I Verify “Continue” button is displayed but NOT enabled$/, async function () {
    const ContinueButtonDisplayed =  await $('//button[text()="Continue"]').isDisplayed();
    expect(ContinueButtonDisplayed, 'Continue button is NOT displayed').to.be.true;

    const ContinueButtonEnabled = await $('#signupFormSubmitButton').isEnabled();
    expect(ContinueButtonEnabled, 'Continue button is enabled').to.be.false;
    await browser.pause(10000);
  });