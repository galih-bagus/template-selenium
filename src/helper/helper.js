const {Builder, By, Key, until, Browser} = require("selenium-webdriver");
const element = require("../helper/element");
const pageLogin = require("../page/module/sub_module/test.page");

async function login(username, password) {
    const browser = process.env.BROWSER;
    driver = await new Builder().forBrowser(browser).build();
    const url = process.env.URL;

    await driver.get(url);
    await driver.manage().window().maximize();
    await element.getTitle(pageLogin.title);
    await element.fillField(pageLogin.usernameField, username)
    await element.fillField(pageLogin.passwordField, password)
    await element.clickButton(pageLogin.buttonLogin)
}

module.exports = {
    login: login,
}

