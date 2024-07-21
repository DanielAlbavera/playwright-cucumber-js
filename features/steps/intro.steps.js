const { Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const IntroPage = require('../../pages/intro.page');

Then('the "Installation" header should be visible', async function () {
  this.introPage = new IntroPage(this.page);
  await expect(this.introPage.installationHeader).toBeVisible();
});
