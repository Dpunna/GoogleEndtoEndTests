var uri = 'https://www.google.com';
const homePageElement = '#main';

const homePageLoaded = async (page) => {
    await page.goto(uri, {timeout: 0});
    await page.waitForSelector(homePageElement);
}

export default homePageLoaded;