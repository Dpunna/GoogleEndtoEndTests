import createBrowser from '../../helpers/browserFactory';
import homePageLoaded from '../../model/homePageLoaded.js';

import verifyPagination from '../../model/verifyPagination';
import googleSearchPage from '../../model/googleSearchPage';
import verifySearchResults from '../../model/verifySearchResults';


describe('When a user start using google web', () => {
    let page;
    let browser;
    let browserClient;

    beforeEach(async () => {
        browserClient = await createBrowser();
        page = browserClient.page;
        browser = browserClient.browser;
        await homePageLoaded(page);
    }, 6000);

    it('I can successfully search using google search engine and verify the page load successfully', async () => {
        await googleSearchPage.homepage(page);
        await verifySearchResults.resultStat(page);
    }, 6000);


    it('I can see the number of results for each page and able to click one of them successfully and navigate to the page', async () => {
        await googleSearchPage.homepage(page);
        await verifySearchResults.resultStat(page);
        await verifySearchResults.clickFirstResult(page);
    }, 6000);

    it('I can see the pagination for the search results and able to click and navigate to the page', async () => {
        await googleSearchPage.homepage(page);
        await verifyPagination.paginationChecks(page);
        await verifyPagination.clickPaginationChecks(page);
        await verifySearchResults.resultStat(page);
    }, 6000);

    afterEach(async () => {
        await browser.close();
    });
});



