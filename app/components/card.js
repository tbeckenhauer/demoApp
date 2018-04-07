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
      controller: function ($scope) {},
      scope: {
        model: '=model'
      },
      replace: true,
      template: '<label>{{model.state ? model.key : "Down" }}<input type=checkbox ng-model="model.state"></label>'
    };
  });
