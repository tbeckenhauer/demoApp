'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:AlertsCtrl
 * @description
 * Alerts Controller of the memoryGameApp
 */
angular.module('memoryGameApp')
  .controller('AlertsCtrl', function ($scope, Alerts, uiGridConstants, $timeout, Highcharts) {
    $scope.filterrows = function (filterKey, filterValue) {
        $scope.gridOptions.columnDefs
          .find(col => col.name === filterKey).filter.term = filterValue;
    };
    $scope.gridOptions = {
      enableFiltering: true,

      expandableRowTemplate: '<div id="mapcontainer"/>',
      expandableRowHeight: 200,
      onRegisterApi: function (gridApi) {
          gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
              if (row.isExpanded) {
                  $timeout(function () {
                    new Highcharts.Map('mapcontainer', {
                      title : {
                          text : 'Alerts By Country'
                      },
                      series : [{
                        mapData: Highcharts.maps['custom/world'],
                        data: Object.keys($scope.alertCounter.ClientCountry).map(key => {
                          var hcKeyMap= {
                            'United States': 'us',
                            'Canada': 'ca',
                            'Germany': 'de',
                            'Australia': 'au'
                          };
                          return {
                            'hc-key': hcKeyMap[key],
                            'value': $scope.alertCounter.ClientCountry[key],
                          };
                        }),
                        joinBy: 'hc-key',
                        name: 'Number of alerts',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                // Access the hc-key property of this point
                                return this.point['hc-key'];
                            }
                        }
                    }]
                    });
                  });
              }
          });
      },

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
