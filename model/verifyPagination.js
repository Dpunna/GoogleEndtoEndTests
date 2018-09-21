var paginationElements = require('../elements/paginationElements');

const paginationChecks = async (page) => {
    await page.waitForSelector(paginationElements.verifypaginationBar);
    await page.evaluate(paginationElements.paginationHasNextElement);
};

const clickPaginationChecks = async (page) => {
    await page.evaluate(paginationElements.clickPaginationElement);
}

module.exports = {
    paginationChecks,
    clickPaginationChecks
}
