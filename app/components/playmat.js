'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
  .directive('tmbPlaymat', function(Cards, Shuffle) {
    return {
      controller: function ($scope) {
        $scope.cardModels = Shuffle.knuth(Cards.cardModels);
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
