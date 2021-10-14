let signinform = function () {

    let signin_form = element(by.id('login_form'));

    let signinEmail_input = element(by.id('email'));

    let signinPassword_input = element(by.id('passwd'));

    let signin_button = element(by.id('SubmitLogin'));

    let createAccount_button = element(by.xpath("//button[@id='SubmitCreate']"));

    let authFailed_errorMsg = element(by.xpath("//li[contains(text(), 'Authentication failed.')]"));

    let emailRequired_errorMsg = element(by.xpath("//li[contains(text(), 'An email address required.')]"));

    let passwordRequired_errorMsg = element(by.xpath("//li[contains(text(), 'Password is required.')]"));

    let emailHighlighted_redTextbox = element(by.xpath("//div[@class='form-group form-error']//input[@id='email']"));

    let emailHighlighted_greenTextbox = element(by.xpath("//div[@class='form-group form-ok']//input[@id='email']"));

    let accountSignin_welcomeMessage = element(by.xpath("//p[contains(text(), 'Welcome to your account.')]"));


    this.setEmailAddress = function (emailID) {

        signinEmail_input.clear().then(function () {
            signinEmail_input.sendKeys(emailID)
        })
        //signinEmail_input.sendKeys(emailID);

    }

    this.setPassword = function (password) {
        //  signinPassword_input.sendKeys(password);
        signinPassword_input.clear().then(function () {
            signinPassword_input.sendKeys(password)
        })

    }

    this.clickSignin = function () {
        signin_button.click();

    }

    this.verifySigninForm = function () {
        expect(signin_form.isDisplayed()).toBe(true);
    }

    this.verifyEmailAddress = function () {
        expect(signinEmail_input.isDisplayed()).toBe(true);
    }

    this.verifyPassword = function () {
        expect(signinPassword_input.isDisplayed()).toBe(true);
    }

    this.verifySigninButton = function () {
        expect(signin_button.isDisplayed()).toBe(true);
    }

    this.clickCreateAccountbutton = function () {
        createAccount_button.click();
    }

    this.verifyAuthenticationFailedErrorMsg = function () {
        expect(authFailed_errorMsg.isDisplayed()).toBe(true);
    }

    this.verifyEmailRequiredErrorMsg = function () {
        expect(emailRequired_errorMsg.isDisplayed()).toBe(true);
    }

    this.verifyPasswordRequiredErrorMsg = function () {
        expect(passwordRequired_errorMsg.isDisplayed()).toBe(true);
    }

    this.verifyEmailHighlightedRedTextbox = function () {
        expect(emailHighlighted_redTextbox.isDisplayed()).toBe(true);
    }

    this.verifyEmailHighlightedGreenTextbox = function () {
        expect(emailHighlighted_greenTextbox.isDisplayed()).toBe(true);
    }


    this.verifyAccountSigninWelcomeMsg = function () {
        expect(accountSignin_welcomeMessage.isDisplayed()).toBe(true);
    }

};

module.exports = new signinform();