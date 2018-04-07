'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
  .directive('tmbPlaymat', function() {
    return {
      controller: function ($scope) {
        $scope.cardModels = [
          {
            key: 0,
            pair: 0,
            state: false
          },
          {
            key: 0,
            pair: 1,
            state: false
          },
          {
            key: 1,
            pair: 0,
            state: false
          },
          {
            key: 1,
            pair: 1,
            state: false
          }
        ];
      },
      replace: true,
      template: ''+
        '<section>'+
          '<h2>Place your 24 memory cards here.</h2>'+
          '<ul>'+
            '<li ng-repeat="cardModel in cardModels">'+
              '<card model=cardModel></card>'+
            '</li>'+
          '</ul>'+
        '</section>'
    };
  });
