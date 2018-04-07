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
      template: ''+
        '<label>'+
          '<input type=checkbox ng-model="model.state">'+
          '{{model.state ? model.key : "Down" }}'+
        '</label>'
    };
  });
