let homepage = require('../pages/homepage')
let signinform = require('../pages/signinform')
let account = require('../pages/account')
var object = require('../testData/object.json')

describe('Login Form TestSuite', function () {

  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.get(object.TestUrl);

  });

  afterAll(function () {
    account.clickSignoutButton();
    //browser.close();


  });

  it('Login page', function () {


    signinform.verifySigninForm();
    signinform.verifyEmailAddress();
    signinform.verifyPassword();
    signinform.verifySigninButton();

  });

  it('Invalid credentials', function () {

    signinform.setEmailAddress(object.InvalidCredentials.EmailAddress1);
    signinform.setPassword(object.InvalidCredentials.password1);
    signinform.clickSignin();

    signinform.verifyAuthenticationFailedErrorMsg();


    signinform.setEmailAddress(object.InvalidCredentials.EmailAddress2);
    signinform.setPassword(object.InvalidCredentials.password2);
    signinform.clickSignin();

    signinform.verifyAuthenticationFailedErrorMsg();

    signinform.setEmailAddress(object.InvalidCredentials.EmailAddress3);
    signinform.setPassword(object.InvalidCredentials.password3);
    signinform.clickSignin();

    signinform.verifyAuthenticationFailedErrorMsg();

  });

  it('Login without credentials', function () {

    signinform.setEmailAddress(object.LoginWithoutCredentials.EmailAddress1);
    signinform.setPassword(object.LoginWithoutCredentials.password1);
    signinform.clickSignin();

    signinform.verifyEmailRequiredErrorMsg();


    signinform.setEmailAddress(object.LoginWithoutCredentials.EmailAddress2);
    signinform.setPassword(object.LoginWithoutCredentials.password2);
    signinform.clickSignin();

    signinform.verifyPasswordRequiredErrorMsg();

    signinform.setEmailAddress(object.LoginWithoutCredentials.EmailAddress3);
    signinform.setPassword(object.LoginWithoutCredentials.password3);
    signinform.clickSignin();

    signinform.verifyEmailRequiredErrorMsg();


  });

  it('Email Format highlighted Red/Green', function () {

    signinform.setEmailAddress(object['EmailFormatHighlightedRed&Green'].EmailAddress1);
    signinform.setPassword(object['EmailFormatHighlightedRed&Green'].password1);


    signinform.verifyEmailHighlightedRedTextbox();


    signinform.setEmailAddress(object['EmailFormatHighlightedRed&Green'].EmailAddress2);
    signinform.setPassword(object['EmailFormatHighlightedRed&Green'].password2);


    signinform.verifyEmailHighlightedRedTextbox();

    signinform.setEmailAddress(object['EmailFormatHighlightedRed&Green'].EmailAddress3);
    signinform.setPassword(object['EmailFormatHighlightedRed&Green'].password3);


    signinform.verifyEmailHighlightedGreenTextbox();


  });


  it('Successful Login', function () {

    signinform.setEmailAddress(object.SuccessfulLogin.EmailAddress1);
    signinform.setPassword(object.SuccessfulLogin.password1);
    signinform.clickSignin();


    signinform.verifyAccountSigninWelcomeMsg();

  });



})