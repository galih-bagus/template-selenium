const {By, until} = require('selenium-webdriver');

async function fillField(selector, value) {
    const ele = await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    await driver.wait(until.elementIsVisible(ele), 10000);
    await ele.sendKeys(value);
}

async function getTitle(title) {
    await driver.wait(until.titleIs(title), 10000);
}

async function clickButton(selector) {
    const ele = await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    await driver.wait(until.elementIsVisible(ele), 10000);
    await ele.click();
}

async function getText(selector) {
    const ele = await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    await driver.wait(until.elementIsVisible(ele), 10000);
    const text = await ele.getText();
    return text;
}

module.exports = {
    fillField: fillField,
    getTitle: getTitle,
    clickButton: clickButton,
    getText: getText,
}