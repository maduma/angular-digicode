/* global describe it browser element by expect */

describe('Digicode component', function() {
  
  it('should shuffle the digicode, the first element change', function() {
    browser.get('https://angular-digicode-maduma.c9.io/index.html');
    var code0 = element.all(by.css('button')).get(0).getText(); 
    
    element(by.id('ma-digicode-2')).click();
    element(by.id('ma-digicode-4')).click();
    element(by.id('ma-digicode-3')).click();
    element(by.id('ma-digicode-4')).click();
    
    var code1 = element.all(by.css('button')).get(0).getText(); 
    
    expect(code0).not.toEqual(code1);
  });
  
  it('should accept code 4444', function() {

    browser.get('https://angular-digicode-maduma.c9.io/index.html');
    
    expect(element(by.id('ma-digicode-success')).getText()).toEqual('0');
    expect(element(by.id('ma-digicode-count')).getText()).toEqual('0');
    element(by.id('ma-digicode-4')).click();
    element(by.id('ma-digicode-4')).click();
    element(by.id('ma-digicode-4')).click();
    element(by.id('ma-digicode-4')).click();
    expect(element(by.id('ma-digicode-success')).getText()).toEqual('1');
    expect(element(by.id('ma-digicode-count')).getText()).toEqual('1');

  });
  
  it('should reject code 2222', function() {

    browser.get('https://angular-digicode-maduma.c9.io/index.html');
    
    expect(element(by.id('ma-digicode-success')).getText()).toEqual('0');
    expect(element(by.id('ma-digicode-count')).getText()).toEqual('0');
    element(by.id('ma-digicode-2')).click();
    element(by.id('ma-digicode-2')).click();
    element(by.id('ma-digicode-2')).click();
    element(by.id('ma-digicode-2')).click();
    expect(element(by.id('ma-digicode-success')).getText()).toEqual('0');
    expect(element(by.id('ma-digicode-failure')).getText()).toEqual('0');
    expect(element(by.id('ma-digicode-count')).getText()).toEqual('1');
  });

});
