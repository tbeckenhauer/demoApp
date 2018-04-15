"use strict";

/**
 * @ngdoc function
 * @name demoApp.directive:tmbJsonPrinter
 * @description
 * # AboutCtrl
 * Directive capable of printing out json as nested unordered lists.
 */
angular.module("demoApp").directive("tmbJsonPrinter", function(Cards, Shuffle) {
    return {
        template: "<ul><li ng-repeat='(k,v) in obj'>{{k}} {{v}}</li></ul>"
    };
});
