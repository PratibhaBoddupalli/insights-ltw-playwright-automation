const { Given, Then, After } = require('@cucumber/cucumber');
const { launchBrowser, closeBrowser } = require('../utils/browser');
const { login } = require('../utils/login');

let browser, context, page;


Given('the user logs in via the external auth page', async ()  => {
  // Call  utility function to launch browser
  ({ browser, context, page } = await launchBrowser());
  // Read credentials from environment variables
  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;
  //Call  login utility
  await login(page, email, password);
});
Then('the user should be logged in successfully', async () => {
  const loggedIn = await dashboardPage.isLoggedIn();
  if (!loggedIn) {
    throw new Error('Login verification failed: Profile element not found.');
  }
});

After(async () => {
  if (browser) {
    await closeBrowser(browser);
  }
});

