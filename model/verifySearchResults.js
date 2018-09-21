var resultStatElements = require('../elements/searchStatusElements');

const resultStat = async (page) => {
    await page.waitForSelector(resultStatElements.searchStatElement);
};

const clickFirstResult = async (page) => {
    await page.waitForSelector(resultStatElements.firstResultElement);
    await page.click(resultStatElements.firstResultElement);
    await page.waitForSelector(resultStatElements.amazonHomePageElement);
};

module.exports = {
    resultStat,
    clickFirstResult
};