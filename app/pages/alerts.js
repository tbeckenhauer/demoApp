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
    $scope.gridOptions = {
      enableFiltering: true,

      expandableRowTemplate: 'pages/alertsDetail.html',
      expandableRowHeight: 200,

      columnDefs : [
        { name: 'AlertId',      },
        { name: 'AlertTime'     },
        { name: 'Severity'      },
        { name: 'ClientIP'      },
        { name: 'Protocol'      },
        { name: 'ClientCountry' }
      ]
    };
    Alerts.then(
      response => {
        $scope.gridOptions.data = response.data;
        $scope.alertCounter = response.data.reduce((acc, curr) => {
        Object.keys(curr)
            .filter(key => ! ['AlertId', 'AlertTime', 'ServerIP'].includes(key) )
            .forEach((key) => {
              acc[key] = acc[key] || {};
              acc[key][curr[key]] = acc[key][curr[key]] || 0;
              acc[key][curr[key]]++;
          });
          return acc;
        }, {Severity: {}});
      },
      console.error,
      console.info
    );
  });
