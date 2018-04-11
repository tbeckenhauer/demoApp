"use strict";

/**
 * @ngdoc function
 * @name demoApp.controller:AlertsCtrl
 * @description
 * Alerts Controller of the demoApp
 */
angular
  .module("demoApp")
  .controller("AlertsCtrl", function(
    $scope,
    Alerts,
    uiGridConstants,
    $timeout,
    Highcharts
  ) {
    Alerts.then(response => {
      $scope.alertCounter = response.counter;
      $scope.addMapWithCounter(response.counter);
      $scope.gridOptions.data = response.data;
      $scope.gridOptions.data.forEach(entry => {
        entry.subGridOptions = {
          data: [{
            AlertId: entry.AlertId,
            AlertTime: entry.AlertTime,
            ServerIP: entry.ServerIP
          }],
          columnDefs: [
            { name: "AlertId" },
            { name: "AlertTime" },
            { name: "ServerIP" },
          ]
        };
      });
    });

    $scope.filterrows = function(filterKey, filterValue) {
      $scope.gridOptions.columnDefs.find(
        col => col.name === filterKey
      ).filter.term = filterValue;
    };

    $scope.addMapWithCounter = function(counter) {
      new Highcharts.Map("mapcontainer", {
        title: {
          text: "Alerts By Country"
        },
        series: [
          {
            mapData: Highcharts.maps["custom/world"],
            data: Object.keys(counter.ClientCountry).map(key => {
              var hcKeyMap = {
                "United States": "us",
                Canada: "ca",
                Germany: "de",
                Australia: "au"
              };
              return {
                "hc-key": hcKeyMap[key],
                value: counter.ClientCountry[key]
              };
            }),
            joinBy: "hc-key",
            name: "Number of alerts",
            dataLabels: {
              enabled: true,
              formatter: function() {
                // Access the hc-key property of this point
                return this.point["hc-key"];
              }
            }
          }
        ]
      });
    };

    $scope.gridOptions = {
      columnDefs: [
        {
          name: "Severity",
          filter: {
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              { value: "Low", label: "Low" },
              { value: "Medium", label: "Medium" },
              { value: "High", label: "High" }
            ]
          }
        },
        { name: "ClientIP", filter: {} },
        { name: "Protocol", filter: {} },
        { name: "ClientCountry", filter: {} }
      ],

      enableFiltering: true,

      expandableRowTemplate: '<div ui-grid="row.entity.subGridOptions">m</div>',
      expandableRowHeight: 100
    };
  });
