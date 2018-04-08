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

      enableRowSelection: true,

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
      },
      console.error,
      console.info
    );
  });
