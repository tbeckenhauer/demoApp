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
    console.log('hello');
    return {
      replace: true,
      template: '<p>Place your 24 memory cards here.</p>'
    };
  });
