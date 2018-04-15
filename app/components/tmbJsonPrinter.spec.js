"use strict";

describe("Directive: tmpJsonPrinter", function () {

  // load the controller"s module
  beforeEach(module("demoApp"));

    var $compile,
        $rootScope;

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it("should return an empty string if no json object is provided", function() {
        var element = $compile("<tmb-json-printer></tmb-json-printer>")($rootScope);
        $rootScope.$digest();
        expect(angular.element('ul', element).length).toBe(1);
    });

    it("should print out the key and value of an object as an li tag", function() {
        $rootScope.obj = {
            "Key 1": "Value 1",
        };
        var element = $compile("<tmb-json-printer json='obj'></tmb-json-printer>")($rootScope);
        $rootScope.$digest();
        expect(angular.element('li', element).length).toBe(1);
    });

    it("should print out the keys and values of an object as li tags", function() {
        $rootScope.obj = {
            "Key 1": "Value 1",
            "Key 2": "Value 2",
        };
        var element = $compile("<tmb-json-printer json='obj'></tmb-json-printer>")($rootScope);
        $rootScope.$digest();
        expect(angular.element('li', element).length).toBe(2);
    });



});
