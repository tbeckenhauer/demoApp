'use strict';

describe('Directive: tmbPlaymat', function () {

  // load the controller's module
  beforeEach(module('memoryGameApp'));

    var $compile,
        $rootScope;

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Replaces the element with the appropriate content', function() {
      // Compile a piece of HTML containing the directive
      var element = $compile("<tmb-playmat></tmb-playmat>")($rootScope);
      // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
      $rootScope.$digest();
      // Check that the compiled element contains the templated content
      expect(element.html()).toContain("Place your 24 memory cards here.");
    });
});