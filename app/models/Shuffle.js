'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.service:Shuffle
 * @description
 * Servics that wraps the knuthShuffle in an AngularJs Service
 */
angular.module('memoryGameApp')
  .service('Shuffle', function () {
    this.knuth = window.knuthShuffle;
    delete window.knuthShuffle;
  });
