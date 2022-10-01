//TC29

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");

Given(/^I Go to Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Click on “List your property”$/, async function () {
    await $('#listYourProperty').click();
    await browser.pause(3000);
});

Then(/^I Verify What would you like to list is displayed$/, async function () {
    await browser.switchWindow('Property Info - Join Expedia');
    const WhatWouldYouLikeToList = await $('//p[text()="What would you like to list?"]');
    const isWhatWouldYouLikeToList = await WhatWouldYouLikeToList.isDisplayed();
    expect(isWhatWouldYouLikeToList, 'What would you like to list is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify “Lodging“ and “Private residence“ options are displayed$/, async function () {
    const lodging = await $('//p[text()="Lodging"]');
    const isLodging = await lodging.isDisplayed();
    expect(isLodging, 'Lodging option is NOT displayed').to.be.true;

    const privateResidence = await $('//p[text()="Private residence"]').isDisplayed();
    expect(privateResidence, 'Private residence option is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Click on “Private residence“$/, async function () {
    await $('#classification_privateResidence').click();
    await browser.pause(3000);
});

Then(/^I Verify Step 1 of 3 is displayed$/, async function () {
    await browser.switchWindow('See how much you can earn on Vrbo');
    const step1Of3 = await $('//div[text()="Step 1 of 3"]').isDisplayed();
    expect(step1Of3, 'Step 1 of 3 is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify “See how much you could earn!” is displayed$/, async function () {
    const seeHowMuchYouCouldEarn = await $('//h1[text()="See how much you could earn!"]').isDisplayed();
    expect(seeHowMuchYouCouldEarn, 'See how much you could eanr is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Enter “4“ as bedroom$/, async function () {
    for (let i = 0; i < 4; i++) {
        await $('//button[@aria-label="Increase bedrooms"]').click();
      }
    await browser.pause(3000);
});

Then(/^I Enter “2.5“ as bathroom$/, async function () {
    for (let i = 0; i < 3; i++) {
        await $('//button[@aria-label="Increase bathrooms"]').click();
      }
    await browser.pause(3000);
});

Then(/^I Click on “Next” button$/, async function () {
    await $('#propertyInfoNextBtn').click();
    await browser.pause(3000);
});

Then(/^I Verify ”Step 2 of 3” is displayed$/, async function () {
    const step2Of3 = await $('//div[text()="Step 2 of 3"]').isDisplayed();
    expect(step2Of3, 'Step 2 of 3 is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify Where is your property located is displayed$/, async function () {
    const whereIsYourPropertyLocated = await $('//h1[text()="Where is your property located?"]').isDisplayed();
    expect(whereIsYourPropertyLocated, 'Where is your property located is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Enter “121” in address$/, async function () {
    await $('#locationTypeAhead').setValue('121')
    await browser.pause(3000);
});

Then(/^I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion$/, async function () {
    const autoSuggestionElements = await $$("//span[@class='react-typeahead--matched']");

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare('121'.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }
        await browser.pause(5000);
});

Then(/^I Verify graph is displayed$/, async function () {
    const verifyGraph = await $('//div[@aria-label="Map"]').isDisplayed();
    expect(verifyGraph, 'Graph is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify pin in graph is displayed$/, async function () {
    const pinInGraph = await $('//div[@tabindex="-1"]').isDisplayed();
    expect(pinInGraph, 'Pin in graph is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify “Pin location may not be exact.“ is displayed below graph$/, async function () {
    const pinLocationMayNotBeExact = await $('//div[text()="Pin location may not be exact."]').isDisplayed();
    expect(pinLocationMayNotBeExact, 'Pin location may not be exact is NOT displayed').to.be.true;
    await browser.pause(3000);
});