//TC29
const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();
const searchpage = new Searchpage();

Then(/^I Click on “List your property”$/, async function () {
    await homepage.clickOnListYourPropertyButton();
    await browser.pause(3000);
});

Then(/^I Verify What would you like to list is displayed$/, async function () {
    await browser.switchWindow('Property Info - Join Expedia');
    expect(await homepage.isWhatWouldYouLikeToListTextDisplayed(), 'What would you like to list is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify “Lodging“ and “Private residence“ options are displayed$/, async function () {
    expect(await homepage.isLodgingOptionDisplayed(), 'Lodging option is NOT displayed').to.be.true;
    expect(await homepage.isPrivateResidenceOptionDisplayed(), 'Private residence option is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Click on “Private residence“$/, async function () {
    await homepage.clickOnPrivateResidenceButton();
    await browser.pause(3000);
});

Then(/^I Verify Step 1 of 3 is displayed$/, async function () {
    await browser.switchWindow('See how much you can earn on Vrbo');
    expect(await homepage.isStep1Of3TextDisplayed(), 'Step 1 of 3 is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify “See how much you could earn!” is displayed$/, async function () {
    expect(await homepage.isSeeHowMuchYoulCouldEarnTextDisplayed(), 'See how much you could eanr is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Enter “4“ as bedroom$/, async function () {
    for (let i = 0; i < 4; i++) {  
    await homepage.clickOnAddBedroomsButton();
      }
    await browser.pause(3000);
});

Then(/^I Enter “2.5“ as bathroom$/, async function () {
    for (let i = 0; i < 3; i++) {
        await homepage.clickOnAddBathroomsButton();
      }
    await browser.pause(3000);
});

Then(/^I Click on “Next” button$/, async function () {
    await homepage.clickOnNextButtonVrbo();
    await browser.pause(3000);
});

Then(/^I Verify ”Step 2 of 3” is displayed$/, async function () {
    expect(await homepage.isStep2Of3TextDisplayed(), 'Step 2 of 3 is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify Where is your property located is displayed$/, async function () {
    expect(await homepage.isWhereIsYourPropertyLocatedTextDisplayed(), 'Where is your property located is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Enter “121” in address$/, async function () {
    await homepage.enterAddressInVrbo('121')
    await browser.pause(4000);
});

Then(/^I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion$/, async function () {
    await homepage.selectDestinationFromAutoSuggestionVrbo('121')
    await browser.pause(4000);
});

Then(/^I Verify graph is displayed$/, async function () {
    expect(await homepage.isGraphInVrboDisplayed(), 'Graph is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify pin in graph is displayed$/, async function () {
    expect(await homepage.isPinInGraphVrboDisplayed(), 'Pin in graph is NOT displayed').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify “Pin location may not be exact.“ is displayed below graph$/, async function () {
    expect(await homepage.isPinLocationMayNotBeExactTextDisplayed(), 'Pin location may not be exact is NOT displayed').to.be.true;
    await browser.pause(3000);
});

