//TC31
const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();

When(/^I Click on “English“ language$/, async function () {
    await homepage.clickOnEnglishLanguageButton();
    await browser.pause(2000);
});

Then(/^I Select “Español ,Estados Unidos” in Language dropdown$/, async function () {
    await homepage.selectFromLanguageDropdown('Español (Estados Unidos)')
    await browser.pause(3000);
});

Then(/^I Click on “Save“ button$/, async function () {
    await homepage.clickOnSaveButtonOnLanguages()
    await browser.pause(3000);
});

Then(/^I Verify “Español” is displayed$/, async function () {
    expect(await homepage.isEspanolLanguageButtonDisplayed(), 'Espanol is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Click on “Español“ language$/, async function () {
    await homepage.clickOnEspanolLanguageButton();
    await browser.pause(3000);
});

Then(/^I Select “English ,United States” in Language dropdown$/, async function () {
    await homepage.selectFromLanguageDropdown('English (United States)')
    await browser.pause(3000);
});

Then(/^I Click on “Guardar“ button$/, async function () {
    await homepage.clickOnGuardarButtonOnLanguages();
    await browser.pause(3000);
});

Then(/^I Verify “English” is displayed$/, async function () {
    expect(await homepage.isEnglishLanguageButtonDisplayed(), 'English is NOT displayed').to.be.true;
    await browser.pause(3000);
});

