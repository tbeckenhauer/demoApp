'use strict';

angular.module('memoryGameApp')
  .service('Shuffle', function () {
    this.knuth = window.knuthShuffle;
    delete window.knuthShuffle;
  });
