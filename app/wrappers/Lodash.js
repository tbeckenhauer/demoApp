'use strict';

/**
 * @ngdoc function
 * @name demoApp.service:Lodash
 * @description
 * Service that wraps lodash in an AngularJs Service
 */
angular.module('demoApp')
  .provider('Lodash', function () {
      this.$get = [function () {
          return window._;
      }];
  });
