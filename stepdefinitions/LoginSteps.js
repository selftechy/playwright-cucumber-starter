const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")
const { LoginPage } = require("../pages/LoginPage");
const { HomePage } = require("../pages/HomePage");


const loginPage = new LoginPage();
const homePage = new HomePage();


Given('the application is opened in a browser', async function () {
  await loginPage.navigateToApplication();
})

When('valid user login to the application',async function () {
  await loginPage.enterCredentialsAndLogin();
})

Then('the home page is displayed',async function () {
  expect(await homePage.isProductsPresent()).toBe(true)
})