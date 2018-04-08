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
      controller: function () {},
      scope: {
        model: '=model'
      },
      replace: true,
      template: ''+
          '<label class="card" ng-class="{wrong: model.wrong, right: model.right}" style="--aspect-ratio: 99/160;">'+
            '<input type=checkbox ng-model="model.state">'+

            '<div class="slide faceup" ng-if="model.state">{{model.key}}</div>'+
            '<div class="slide facedown" ng-if="!model.state">?</div>'+

          '</label>'
    };
  });
