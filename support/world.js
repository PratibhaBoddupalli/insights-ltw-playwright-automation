const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor() {
    // Playwright handles
    this.browser = null;
    this.context = null;
    this.page = null;
  }
}

setWorldConstructor(CustomWorld);
