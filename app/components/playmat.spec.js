'use strict';

describe('Directive: tmbPlaymat', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

    var $compile,
        $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    xit('Replaces the element with the appropriate content', function() {
      //TODO currently this test is brittle.  Sometimes failes, sometimes doesn't.
      //Seems to be a race condition loading the external knuthShuffle dependency.
      var element = $compile("<tmb-playmat></tmb-playmat>")($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("Place your 24 memory cards here.");
    });
});
