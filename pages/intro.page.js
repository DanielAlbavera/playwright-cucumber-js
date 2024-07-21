const BasePage = require('./base.page');

/**
 * IntroPage object representing the Playwright Intro page.
 * @extends BasePage
 * @param {import('playwright').Page} page
 */
function IntroPage(page) {
  BasePage.call(this, page);
  this.page = page;
  this.installationHeader = this.page.locator('header h1');
}

module.exports = IntroPage;
