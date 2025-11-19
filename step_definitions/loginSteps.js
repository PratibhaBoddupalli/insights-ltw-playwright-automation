const { Given, Then, After } = require('@cucumber/cucumber');
const { launchBrowser, closeBrowser } = require('../utils/browser');
const { login } = require('../utils/login');

// IMPORTANT: use function() {} (not arrow) so Cucumber binds `this` to the World instance
Given('the user logs in via the external auth page', async function ()  {
  // Launch browser and save handles on the World so other steps/hooks can access them
  const handles = await launchBrowser();
  this.browser = handles.browser;
  this.context = handles.context;
  this.page = handles.page;

  // Read credentials from environment variables
  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;
  // Call login utility using the page stored on the World
  await login(this.page, email, password);
});

Then('the user should be logged in successfully', async function () {
  // Simple verification: confirm we're on the dashboard URL the login helper waits for
  const page = this.page;
  if (!page) throw new Error('Page is not available in World. Did the browser launch step run?');
  const url = page.url();
  if (!url.includes('/dashboard')) {
    // If your app uses a different URL or you prefer checking for an element, replace the check below.
    // Example element check: await page.waitForSelector('selector-for-profile', { timeout: 5000 });
    throw new Error(`Login verification failed: expected dashboard URL, got ${url}`);
  }
});

After(async function () {
  if (this.browser) {
    await closeBrowser(this.browser);
    this.browser = null;
    this.context = null;
    this.page = null;
  }
});

