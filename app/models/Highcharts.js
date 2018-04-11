'use strict';

/**
 * @ngdoc function
 * @name demoApp.service:Highcharts
 * @description
 * Servics that wraps Highcharts in an AngularJs Service
 */
angular.module('demoApp')
  .service('Highcharts', function () {
    var Highcharts = window.Highcharts;
    // the map plugin currently depends on this staying on the window object.
    // delete window.Highcharts;
    return Highcharts;
  });
