import puppeteer from 'puppeteer';

const width = 1920;
const height = 1080;

const createBrowser = async () => {
    const browser = await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
        args: [`--window-size=${width},${height}`,
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
        // devtools: true
    });

    const page = await browser.newPage();
    await page.setViewport({ width, height });
    return { browser, page };
};

export default createBrowser;