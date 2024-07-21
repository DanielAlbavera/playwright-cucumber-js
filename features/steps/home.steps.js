const { When } = require('@cucumber/cucumber');

When('I click on "GET STARTED" button', async function () {
  await this.homePage.getStartedButton.click();
  this.set('currentURL', this.page.url());
});
