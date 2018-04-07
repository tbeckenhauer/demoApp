'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.directive:card
 * @description
 * # card
 * directive/component that will represent an individual card.
 */
angular.module('memoryGameApp')
  .directive('card', function() {
    return {
      controller: function ($scope) {
        $scope.state = 'Down';
      },
      replace: true,
      template: '<label>{{state}}<input type=checkbox ng-model="state" ng-true-value="\'Up\'" ng-false-value="\'Down\'"></label>'
    };
  });
