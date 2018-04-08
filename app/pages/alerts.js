'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
  .controller('AlertsCtrl', function ($scope, Alerts, uiGridConstants) {
    $scope.doThisThing = function (filterKey, filterValue) {
      // console.log(
        $scope.gridOptions.columnDefs
          .find(col => col.name === filterKey).filter.term = filterValue
      // );
    }
    $scope.gridOptions = {
      enableFiltering: true,

      expandableRowTemplate: 'pages/alertsDetail.html',
      expandableRowHeight: 200,

      columnDefs : [
        { name: 'AlertTime'    , filter: {} },
        { name: 'Severity'     , filter: {
            type: uiGridConstants.filter.SELECT,
            selectOptions: [  { value: 'Low',    label: 'Low'    },
                              { value: 'Medium', label: 'Medium' },
                              { value: 'High',   label: 'High'   }]}
        },
        { name: 'ClientIP'     , filter: {} },
        { name: 'Protocol'     , filter: {} },
        { name: 'ClientCountry', filter: {} }
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
