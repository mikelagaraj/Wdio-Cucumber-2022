//TC17

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();
const searchpage = new Searchpage();

Given(/^I am on Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

When(/^I Click on Dates$/, async function () {
    await homepage.clickOnCalendarButton();
    await browser.pause(3000);
});

When(/^I Go to current month if not displayed$/, async function () {
    await homepage.clickOnPreviousButtonOnCalendarLocator();
    await browser.pause(3000);
});

Then(/^I Verify For current month Past dates if any are disabled$/, async function () {
    expect(await homepage.isCurrentMonthPastDatesEnabled(), 'Current month Past dates if any are enabled').to.be.false;
    await browser.pause(5000);
});

Then(/^I Verify Back button on current month is disabled$/, async function () {
    expect(await homepage.isPreviousButtonOnCalendarEnabled(), 'Back button on current month is enabled').to.be.false;
    await browser.pause(3000);
});