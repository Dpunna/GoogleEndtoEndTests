var faker = require('faker');
var HomePageElements = require('../elements/googleSearchFieldElements');

var searchInput = async (page) =>{

    await page.waitForSelector(HomePageElements.searchPageElement);
    await page.type(HomePageElements.searchPageElement, 'amazon');
    await page.click(HomePageElements.submitSearchElement);
    await page.waitForNavigation();
}

module.exports = {
    searchInput
}