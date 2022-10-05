//TC-19
const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();
const searchpage = new Searchpage();

When(/^I Enter “bora” in destination$/, async function () {
    await homepage.enterDestination('bora')
    await browser.pause(2000);
});


Then(/^I Select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion$/, async function () {
    await homepage.selectDestinationFromAutoSuggestion('bORa BoRa')
    await browser.pause(2000);
});

Then(/^I Select Dec 1, 2022 as Check-in$/, async function () {
    await homepage.clickOnCalendarButton();
    await browser.pause(2000);
    await homepage.selectCheckInDate('December', '2022', '1')
    await browser.pause(2000);
});

Then(/^I Select Dec 10, 2022 as Check-out$/, async function () {
    await homepage.selectCheckOutDate('December', '2022', '10')
    await browser.pause(2000);
});


Then(/^I Click Apply$/, async function () {
    await homepage.clickOnDoneButtonOnCalender();
    await browser.pause(2000);
});

Then(/^I Click on “Search”button$/, async function () {
    await homepage.clickSearchButton();
    await browser.pause(2000);
});


Then(/^I Verify Text: Tell us how we can improve our site is displayed$/, async function () {
    await searchpage.scrollToTellUsHowWeCanImproveOurSiteText();
    expect(await searchpage.isTellUsHowWeCanImproveOurSiteTextDisplayed(), 'Tell us how we can improve our site is NOT displayed').to.be.true;
    await browser.pause(3000);
    
});

Then(/^I Verify Button Share feedback is displayed and enabled$/, async function () {
    expect(await searchpage.isShareFeedbackButtonDisplayed(), 'Button share feedback is NOT displayed').to.be.true;
    expect(await searchpage.isShareFeedbackButtonEnabled(), 'Button share feedback is NOT enabled').to.be.true;
    await browser.pause(3000);
});
