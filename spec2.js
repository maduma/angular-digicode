/* global describe it browser element by expect */

describe('Digicode component', function() {

  var url = 'https://angular-digicode-maduma.c9.io/index.html';
  url = 'http://localhost/index.html';

  
  it('should try 3 times before failure', function() {

    browser.get(url);
    
    expect(element(by.id('ma-digicode-success')).getText()).toEqual('0');
    expect(element(by.id('ma-digicode-count')).getText()).toEqual('0');
    element(by.id('ma-digicode-2')).click();
    element(by.id('ma-digicode-5')).click();
    element(by.id('ma-digicode-3')).click();
    element(by.id('ma-digicode-9')).click();
    element(by.id('ma-digicode-2')).click();
    element(by.id('ma-digicode-2')).click();
    element(by.id('ma-digicode-5')).click();
    element(by.id('ma-digicode-3')).click();
    element(by.id('ma-digicode-9')).click();
    element(by.id('ma-digicode-5')).click();
    element(by.id('ma-digicode-3')).click();
    element(by.id('ma-digicode-9')).click();
    expect(element(by.id('ma-digicode-success')).getText()).toEqual('0');
    expect(element(by.id('ma-digicode-failure')).getText()).toEqual('1');
    expect(element(by.id('ma-digicode-count')).getText()).toEqual('3');
    
  });


});
