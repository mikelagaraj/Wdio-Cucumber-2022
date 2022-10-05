const Commands = require('../Commands');

class Searchpage {


    destinationLocator = '//button[@data-stid="hotels-destination-menu-trigger"]';
    searchByPropertyNameCopyLocator = '//h3//legend[text()="Search by property name"]';
    fiveStarRatingFilter = '//label[@aria-label="5 stars."]'
    sortByDropdown = '#sort';
    tellUsHowWeCanImproveOurSiteText = '//span[text()="Tell us how we can improve our site"]'
    shareFeedbackButton = '//a[text()="Share feedback"]'
    fiveStarRatedHotels = '//div[text()="5-star property"]'

    commands = new Commands();

    async isDestinationContainsUserDestination(userDestination) {
        const destinationOnSearch = await this.commands.getTextFromWebElement(this.destinationLocator);
        console.log(`\n\ndestinationOnSearch -> ${destinationOnSearch}\n\n`);
        console.log(`\n\nuserDestination -> ${userDestination}\n\n`);
        return destinationOnSearch.toLowerCase().includes(userDestination.toLowerCase());
    }

    async waitForSearchByPropertyName() {
        await this.commands.isWebElementDisplayedWithWait(this.searchByPropertyNameCopyLocator);
    }

    async clickOnFiveStarRatingFilter() {
        await this.commands.scrollAndClickWebElement(this.fiveStarRatingFilter);
    }

    async selectFromSortByDropdown(selectThis){
        await this.commands.selectFromDropdown(this.sortByDropdown, selectThis);
    }

    async isTellUsHowWeCanImproveOurSiteTextDisplayed(){
        return await this.commands.isWebElementDisplayed(this.tellUsHowWeCanImproveOurSiteText)
    }

    async scrollToTellUsHowWeCanImproveOurSiteText(){
        await this.commands.scrollToElement(this.tellUsHowWeCanImproveOurSiteText)
    }

    async isShareFeedbackButtonDisplayed(){
        return await this.commands.isWebElementDisplayed(this.shareFeedbackButton)
    }

    async isShareFeedbackButtonEnabled(){
        return await this.commands.isWebElementEnabled(this.shareFeedbackButton)
    }

    async areFiveStarRatedHotelsDisplayed(){
        return await this.commands.isWebElementDisplayed(this.fiveStarRatedHotels)
    }



}
module.exports = Searchpage