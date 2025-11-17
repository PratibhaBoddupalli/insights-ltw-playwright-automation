async function login(page, email, password) {
  // Navigate to login page if needed
  await page.goto('https://www.lovethework.com/en/');
  await page.waitForNavigation({ timeout: 15000 }); 
  await page.waitForSelector('.cookie-accept', { timeout: 5000 });
  await page.click('.cookie-accept');
  await page.click('text=Sign in');
  await page.waitForNavigation({ timeout: 15000 }); 
  await page.waitForURL('https://auth.lionscreativity.com/u/login*');

  // Fill login form
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  

  // Submit form
  await page.click('button[type="submit"]');

  // Wait for a post-login URL or element
  await page.waitForURL('**/dashboard'); 
}

module.exports = { login };