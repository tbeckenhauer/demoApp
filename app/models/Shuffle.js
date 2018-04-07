'use strict';

angular.module('memoryGameApp')
  .service('Shuffle', function () {
    return window.knuthShuffle;
  });
