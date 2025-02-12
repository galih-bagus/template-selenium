const element = require("../../../helper/element");
const helper = require("../../../helper/helper");
const assertion = require("../../../helper/assertion");
const pageLogin = require("../../../page/module/sub_module/test.page");
const data = require("../../../data/module/sub_module/test.data");

describe("Sauuce Demo", function () {
    before(async function () {
        // Before all
        // await helper.login(
        //     process.env.EMAIL_USER,
        //     process.env.PASSWORD_USER
        // );
    });
    after(async function () {
        await driver.sleep(3000);
        await driver.quit();
    });

    it('Login with invalid data', async function () {
        await helper.login(
            data.USER_INVALID.username,
            data.USER_INVALID.password,
        );
        await assertion.assertionActualExpectedValue(pageLogin.usernameField, data.USER_INVALID.username);
        await assertion.assertionActualExpectedText(pageLogin.errorField, data.messageError);
    });

    it('Login with vallid data', async function () {
        await helper.login(
            data.USER_VALID.username,
            data.USER_VALID.password,
        );
        await assertion.assertionActualExpectedValue(pageLogin.usernameField, data.USER_VALID.username);
        await assertion.assertionActualExpectedValue(pageLogin.passwordField, data.USER_VALID.password);
        await assertion.assertionActualExpectedText(pageLogin.errorField, data.messageError);
    });
});