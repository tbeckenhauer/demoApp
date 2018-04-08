'use strict';

angular.module('memoryGameApp')
  .service('Highcharts', function () {
    var Highcharts = window.Highcharts;
    // the map plugin currently depends on this staying on the window object.
    // delete window.Highcharts;
    return Highcharts;
  });
