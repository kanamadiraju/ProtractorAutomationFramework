let createaccountform = function () {


    //let accountCreation_form = element(by.id('login_form'));

    let accountCreation_form = element(by.xpath("//*[@id='noSlide']/h1"));

    let createAccountEmail_input = element(by.xpath("//input[@name='email_create']"));

    let accountEmailHighlighted_redTextbox = element(by.xpath("//div[@class='form-group form-error']"));

    let customerFirstName_input = element(by.id('customer_firstname'));

    let customerLastName_input = element(by.id('customer_lastname'));

    let customerEmail_input = element(by.id('email'));

    let customerPassword_input = element(by.id('passwd'));

    let customerDOBDate_dropdown = element(by.id('days'));

    let customerDOBMonth_dropdown = element(by.id('months'));

    let customerDOBYears_dropdown = element(by.id('years'));

    let addressAlias_input = element(by.xpath("//input[@name='alias']"));

    let register_button = element(by.id("submitAccount"));

    let mobilePhone_input = element(by.xpath("//input[@name='phone_mobile']"));

    let homePhone_input = element(by.xpath("//input[@name='phone']"));

    let postalCode_input = element(by.xpath("//input[@name='postcode']"));

    let address1_input = element(by.id('address1'));

    let city_input = element(by.id('city'));

    let state_dropdown = element(by.id('id_state'));




    let customerFirstnameHighlighted_GreenTextbox = element(by.xpath("//div[@class='required form-group form-ok']//input[@id='customer_firstname']"));
    let customerLastnameHighlighted_GreenTextbox = element(by.xpath("//div[@class='required form-group form-ok']//input[@id='customer_lastname']"));
    let customerEmailHighlighted_GreenTextbox = element(by.xpath("//div[@class='required form-group form-ok']//input[@id='email']"));
    let customerPasswordHighlighted_GreenTextbox = element(by.xpath("//div[@class='required password form-group form-ok']//input[@id='passwd']"));

    let customerFirstnameHighlighted_RedTextbox = element(by.xpath("//div[@class='required form-group form-error']//input[@id='customer_firstname']"));
    let customerLastnameHighlighted_RedTextbox = element(by.xpath("//div[@class='required form-group form-error']//input[@id='customer_lastname']"));
    let customerEmailHighlighted_RedTextbox = element(by.xpath("//div[@class='required form-group form-error']//input[@id='email']"));
    let customerPasswordHighlighted_RedTextbox = element(by.xpath("//div[@class='required password form-group form-error']//input[@id='passwd']"));

    let phoneNumberRequired_errorMessage = element(by.xpath("//li[contains(text(), 'You must register at least one phone number.')]"));
    let lastNameRequired_errorMessage = element(by.xpath("//b[contains(text(), 'lastname')]"));
    let firstNameRequired_errorMessage = element(by.xpath("//b[contains(text(), 'firstname')]"));
    let emailRequired_errorMessage = element(by.xpath("//b[contains(text(), 'email')]"));

    let passwordRequired_errorMessage = element(by.xpath("//b[contains(text(), 'passwd')]"));
    let aliasRequired_errorMessage = element(by.xpath("//b[contains(text(), 'alias')]"));
    let Address1Required_errorMessage = element(by.xpath("//b[contains(text(), 'address1')]"));
    let cityRequired_errorMessage = element(by.xpath("//b[contains(text(), 'city')]"));

    let countryRequired_errorMessage = element(by.xpath("//li[contains(text(), 'country')]"));
    let mobilePhoneNumberInvalid_errorMessage = element(by.xpath("//b[contains(text(), 'phone_mobile')]"));

    let homePhoneNumberInvalid_errorMessage = element(by.xpath("//b[text()='phone']"));

    let postalCodeInvalid_errorMessage = element(by.xpath("//li[contains(text(), 'The Zip/Postal code you')]"));

    let EmailInvalid_errorMessage = element(by.xpath("//li[contains(text(), ' is invalid.')]/b[contains(text(), 'email')]"));
    let passwordInvalid_errorMessage = element(by.xpath("//li[contains(text(), ' is invalid.')]/b[contains(text(), 'passwd')]"));



    this.selectStateFromDropdown = function (state) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(state_dropdown), 5000, 'Element taking too long to appear in the DOM');
        state_dropdown.click();
        element(by.css("#id_state [value='" + state + "']")).click();

    }


    this.selectDOBDate = function (date) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerDOBDate_dropdown), 5000, 'Element taking too long to appear in the DOM');
        customerDOBDate_dropdown.click();
        element(by.css("#days [value='" + date + "']")).click();


    }

    this.selectDOBMonth = function (month) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerDOBMonth_dropdown), 5000, 'Element taking too long to appear in the DOM');
        customerDOBMonth_dropdown.click();
        element(by.css("#months [value='" + month + "']")).click();


    }

    this.selectDOBYear = function (year) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerDOBYears_dropdown), 5000, 'Element taking too long to appear in the DOM');
        customerDOBYears_dropdown.click();
        element(by.css("#years [value='" + year + "']")).click();


    }

    this.setAddressField = function (address) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(address1_input), 5000, 'Element taking too long to appear in the DOM');
        address1_input.click();
        address1_input.clear().then(function () {
            address1_input.sendKeys(address);
        })

    }

    this.setCityField = function (city) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(city_input), 5000, 'Element taking too long to appear in the DOM');
        city_input.click();
        city_input.clear().then(function () {
            city_input.sendKeys(city);
        })

    }

    this.setCustomerFirstName = function (firstName) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerFirstName_input), 5000, 'Element taking too long to appear in the DOM');
        customerFirstName_input.click();
        customerFirstName_input.clear().then(function () {
            customerFirstName_input.sendKeys(firstName);
        })



    }

    this.setCustomerLastName = function (lastName) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerLastName_input), 5000, 'Element taking too long to appear in the DOM');
        customerLastName_input.click();
        customerLastName_input.clear().then(function () {
            customerLastName_input.sendKeys(lastName);
        })

    }

    this.setCustomerEmail = function (email) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerEmail_input), 5000, 'Element taking too long to appear in the DOM');
        customerEmail_input.click();
        customerEmail_input.clear().then(function () {
            customerEmail_input.sendKeys(email);
        })


    }

    this.setCustomerPassword = function (password) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerPassword_input), 5000, 'Element taking too long to appear in the DOM');
        customerPassword_input.click();
        customerPassword_input.clear().then(function () {
            customerPassword_input.sendKeys(password);
        })

    }

    this.setAdddressAlias = function (aliasAddress) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(addressAlias_input), 5000, 'Element taking too long to appear in the DOM');
        addressAlias_input.click();
        addressAlias_input.clear().then(function () {
            addressAlias_input.sendKeys(aliasAddress);
        })

    }

    this.setHomePhone = function (homePhoneNumber) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(homePhone_input), 5000, 'Element taking too long to appear in the DOM');
        homePhone_input.click();
        homePhone_input.clear().then(function () {
            homePhone_input.sendKeys(homePhoneNumber);
        })

    }

    this.setMobilePhone = function (mobileNumber) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(mobilePhone_input), 5000, 'Element taking too long to appear in the DOM');
        mobilePhone_input.click();
        mobilePhone_input.clear().then(function () {
            mobilePhone_input.sendKeys(mobileNumber);
        })

    }

    this.setPostalCode = function (postalcode) {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(postalCode_input), 5000, 'Element taking too long to appear in the DOM');
        postalCode_input.click();
        postalCode_input.clear().then(function () {
            postalCode_input.sendKeys(postalcode);
        })

    }


    this.verifyEmailInvalidErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(EmailInvalid_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(EmailInvalid_errorMessage.isDisplayed()).toBe(true);
    }

    this.verifyPasswordInvalidErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(passwordInvalid_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(passwordInvalid_errorMessage.isDisplayed()).toBe(true);
    }

    this.verifyPostalCodeInvalidErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(postalCodeInvalid_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(postalCodeInvalid_errorMessage.isDisplayed()).toBe(true);
    }


    this.verifyHomePhoneNumberInvalidErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(homePhoneNumberInvalid_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(homePhoneNumberInvalid_errorMessage.isDisplayed()).toBe(true);
    }



    this.verifyMobileNumberInvalidErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(mobilePhoneNumberInvalid_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(mobilePhoneNumberInvalid_errorMessage.isDisplayed()).toBe(true);
    }


    this.verifyCountryRequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(countryRequired_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(countryRequired_errorMessage.isDisplayed()).toBe(true);
    }


    this.verifyCityRequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(cityRequired_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(cityRequired_errorMessage.isDisplayed()).toBe(true);
    }


    this.verifyAddress1RequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(Address1Required_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(Address1Required_errorMessage.isDisplayed()).toBe(true);
    }



    this.verifyAliasRequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(aliasRequired_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(aliasRequired_errorMessage.isDisplayed()).toBe(true);
    }



    this.verifyPasswordRequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(passwordRequired_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(passwordRequired_errorMessage.isDisplayed()).toBe(true);
    }

    this.verifyEmailRequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(emailRequired_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(emailRequired_errorMessage.isDisplayed()).toBe(true);
    }



    this.verifyFirstNameRequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(firstNameRequired_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(firstNameRequired_errorMessage.isDisplayed()).toBe(true);
    }

    this.verifyLastNameRequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(lastNameRequired_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(lastNameRequired_errorMessage.isDisplayed()).toBe(true);
    }

    this.verifyPhoneNumberRequiredErrorMessage = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(phoneNumberRequired_errorMessage), 10000, 'Element taking too long to appear in the DOM');

        expect(phoneNumberRequired_errorMessage.isDisplayed()).toBe(true);
    }


    this.verifyCustomerFirstnameHighlightedRedTextbox = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerFirstnameHighlighted_RedTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(customerFirstnameHighlighted_RedTextbox.isDisplayed()).toBe(true);
    }

    this.verifyCustomerLastnameHighlightedRedTextbox = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerLastnameHighlighted_RedTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(customerLastnameHighlighted_RedTextbox.isDisplayed()).toBe(true);
    }
    this.verifyCustomerEmailHighlightedRedTextbox = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerEmailHighlighted_RedTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(customerEmailHighlighted_RedTextbox.isDisplayed()).toBe(true);
    }
    this.verifyCustomerPasswordHighlightedRedTextbox = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerPasswordHighlighted_RedTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(customerPasswordHighlighted_RedTextbox.isDisplayed()).toBe(true);
    }


    this.verifyCustomerFirstnameHighlightedGreenTextbox = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerFirstnameHighlighted_GreenTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(customerFirstnameHighlighted_GreenTextbox.isDisplayed()).toBe(true);
    }

    this.verifyCustomerLastnameHighlightedGreenTextbox = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerLastnameHighlighted_GreenTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(customerLastnameHighlighted_GreenTextbox.isDisplayed()).toBe(true);
    }
    this.verifyCustomerEmailHighlightedGreenTextbox = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerEmailHighlighted_GreenTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(customerEmailHighlighted_GreenTextbox.isDisplayed()).toBe(true);
    }
    this.verifyCustomerPasswordHighlightedGreenTextbox = function () {

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.presenceOf(customerPasswordHighlighted_GreenTextbox), 10000, 'Element taking too long to appear in the DOM');

        expect(customerPasswordHighlighted_GreenTextbox.isDisplayed()).toBe(true);
    }

    this.clickAccountCreationForm = function () {
        accountCreation_form.click();

    }

    this.clickRegisterButton = function () {
        register_button.click();

    }


    this.verifyAccountCreationForm = function () {

        browser.wait(protractor.ExpectedConditions.visibilityOf(accountCreation_form), 5000);
        expect(accountCreation_form.isDisplayed()).toBe(true);


        /*browser.waitForAngularEnabled(false);
        var EC = protractor.ExpectedConditions;
        
        browser.wait(EC.presenceOf(accountCreation_form), 10000, 'account creation form taking too long to appear in the DOM');
        expect(accountCreation_form.isDisplayed()).toBe(true);

        */

    }

    this.verifyAccountEmailHighlightedRedTextbox = function () {
        expect(accountEmailHighlighted_redTextbox.isDisplayed()).toBe(true);
    }


    this.verifyInvalidEmailErrorMessage = function () {
        expect(invalidEmail_errorMsg.isDisplayed()).toBe(true);
    }

};

module.exports = new createaccountform();