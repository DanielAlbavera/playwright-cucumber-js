const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const BASE_PAGE = require('../../data/constants.data');
const HomePage = require('../../pages/home.page');

Given('I open the Playwright website', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.navigate(BASE_PAGE);
});

Then('the url should be {string}', async function (url) {
  await expect(this.page).toHaveURL(url);
});

Then('the title should be {string}', async function (title) {
  await expect(this.page).toHaveTitle(title);
});

Then('the url in the scenario context should be the same', async function () {
  const currentURL = this.get('currentURL');
  expect(this.page.url()).toBe(currentURL);
});
