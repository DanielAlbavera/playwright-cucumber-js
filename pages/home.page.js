const BasePage = require('./base.page');

/**
 * HomePage object representing the Playwright homepage.
 * @extends BasePage
 * @param {import('playwright').Page} page
 */
function HomePage(page) {
  BasePage.call(this, page);
  this.page = page;
  this.getStartedButton = this.page.getByText('GET STARTED');
}

HomePage.prototype = Object.create(BasePage.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = HomePage;
