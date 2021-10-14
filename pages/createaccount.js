let createaccount = function () {

    //let signOut_link = element(by.xpath("//a[@title='Log me out']"));

    //let viewMyAccount_link = element(by.xpath("//a[@title='View my customer account']"));

    let invalidEmail_errorMsg = element(by.xpath("//li[contains(text(), 'Invalid email address.')]"));

    let createAccount_button = element(by.xpath("//button[@id='SubmitCreate']"));

    let createAccountEmail_input = element(by.xpath("//input[@name='email_create']"));

    let accountEmailHighlighted_redTextbox = element(by.xpath("//div[@class='form-group form-error']"));

    let accountEmailAlreadyRegistered_errorMsg = element(by.xpath("//li[contains(text(), 'An account using this email')]"));

    this.verifyAccountEmailAlreadyRegisteredMessage = function () {
        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(accountEmailAlreadyRegistered_errorMsg), 10000, 'Already registered Element taking too long to appear in the DOM');
        expect(accountEmailAlreadyRegistered_errorMsg.isDisplayed()).toBe(true);
    }

    this.verifyAccountEmailHighlightedRedTextbox = function () {
        //var elm = element(by.xpath("//li[contains(text(), 'Invalid email address.')]"));
        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(accountEmailHighlighted_redTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(accountEmailHighlighted_redTextbox.isDisplayed()).toBe(true);
    }

    this.setAccountEmailAddress = function (emailID) {


        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(createAccountEmail_input), 5000, 'Element taking too long to appear in the DOM');
        createAccountEmail_input.click();
        createAccountEmail_input.clear().then(function () {
            createAccountEmail_input.sendKeys(emailID).then(function () {
                createAccount_button.click();
            })
        })
        //signinEmail_input.sendKeys(emailID);

    }

    this.verifyInvalidEmailErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.driver.wait(EC.presenceOf(invalidEmail_errorMsg), 10000, 'Element taking too long to appear in the DOM');
        expect(invalidEmail_errorMsg.isDisplayed()).toBe(true);
    }

    this.validateErrorMessage = function () {
        //var EC = protractor.ExpectedConditions;

        // browser.wait(EC.elementToBeClickable(createAccount_button), 5000);

        createAccount_button.click().then(function () {
            var EC = protractor.ExpectedConditions;

            browser.driver.wait(EC.presenceOf(invalidEmail_errorMsg), 10000, 'Element taking too long to appear in the DOM');
            expect(invalidEmail_errorMsg.isDisplayed()).toBe(true);

        })


    }

    this.clickCreateAccountbutton = function () {
        //var EC = protractor.ExpectedConditions;

        // browser.wait(EC.elementToBeClickable(createAccount_button), 5000);

        createAccount_button.click();


    }

};

module.exports = new createaccount();