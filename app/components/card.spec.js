'use strict';

describe('Directive: card', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

    var $compile,
        $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Should display the base case with no input', function() {
      var element = $compile('<card></card>')($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain('?');
    });

    // it('Should contain a clickable checkbox input', function() {
    //   TODO it is not clear to my why this unit test is failing to update.
    //   var element = $compile('<card></card>')($rootScope);
    //   $rootScope.$digest();
    //   element.click();
    //   console.log(element.html());
    //   expect(element.text()).toContain('Up');
    // });
});
