//TC28

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");

Given(/^I am on google and Launch Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Click on Travelers button$/, async function () {
    await $('//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]').click();
    await browser.pause(5000);
});

Then(/^I Select “Children” as 2$/, async function () {
        var times = 2;
        for(var i = 0; i < times; i++){
        await $('//span//*[@aria-label="Increase the number of children in room 1"]').click();
    }
        await browser.pause(5000);
    });

Then(/^I Verify Children-age dropdown are 2$/, async function () {
    const childrenDropDown = await $$('//div[@class="uitk-layout-flex-item uitk-layout-flex-item-flex-basis-half_width uitk-spacing uitk-spacing-padding-blockstart-two uitk-spacing-padding-inlineend-two"]');
    expect(childrenDropDown.length, 'There are NOT 2 dropdowns').to.equal(2);
    await browser.pause(5000);
});

Then(/^I Verify Plus-button is enabled$/, async function () {
    const PlusButtonEnabled = await $('//span//*[@aria-label="Increase the number of children in room 1"]').isEnabled();
    expect(PlusButtonEnabled, 'Plus Button is NOT enabled').to.be.true;
    await browser.pause(5000);
});

Then(/^I Verify minus-button is enabled$/, async function () {
    const MinusButtonEnabled = await $('//span//*[@aria-label="Decrease the number of children in room 1"]').isEnabled();
    expect(MinusButtonEnabled, 'Minus Button is NOT enabled').to.be.true;
    await browser.pause(5000);
});

Then(/^I Select “Children” as 6$/, async function () {
    var times = 4;
    for(var i = 0; i < times; i++){
    await $('//span//*[@aria-label="Increase the number of children in room 1"]').click();
}
    await browser.pause(5000);
});

Then(/^I Verify Children-age dropdown are 6$/, async function () {
    const childrenDropDown = await $$('//div[@class="uitk-layout-flex-item uitk-layout-flex-item-flex-basis-half_width uitk-spacing uitk-spacing-padding-blockstart-two uitk-spacing-padding-inlineend-two"]');
    expect(childrenDropDown.length, 'There are NOT 6 dropdowns').to.equal(6);
    await browser.pause(5000);
});

Then(/^I Verify Plus button is disabled$/, async function () {
    const PlusButtonEnabled = await $('//span//*[@aria-label="Increase the number of children in room 1"]').isEnabled();
    expect(PlusButtonEnabled, 'Plus Button is enabled').to.be.false;
    await browser.pause(5000);
});

Then(/^I Verify minus-button is enabled$/, async function () {
    const MinusButtonEnabled = await $('//span//*[@aria-label="Decrease the number of children in room 1"]').isEnabled();
    expect(MinusButtonEnabled, 'Minus Button is NOT enabled').to.be.true;
    await browser.pause(5000);
});

Then(/^I Select “Children” as 5$/, async function () {
    await $('//span//*[@aria-label="Decrease the number of children in room 1"]').click();
    await browser.pause(5000);
});

Then(/^I Verify Children-age dropdown are 5$/, async function () {
    const childrenDropDown = await $$('//div[@class="uitk-layout-flex-item uitk-layout-flex-item-flex-basis-half_width uitk-spacing uitk-spacing-padding-blockstart-two uitk-spacing-padding-inlineend-two"]');
    expect(childrenDropDown.length, 'There are NOT 5 dropdowns').to.equal(5);
    await browser.pause(5000);
});

Then(/^I Verify Plus--button is enabled$/, async function () {
    const PlusButtonEnabled = await $('//span//*[@aria-label="Increase the number of children in room 1"]').isEnabled();
    expect(PlusButtonEnabled, 'Plus Button is NOT enabled').to.be.true;
    await browser.pause(5000);
});

Then(/^I Verify minus--button is enabled$/, async function () {
    const MinusButtonEnabled = await $('//span//*[@aria-label="Decrease the number of children in room 1"]').isEnabled();
    expect(MinusButtonEnabled, 'Minus Button is NOT enabled').to.be.true;
    await browser.pause(5000);
});

Then(/^I Select “Children” as 0$/, async function () {
    var times = 5;
    for(var i = 0; i < times; i++){
    await $('//span//*[@aria-label="Decrease the number of children in room 1"]').click();
}
    await browser.pause(5000);
});

Then(/^I Verify Children-age dropdown is NOT displayed$/, async function () {
    const childrenDropDown = await $$('//div[@class="uitk-layout-flex-item uitk-layout-flex-item-flex-basis-half_width uitk-spacing uitk-spacing-padding-blockstart-two uitk-spacing-padding-inlineend-two"]').isDisplayed();
    expect(childrenDropDown, 'Children-age dropdown is displayed').to.be.false;
    await browser.pause(5000);
});

Then(/^I Verify Plus---button is enabled$/, async function () {
    const PlusButtonEnabled = await $('//span//*[@aria-label="Increase the number of children in room 1"]').isEnabled();
    expect(PlusButtonEnabled, 'Plus Button is NOT enabled').to.be.true;
    await browser.pause(5000);
});

Then(/^I Verify minus---button is disabled$/, async function () {
    const MinusButtonEnabled = await $('//span//*[@aria-label="Decrease the number of children in room 1"]').isEnabled();
    expect(MinusButtonEnabled, 'Minus Button is enabled').to.be.false;
    await browser.pause(5000);
});
