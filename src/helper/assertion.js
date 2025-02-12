const {By, until} = require('selenium-webdriver');
const {expect} = require('chai');

async function assertionActualExpectedText(selector, expectedValue) {
    const ele = await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    await driver.wait(until.elementIsVisible(ele), 10000);
    const actualValue = await ele.getText();
    expect(actualValue).to.equal(expectedValue);
}

async function assertionActualExpectedValue(selector, expectedValue) {
    const ele = await driver.wait(until.elementLocated(By.xpath(selector)), 10000);
    await driver.wait(until.elementIsVisible(ele), 10000);
    const actualValue = await ele.getAttribute('value');
    expect(actualValue).to.equal(expectedValue);
}

module.exports = {
    assertionActualExpectedText: assertionActualExpectedText,
    assertionActualExpectedValue: assertionActualExpectedValue,
}