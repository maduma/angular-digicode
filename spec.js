/* global describe it browser expect */

describe('Protractor Demo App', function() {

  it('should have a title', function() {

    browser.get('https://angular-digicode-maduma.c9.io/index.html');

    expect(browser.getTitle()).toEqual('Digicode');

  });

});
