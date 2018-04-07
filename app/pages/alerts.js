'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
  .controller('AlertsCtrl', function ($scope, Alerts) {
    Alerts.then(
      response => $scope.data = response.data,
      console.error,
      console.info
    );
  });
