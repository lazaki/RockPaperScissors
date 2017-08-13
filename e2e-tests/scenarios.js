'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /startGame when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/startGame");
  });


  describe('startGame', function() {

    beforeEach(function() {
      browser.get('index.html#!/startGame');
    });


    it('should render startGame when user navigates to /startGame', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('playGame', function() {

    beforeEach(function() {
      browser.get('index.html#!/playGame');
    });


    it('should render playGame when user navigates to /playGame', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
