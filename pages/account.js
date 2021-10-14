let account = function () {

    let signOut_link = element(by.xpath("//a[@title='Log me out']"));

    let viewMyAccount_link = element(by.xpath("//a[@title='View my customer account']"));

    let successfulCreatedMessage = element(by.xpath("//p[contains(text(), 'Welcome to your account.')]"));


    this.clickSignoutButton = function () {
        signOut_link.click();

    }

    this.verifyAccountCreationMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(successfulCreatedMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(successfulCreatedMessage.isDisplayed()).toBe(true);
    }

};

module.exports = new account();