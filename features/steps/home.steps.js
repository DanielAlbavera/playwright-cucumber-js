const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../../pages/home.page');
const BASE_PAGE = require('../../data/constants');

Given('I open the Playwright website', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.navigate(BASE_PAGE);
});

When('I click on "GET STARTED" button', async function () {
  await this.homePage.getStartedButton.click();
  this.set('currentURL', this.page.url());
});

Then('the url should be {string}', async function (url) {
  await expect(this.page).toHaveURL(url);
});

Then('the title should be {string}', async function (title) {
  await expect(this.page).toHaveTitle(title);
});
