const MyMomentFunctions = require("../../Utils/MyMomentFunctions");
const Commands = require("../Commands");

class Homepage {

    goingToLocator = "//button[@aria-label='Going to']";
    toTypeInGoingToLocator = '#destination_form_field';

    destinationAutoSuggestionLocator = "//div[@class='truncate']//strong";

    calendarButtonLocator = '#date_form_field-btn';
    
    doneButtonOnCalender = '//button[@data-stid="apply-date-picker"]';

    monthDatesLocatorStarts = '//h2[text()="'
    monthDatesLocatorEnds = '"]/following-sibling::table//button[not(@disabled)]';
    monthDatesLocatorEnds_DisableDated = '"]/following-sibling::table//button[@disabled]';

    monthHeadingLocatorStarts = 'h2='
    nextButtonOnCalendarLocator = "//button[@data-stid='date-picker-paging'][2]";
    previousButtonOnCalendarLocator = "//button[@data-stid='date-picker-paging'][1]";

    searchButton = '#submit_button';
    shareFeedBackButton = '//a[text()="Share feedback"]';

    tellUsHowWeCanImproveOurSiteText = '//span[text()="Tell us how we can improve our site"]';

    englishLanguageButton = '//div[text()="English"]';
    saveButtonOnLanguages = '//button[text()="Save"]';
    guardarButtonOnLanguages = '//button[text()="Guardar"]';
    espanolLanguageButton = '//button[@data-stid="button-type-picker-trigger"]';
    languageDropdown = '#language-selector'

    phoneNumberBox = '#phoneNumber';
    getTheAppButton = '#submitBtn';
    pleaseEnterAValidPhoneNumberError = '//div[text()="Please enter a valid phone number."]'

    listYourPropertyButton = '#listYourProperty';
    whatWouldYouLikeToListText = '//p[text()="What would you like to list?"]'
    lodgingOption = '//p[text()="Lodging"]';
    privateResidenceOption = '//p[text()="Private residence"]'
    privateResidenceButton = '#classification_privateResidence';
    step1Of3Text = '//div[text()="Step 1 of 3"]';
    seeHowMuchYouCouldEarnText = '//h1[text()="See how much you could earn!"]';
    step2Of3Text = '//div[text()="Step 2 of 3"]';
    whereIsYourPropertyLocatedText = '//h1[text()="Where is your property located?"]'
    addBedroomsButton = '//button[@aria-label="Increase bedrooms"]';
    addBathroomsButton = '//button[@aria-label="Increase bathrooms"]';
    nextButtonVrbo = '#propertyInfoNextBtn';
    addressInVrbo = '#locationTypeAhead';
    destinationAutoSuggestionLocatorVrbo = "//span[@class='react-typeahead--matched']";
    graphInVrbo = '//div[@aria-label="Map"]';
    pinInGraphVrbo = '//div[@tabindex="-1"]';
    pinLocationMayNotBeExactText = '//div[text()="Pin location may not be exact."]'
    

    currentMonthPastDates = '//button[@class="uitk-date-picker-day is-disabled"]';

    commands = new Commands;


    async clickSearchButton() {
        await this.commands.clickWebElement(this.searchButton);
    }

    async clickGetTheAppButton() {
        await this.commands.clickWebElement(this.getTheAppButton);
    }

    async enterDestination(destination) {
        await this.commands.clickWebElement(this.goingToLocator);
        await this.commands.typeInWebElement(this.toTypeInGoingToLocator, destination)
    }

    async enterPhoneNumber(destination) {
        await this.commands.typeInWebElement(this.phoneNumberBox, destination)
    }

    async selectDestinationFromAutoSuggestionVrbo(selectThis) {
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocatorVrbo, selectThis);
    }

    async selectDestinationFromAutoSuggestion(selectThis) {
        await this.commands.selectFromAutoSuggestions(this.destinationAutoSuggestionLocator, selectThis);
    }

    async clickOnCalendarButton() {
        await this.commands.clickWebElement(this.calendarButtonLocator);
    }

    async clickOnDoneButtonOnCalender() {
        await this.commands.clickWebElement(this.doneButtonOnCalender);
    }

    async clickOnNextButtonOnCalendarLocator() {
        await this.commands.clickWebElement(this.nextButtonOnCalendarLocator);
    }

    async clickOnPreviousButtonOnCalendarLocator() {
        await this.commands.clickWebElement(this.previousButtonOnCalendarLocator);
    }

    async clickOnListYourPropertyButton() {
        await this.commands.clickWebElement(this.listYourPropertyButton);
    }

    async clickOnEnglishLanguageButton() {
        await this.commands.clickWebElement(this.englishLanguageButton);
    }

    async clickOnSaveButtonOnLanguages() {
        await this.commands.clickWebElement(this.saveButtonOnLanguages);
    }

    async clickOnGuardarButtonOnLanguages() {
        await this.commands.clickWebElement(this.guardarButtonOnLanguages);
    }

    async clickOnEspanolLanguageButton() {
        await this.commands.clickWebElement(this.espanolLanguageButton);
    }

    async clickOnPrivateResidenceButton() {
        await this.commands.clickWebElement(this.privateResidenceButton);
    }

    async clickOnAddBedroomsButton() {
        await this.commands.clickWebElement(this.addBedroomsButton);
    }

    async clickOnAddBathroomsButton() {
        await this.commands.clickWebElement(this.addBathroomsButton);
    }

    async clickOnNextButtonVrbo() {
        await this.commands.clickWebElement(this.nextButtonVrbo);
    }

    async enterAddressInVrbo(destination) {
        await this.commands.typeInWebElement(this.addressInVrbo, destination);
    }

    async selectCheckInDate(monthName, year, checkInDate) {
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkInDate)
    }


    async selectCheckOutDate(monthName, year, checkOutDate) {
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const monthDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds
        await this.commands.selectDateFromCalendar(monthHeadingLocator, this.nextButtonOnCalendarLocator, monthDatesLocator, checkOutDate)
    }

    async getDisableDatesForCurrentMonth() {
        const currentMonthHeading = MyMomentFunctions.getCurrentMomentInFormat('MMMM YYYY');
        const monthName = currentMonthHeading.split(' ')[0];
        const year = currentMonthHeading.split(' ')[1];
        const monthHeadingLocator = this.monthHeadingLocatorStarts + monthName + ' ' + year;
        const isCurrentMonthSeen = await this.commands.isWebElementDisplayed(monthHeadingLocator);
        if (!isCurrentMonthSeen) {
            await this.commands.clickWebElement(this.previousButtonOnCalendarLocator);
        }
        const disabledDatesLocator = this.monthDatesLocatorStarts + monthName + ' ' + year + this.monthDatesLocatorEnds_DisableDated;
        return await this.commands.findWebElements(disabledDatesLocator);
    }

    async isPleaseEnterAValidPhoneNumberErrorDisplayed(){
        return await this.commands.isWebElementDisplayed(this.pleaseEnterAValidPhoneNumberError)
    }

    async isEspanolLanguageButtonDisplayed(){
        return await this.commands.isWebElementDisplayed(this.espanolLanguageButton)
    }

    async isEnglishLanguageButtonDisplayed(){
        return await this.commands.isWebElementDisplayed(this.englishLanguageButton)
    }

    async isWhatWouldYouLikeToListTextDisplayed(){
        return await this.commands.isWebElementDisplayed(this.whatWouldYouLikeToListText)
    }

    async scrollToGetTheAppButton(){
        await this.commands.scrollToElement(this.getTheAppButton)
    }

    async selectFromLanguageDropdown(selectThis){
        await this.commands.selectFromDropdown(this.languageDropdown, selectThis);
    }

    async isPrivateResidenceOptionDisplayed(){
        return await this.commands.isWebElementDisplayed(this.privateResidenceOption)
    }

    async isLodgingOptionDisplayed(){
        return await this.commands.isWebElementDisplayed(this.lodgingOption)
    }

    async isStep1Of3TextDisplayed(){
        return await this.commands.isWebElementDisplayed(this.step1Of3Text)
    }

    async isSeeHowMuchYoulCouldEarnTextDisplayed(){
        return await this.commands.isWebElementDisplayed(this.seeHowMuchYouCouldEarnText)
    }

    async isStep2Of3TextDisplayed(){
        return await this.commands.isWebElementDisplayed(this.step2Of3Text)
    }

    async isWhereIsYourPropertyLocatedTextDisplayed(){
        return await this.commands.isWebElementDisplayed(this.whereIsYourPropertyLocatedText)
    }

    async isGraphInVrboDisplayed(){
        return await this.commands.isWebElementDisplayed(this.graphInVrbo)
    }

    async isPinInGraphVrboDisplayed(){
        return await this.commands.isWebElementDisplayed(this.pinInGraphVrbo)
    }

    async isPinLocationMayNotBeExactTextDisplayed(){
        return await this.commands.isWebElementDisplayed(this.pinLocationMayNotBeExactText)
    }

    async isCurrentMonthPastDatesEnabled(){
        return await this.commands.isWebElementEnabled(this.currentMonthPastDates)
    }

    async isPreviousButtonOnCalendarEnabled(){
        return await this.commands.isWebElementEnabled(this.previousButtonOnCalendarLocator)
    }


}
module.exports = Homepage;

