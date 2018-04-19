'use strict';

/**
 * @ngdoc function
 * @name demoApp.directive:tmbPlaymat
 * @description
 * tmbPlaymat
 * container responsible for holding the cards.
 * might rename to tmbCardTable
 */
angular.module('demoApp')
  .directive('tmbPlaymat', function(Cards, Shuffle) {
    return {
      controller: function ($scope) {
        $scope.cardModels = Shuffle.knuth(Cards.cardModels);
      },
      template: ''+
        '<section class="tmbPlaymat">'+
          '<h2>Place your 24 memory cards here.</h2>'+
          '<ul>'+
            '<li ng-repeat="cardModel in cardModels">'+
              '<tmb-card model=cardModel></tmb-card>'+
            '</li>'+
          '</ul>'+
        '</section>'
    };
  });
