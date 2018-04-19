'use strict';

/**
 * @ngdoc function
 * @name demoApp.directive:tmbCard
 * @description
 * # tmbCard
 * directive/component that will represent an individual card.
 */
angular.module('demoApp')
  .directive('tmbCard', function() {
    return {
      controller: function () {},
      scope: {
        model: '=model'
      },
      replace: true,
      template: ''+
          '<label class="tmbCard" ng-class="{wrong: model.wrong, right: model.right}" style="--aspect-ratio: 99/160;">'+
            '<input type=checkbox ng-model="model.state">'+

            '<div class="slide faceup" ng-if="model.state">{{model.key}}</div>'+
            '<div class="slide facedown" ng-if="!model.state">?</div>'+

          '</label>'
    };
  });
