let homepage = function () {

    let signinHome_button = element(by.xpath('//a[contains(text(), "Sign in")]'));

    let homepageSlider = element(by.id('homepage-slider'));

    this.get = function (url) {
        Browser.get(url);
    }


    this.clickSigninButton = function () {
        signinHome_button.click();

    }

};

module.exports = new homepage();