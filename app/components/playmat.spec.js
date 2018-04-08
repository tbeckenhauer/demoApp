'use strict';

describe('Directive: tmbPlaymat', function () {

  // load the controller's module
  beforeEach(module('memoryGameApp'));

    var $compile,
        $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
      var element = $compile("<tmb-playmat></tmb-playmat>")($rootScope);
      $rootScope.$digest();
      expect(element.html()).toContain("Place your 24 memory cards here.");
    });
});
