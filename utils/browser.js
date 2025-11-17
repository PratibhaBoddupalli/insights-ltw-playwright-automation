// utils/browser.js
const { chromium } = require('playwright');

async function launchBrowser() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  return { browser, context, page };
}

async function closeBrowser(browser) {
  await browser.close();
}

module.exports = { launchBrowser, closeBrowser };