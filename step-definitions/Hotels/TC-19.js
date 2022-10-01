//TC-19

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');
// 
const homepage = new Homepage();

Given(/^I am on Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Enter “bora” in destination$/, async function () {
    await $("//button[@aria-label='Going to']").click();
    await browser.pause(2000);
    await $('#destination_form_field').setValue('bora');
    await browser.pause(3000);
});


Then(/^I Select “Bora Bora, Leeward Islands, French Polynesia” from auto suggestion$/, async function () {
    const autoSuggestionElements = await $$("//div[@class='truncate']//strong");

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare('bORa BoRa'.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }
        await browser.pause(3000);
});

Then(/^I Select Dec 1, 2022 as Check-in$/, async function () {
    await $('#date_form_field-btn').click();
    await browser.pause(2000);

       //await $('//button//*[@aria-label="Next month"]').click();
        await $('//button[@data-stid="date-picker-paging"][2]').click();
        await browser.pause(2000);

        const allDecDateElements = await $$('//h2[text()="December 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allDecDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("1") === 0) {
                await dateElement.click();
                break;
            }
        }
        await browser.pause(3000);
});

Then(/^I Select Dec 10, 2022 as Check-out$/, async function () {
        const allDecDateElements = await $$('//h2[text()="December 2022"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allDecDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("10") === 0) {
                await dateElement.click();
                break;
            }
        }
        await browser.pause(3000);
});


Then(/^I Click Apply$/, async function () {
    await $('//button[@data-stid="apply-date-picker"]').click();
    await browser.pause(3000);
});

Then(/^I Click on “Search”button$/, async function () {
    await $('#submit_button').click();
    await browser.pause(3000);
});


Then(/^I Verify Text: Tell us how we can improve our site is displayed$/, async function () {
    const ImproveText = await $('//span[text()="Tell us how we can improve our site"]');
    const isImproveText = await ImproveText.isDisplayed();
    expect(isImproveText, 'Tell us how we can improve our site is NOT displayed').to.be.true;
    await ImproveText.scrollIntoView();
    await browser.pause(3000);
});

Then(/^I Verify Button Share feedback is displayed and enabled$/, async function () {
    const ShareFeedbackButton = await $('//a[text()="Share feedback"]');
    const isShareFeedBackButton = await ShareFeedbackButton.isDisplayed();
    expect(isShareFeedBackButton, 'Button share feedback is NOT displayed').to.be.true;

    const enabledShareFeedbackButton = await ShareFeedbackButton.isEnabled();
    expect(enabledShareFeedbackButton, 'Button share feedback is NOT enabled').to.be.true;
    await browser.pause(5000);
});