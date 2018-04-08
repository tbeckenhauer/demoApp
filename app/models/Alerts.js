'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.service:Alerts
 * @description
 * Servics that fetchs the alerts
 */
angular.module('memoryGameApp')
  .service('Alerts', function ($http) {
    return $http.get('models/alerts.json');
  });
