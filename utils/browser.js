// utils/browser.js
const { chromium } = require('playwright');

async function launchBrowser() {
  // Allow toggling headless mode via environment variable HEADLESS (default: true)
  const headless = (process.env.HEADLESS || 'true').toLowerCase() !== 'false';
  const browser = await chromium.launch({ headless });
  const context = await browser.newContext();
  const page = await context.newPage();
  return { browser, context, page };
}

async function closeBrowser(browser) {
  try {
    await browser.close();
  } catch (err) {
    // ignore already-closed errors
    // console.warn('Error closing browser:', err);
  }
}

module.exports = { launchBrowser, closeBrowser };