'use strict';

/**
 * @ngdoc overview
 * @name memoryGameApp
 * @description
 * # memoryGameApp
 *
 * Main module of the application.
 */
angular
  .module('memoryGameApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'pages/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/game', {
        templateUrl: 'pages/game.html',
        controller: 'GameCtrl',
        controllerAs: 'game'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
