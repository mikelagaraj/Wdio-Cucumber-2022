//TC31

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");

Given(/^I am on Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Click on “English“ language$/, async function () {
    await $('//div[text()="English"]').click();
    await browser.pause(5000);
});

Then(/^I Select “Español ,Estados Unidos” in Language dropdown$/, async function () {
    await $('#language-selector').selectByIndex(1);
    await browser.pause(5000);
});

Then(/^I Click on “Save“ button$/, async function () {
    await $('//button[text()="Save"]').click();
    await browser.pause(5000);
});

Then(/^I Verify “Español” is displayed$/, async function () {
    const EspanolDisplayed = await $('//div[text()="Español"]').isDisplayed();
    expect(EspanolDisplayed, 'Espanol is NOT displayed').to.be.true;
    await browser.pause(5000);
});

Then(/^I Click on “Español“ language$/, async function () {
    await $('//button[@data-stid="button-type-picker-trigger"]').click();
    await browser.pause(5000);
});

Then(/^I Select “English ,United States” in Language dropdown$/, async function () {
    await $('#language-selector').selectByIndex(0);
    await browser.pause(5000);
});

Then(/^I Click on “Guardar“ button$/, async function () {
    await $('//button[text()="Guardar"]').click();
    await browser.pause(5000);
});

Then(/^I Verify “English” is displayed$/, async function () {
    const EnglishDisplayed = await $('//div[text()="English"]').isDisplayed();
    expect(EnglishDisplayed, 'English is NOT displayed').to.be.true;
    await browser.pause(5000);
});

