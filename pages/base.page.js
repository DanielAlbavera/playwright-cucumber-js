/**
 * BasePage object providing basic functionalities for all pages.
 * @param {import('playwright').Page} page - The Playwright page object.
 */
function BasePage(page) {
  this.page = page;
}

/**
 * Navigates to the specified URL.
 * @param {string} url - The URL to navigate to.
 * @returns {Promise<void>}
 */
BasePage.prototype.navigate = async function (url) {
  await this.page.goto(url);
};

/**
 * Navigates to the specified URL.
 * @param {string} url - The URL to navigate to.
 * @returns {Promise<void>}
 */
BasePage.prototype.getPage = async function () {
  return this.page;
};

module.exports = BasePage;
