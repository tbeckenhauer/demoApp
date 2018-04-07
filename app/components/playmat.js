'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
  .directive('tmbPlaymat', function(Cards) {
    return {
      controller: function ($scope) {
        $scope.cardModels = Cards.cardModels;
      },
      template: ''+
        '<section class="playmat">'+
          '<h2>Place your 24 memory cards here.</h2>'+
          '<ul>'+
            '<li ng-repeat="cardModel in cardModels">'+
              '<card model=cardModel></card>'+
            '</li>'+
          '</ul>'+
        '</section>'
    };
  });
