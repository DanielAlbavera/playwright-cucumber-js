const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

function CustomWorld() {
  this.browser = null;
  this.context = null;
  this.page = null;
  this.stateContext = {};
}

CustomWorld.prototype.set = function (key, value) {
  this.stateContext[key] = value;
};

CustomWorld.prototype.get = function (key) {
  return this.stateContext[key];
};

CustomWorld.prototype.openBrowser = async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
};

CustomWorld.prototype.closeBrowser = async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
};

setWorldConstructor(CustomWorld);
