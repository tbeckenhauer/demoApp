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
      template: '<p>Place your 24 memory cards here.</p>'
    };
  });
