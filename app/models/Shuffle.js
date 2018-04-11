'use strict';

/**
 * @ngdoc function
 * @name demoApp.service:Shuffle
 * @description
 * Servics that wraps the knuthShuffle in an AngularJs Service
 */
angular.module('demoApp')
  .service('Shuffle', function () {
    this.knuth = window.knuthShuffle;
    delete window.knuthShuffle;
  });
