let createaccount = require('../pages/createaccount')
let createaccountform = require('../pages/createaccountform')
let account = require('../pages/account')
var object = require('../testData/object.json')

describe('Create Account TestSuite', function () {

    beforeAll(function () {

        browser.waitForAngularEnabled(false);
        browser.get(object.TestUrl);

    });

    afterAll(function () {
        account.clickSignoutButton();
        browser.close();
    
      });


    it('Empty email validation', function () {

        createaccount.validateErrorMessage();

    });

    it('Wrong Email validation', function () {
        createaccount.setAccountEmailAddress(object.WrongEmailValidation.EmailAddress);
        createaccount.verifyInvalidEmailErrorMessage();
        createaccount.verifyAccountEmailHighlightedRedTextbox();

    });

    it('Registered Email validation', function () {
        createaccount.setAccountEmailAddress(object.RegisteredEmailvalidation.EmailAddress);
        createaccount.verifyAccountEmailAlreadyRegisteredMessage();
    });

    it('Correct Email validation', function () {


        createaccount.setAccountEmailAddress(object.CorrectEmailvalidation.EmailAddress);
        // createaccount.clickCreateAccountbutton();
        browser.sleep(10000);
        createaccountform.verifyAccountCreationForm();


    });

    it('Personal info field validation', function () {
        //with values
        createaccountform.setCustomerFirstName(object.PersonalInfoFieldvalidation.FirstName1);
        createaccountform.setCustomerLastName(object.PersonalInfoFieldvalidation.LastName1);
        createaccountform.setCustomerEmail(object.PersonalInfoFieldvalidation.EmailAddress1);
        createaccountform.setCustomerPassword(object.PersonalInfoFieldvalidation.Password1);

        createaccountform.clickAccountCreationForm();

        createaccountform.verifyCustomerFirstnameHighlightedGreenTextbox();
        createaccountform.verifyCustomerLastnameHighlightedGreenTextbox();
        createaccountform.verifyCustomerEmailHighlightedGreenTextbox();
        createaccountform.verifyCustomerPasswordHighlightedGreenTextbox();

        //without values

        createaccountform.setCustomerFirstName(object.PersonalInfoFieldvalidation.FirstName2);
        createaccountform.setCustomerLastName(object.PersonalInfoFieldvalidation.LastName2);
        createaccountform.setCustomerEmail(object.PersonalInfoFieldvalidation.EmailAddress2);
        createaccountform.setCustomerPassword(object.PersonalInfoFieldvalidation.Password2);

        createaccountform.clickAccountCreationForm();

        createaccountform.verifyCustomerFirstnameHighlightedRedTextbox();
        createaccountform.verifyCustomerLastnameHighlightedRedTextbox();
        createaccountform.verifyCustomerEmailHighlightedRedTextbox();
        createaccountform.verifyCustomerPasswordHighlightedRedTextbox();





    });

    it('required fields empty', function () {
        //with values

        createaccountform.setAdddressAlias(object.RequiredFieldsEmpty.AlianAddress);
        createaccountform.setCustomerEmail(object.RequiredFieldsEmpty.EmailAddress);
        createaccountform.setCustomerFirstName(object.RequiredFieldsEmpty.FirstName);
        createaccountform.setCustomerLastName(object.RequiredFieldsEmpty.LastName);
        createaccountform.setCustomerPassword(object.RequiredFieldsEmpty.Password);

        createaccountform.clickRegisterButton();

        createaccountform.verifyEmailRequiredErrorMessage();
        createaccountform.verifyFirstNameRequiredErrorMessage();
        createaccountform.verifyLastNameRequiredErrorMessage();
        createaccountform.verifyPasswordRequiredErrorMessage();
        createaccountform.verifyPhoneNumberRequiredErrorMessage();
        createaccountform.verifyAddress1RequiredErrorMessage();
        createaccountform.verifyAliasRequiredErrorMessage();
        createaccountform.verifyCityRequiredErrorMessage();
        createaccountform.verifyCountryRequiredErrorMessage();


    });

    it('required fields Input format', function () {

        //Wrong format

        createaccountform.setCustomerEmail(object.RequiredFieldInputsFormat.EmailAddress);
        createaccountform.setCustomerPassword(object.RequiredFieldInputsFormat.Password);
        createaccountform.setMobilePhone(object.RequiredFieldInputsFormat.MobilePhone);
        createaccountform.setHomePhone(object.RequiredFieldInputsFormat.HomePhone);
        createaccountform.setPostalCode(object.RequiredFieldInputsFormat.PostalCode)


        createaccountform.clickRegisterButton();

        createaccountform.verifyMobileNumberInvalidErrorMessage();
        createaccountform.verifyHomePhoneNumberInvalidErrorMessage();
        createaccountform.verifyPostalCodeInvalidErrorMessage();
        createaccountform.verifyEmailInvalidErrorMessage();
        createaccountform.verifyPasswordInvalidErrorMessage();



    });


    it('Create account successfully', function () {

        //Wrong format

        createaccountform.setCustomerFirstName(object.CreateAccountSuccessfully.FirstName);
        createaccountform.setCustomerLastName(object.CreateAccountSuccessfully.LastName);
        createaccountform.setCustomerEmail(object.CreateAccountSuccessfully.EmailAddress);
        createaccountform.setCustomerPassword(object.CreateAccountSuccessfully.Password);

        createaccountform.selectDOBDate(object.CreateAccountSuccessfully.DOBDate);
        createaccountform.selectDOBMonth(object.CreateAccountSuccessfully.DOBMonth);
        createaccountform.selectDOBYear(object.CreateAccountSuccessfully.DOBYear);
        createaccountform.setAddressField(object.CreateAccountSuccessfully.Address);
        createaccountform.setCityField(object.CreateAccountSuccessfully.City);
        createaccountform.selectStateFromDropdown(object.CreateAccountSuccessfully.State)

        createaccountform.setAdddressAlias(object.CreateAccountSuccessfully.AlianAddress);
        createaccountform.setMobilePhone(object.CreateAccountSuccessfully.MobilePhone);
        createaccountform.setHomePhone(object.CreateAccountSuccessfully.HomePhone);
        createaccountform.setPostalCode(object.CreateAccountSuccessfully.PostalCode)

        createaccountform.clickRegisterButton();

        account.verifyAccountCreationMessage();

    });





});