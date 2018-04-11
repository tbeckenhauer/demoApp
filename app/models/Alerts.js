"use strict";

/**
 * @ngdoc function
 * @name demoApp.service:Alerts
 * @description
 * Servics that fetchs the alerts
 */
angular.module("demoApp").service("Alerts", function($http) {
  return $http.get("models/alerts.json").then(
    response => {
      return {
        data: response.data,
        counter: response.data.reduce((acc, curr) => {
          Object.keys(curr)
            .filter(key => !["AlertId", "AlertTime", "ServerIP"].includes(key))
            .forEach(key => {
              acc[key] = acc[key] || {};
              acc[key][curr[key]] = acc[key][curr[key]] || 0;
              acc[key][curr[key]]++;
            });
          return acc;
        }, {})
      };
    },
    console.error,
    console.info
  );
});
