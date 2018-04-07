'use strict';

angular.module('memoryGameApp')
  .service('Alerts', function ($http) {
    return $http.get('models/alerts.json');
  });
