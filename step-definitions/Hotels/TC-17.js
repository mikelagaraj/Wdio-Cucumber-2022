//TC17

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");

Given(/^I am on Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Click on Dates$/, async function () {
    await $('#date_form_field-btn').click();
    await browser.pause(3000);
});

Then(/^I Go to current month if not displayed$/, async function () {
    await $('//button[@data-stid="date-picker-paging"][1]').click();
    await browser.pause(5000);
});

Then(/^I Verify For current month Past dates if any are disabled$/, async function () {
    const currentMonthPastDates = await $('//button[@class="uitk-date-picker-day is-disabled"]');
    const isCurrentMonthPastDates = await currentMonthPastDates.isEnabled();
    expect(isCurrentMonthPastDates, 'Current month Past dates if any are enabled').to.be.false;
    await browser.pause(5000);
});

Then(/^I Verify Back button on current month is disabled$/, async function () {
    const backButton = await $('//button[@data-stid="date-picker-paging"][1]');
    const isBackButton = await backButton.isEnabled();
    expect(isBackButton, 'Back button on current month is enabled').to.be.false;
    await browser.pause(5000);
});