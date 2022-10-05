//TC23
const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");
const Homepage = require("../../Pages/Hotels/Homepage");
const Searchpage = require("../../Pages/Hotels/Searchpage");
const MyMomentFunctions = require('../../Utils/MyMomentFunctions');

const homepage = new Homepage();
const searchpage = new Searchpage();

When(/^I Search Manhattan, NY$/, async function () {
    await homepage.enterDestination('Man')
    await browser.pause(2000);

    await homepage.selectDestinationFromAutoSuggestion('MAnHatTaN')
    await browser.pause(2000);
});

Then(/^I Enter Check-in date as Jan-10-2023$/, async function () {
    await homepage.clickOnCalendarButton();
    await browser.pause(2000);
    await homepage.selectCheckInDate('January', '2023', '10')
    await browser.pause(2000);
});

Then(/^I Enter Check-out date as Jan-23-2023$/, async function () {
    await homepage.selectCheckOutDate('January', '2023', '23')
    await browser.pause(2000);
    await homepage.clickOnDoneButtonOnCalender();
    await browser.pause(2000);
});

Then(/^I Click on Search button$/, async function () {
    await homepage.clickSearchButton();
    await browser.pause(2000);  
});

Then(/^I Click on 5 star from star-rating filter$/, async function () {
    await searchpage.clickOnFiveStarRatingFilter();
    await browser.pause(2000);
});

Then(/^I Select “Price” from sort-by dropdown$/, async function () {
    await searchpage.selectFromSortByDropdown('Price');
    await browser.pause(3000);
});

Then(/^I Verify all hotels in search results are 5 star rated as selected in above step$/, async function () {
    expect(await searchpage.areFiveStarRatedHotelsDisplayed(), 'All hotels in search result are NOT 5 star rated').to.be.true;
    await browser.pause(3000);
});

Then(/^I Verify all hotels are listed in increasing order price$/, async function () {
    const allHotelsListedPrices = await $$('//div[@class="uitk-text uitk-type-600 uitk-type-bold uitk-text-emphasis-theme"]');
    let hotelNumbers = [];
    
    for(dataPrices of allHotelsListedPrices){
        const dataPricesValues = await dataPrices.getText();
        hotelNumbers.push(dataPricesValues);
    }

     var hotelNumbersWithout$ = hotelNumbers.map(s => s.slice(1));
     console.log(`\n\n hotelNumbersWithout$ -> ${hotelNumbersWithout$}\n\n`);

    function sorted(hotelNumbersWithout$){
        let second_index;
        for(let first_index = 0; first_index < hotelNumbersWithout$.length; first_index++){
            second_index = first_index + 1;
          if(hotelNumbersWithout$[second_index] - hotelNumbersWithout$[first_index] < 0) return false;
        }
        return true;
    }
    console.log('Is array sorted ? ' + sorted(hotelNumbersWithout$));

    expect(hotelNumbersWithout$, 'Hotels are NOT listed in incresing price').to.eql(hotelNumbersWithout$);
    await browser.pause(3000);
});
