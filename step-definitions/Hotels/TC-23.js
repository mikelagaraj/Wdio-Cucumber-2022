//TC23

const { Given, Then, When, And } = require("@wdio/cucumber-framework")
const {expect} = require("chai");

Given(/^I Launch Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com/')
});

Then(/^I Search Manhattan, NY$/, async function () {
    await $("//button[@aria-label='Going to']").click();
    await browser.pause(2000);
    await $('#destination_form_field').setValue('Man');
    await browser.pause(3000);
    const autoSuggestionElements = await $$("//div[@class='truncate']//strong");
        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare('MAnHatTaN'.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }
        await browser.pause(5000);
});

Then(/^I Enter Check-in date as Jan-10-2023$/, async function () {
    await $('#date_form_field-btn').click();
    await browser.pause(2000);

        await $('//button[@data-stid="date-picker-paging"][2]').click();
        await $('//button[@data-stid="date-picker-paging"][2]').click();
        await browser.pause(2000);

        const allJanDateElements = await $$('//h2[text()="January 2023"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allJanDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("10") === 0) {
                await dateElement.click();
                break;
            }
        }
        await browser.pause(3000);
});

Then(/^I Enter Check-in date as Jan-23-2023$/, async function () {
        const allJanDateElements = await $$('//h2[text()="January 2023"]/following-sibling::table//button[not(@disabled)]');
        for (const dateElement of allJanDateElements) {
            const date = await dateElement.getAttribute('data-day');
            if (date.localeCompare("23") === 0) {
                await dateElement.click();
                break;
            }
        }
        await browser.pause(3000);
        await $('//button[@data-stid="apply-date-picker"]').click();
        await browser.pause(3000);   
});

Then(/^I Click on Search button$/, async function () {
    await $('#submit_button').click();
    await browser.pause(3000);  
});

Then(/^I Click on 5 star from star-rating filter$/, async function () {
    //const fiveStar = await $('#star-4');
    const fiveStar = await $('//label[@aria-label="5★."]');
    const isFiveStar = await fiveStar.click();
    await fiveStar.scrollIntoView();
    //const isFiveStar = await fiveStar.scrollIntoView();
    //await fiveStar.click();
    await browser.pause(5000);
});

Then(/^I Select “Price” from sort-by dropdown$/, async function () {
    const priceSortBy = await $('#sort');
    const isPriceSortBy = await priceSortBy.selectByIndex(1);
    await priceSortBy.scrollIntoView();
    //await $('#sort').selectByIndex(2);
    await browser.pause(5000);
});

Then(/^I Verify all hotels in search results are 5 star rated as selected in above step$/, async function () {
    //span[text()="5.0 out of 5"]
    const hotelsInSearchResultsAre5StarRated = await $('//span[text()="5.0 out of 5"]');
    const areHotelsInSearchResultsAre5StarRated= await hotelsInSearchResultsAre5StarRated.isDisplayed();
    expect(areHotelsInSearchResultsAre5StarRated, 'All hotels in search result are NOT 5 star rated').to.be.true;
    await browser.pause(5000);
});

Then(/^I Verify all hotels are listed in increasing order price$/, async function () {
    //const allHotelsListedPrices = await $$('//div[@class="uitk-text uitk-type-600 uitk-type-bold uitk-text-emphasis-theme"]')

    const allHotelsListedPrices = await $$('//div[@class="uitk-text uitk-type-600 uitk-type-bold uitk-text-emphasis-theme"]');
    let hotelNumbers = [];
    
    for(dataPrices of allHotelsListedPrices){
        const dataPricesValues = await dataPrices.getText();
        hotelNumbers.push(dataPricesValues);
    }
    //console.log(`\n\n hotelNumbers -> ${hotelNumbers}\n\n`);

     var hotelNumbersWithout$ = hotelNumbers.map(s => s.slice(1));
     console.log(`\n\n hotelNumbersWithout$ -> ${hotelNumbersWithout$}\n\n`);
    //console.log(y);

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

    await browser.pause(5000);
});