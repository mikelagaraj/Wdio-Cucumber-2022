//TC20

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();

Given(/^I am on Hotels.com page$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I go and Click Sign in link$/, async function () {
    await $('//div//button[text()="Sign in"]').click();
    await browser.pause(3000);
});

Then(/^I go and Click Sign up link$/, async function () {
    await $('//a[@data-stid="link-header-account-signup"]').click();
    await browser.pause(3000);
});

Then(/^I Click “Terms and Conditions” link$/, async function () {
    await $('//a[text()="Terms and Conditions"]').click();
    await browser.pause(3000);
});

Then(/^I Verify “Terms and Conditions” page opens in new tab$/, async function () {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'new tab did not open').to.equal(2)  
    await browser.pause(3000);
});

Then(/^I Click “Privacy Statement” link$/, async function () {
    await browser.switchWindow('Create an account');
    await $('//a[text()="Privacy Statement"]').click();
    await browser.pause(8000);
});

Then(/^I Verify “Privacy Statement” page opens in new tab$/, async function () {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'new tab did not open').to.equal(3)  
    await browser.pause(10000);
});

