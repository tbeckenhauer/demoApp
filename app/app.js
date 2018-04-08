'use strict';

/**
 * @ngdoc overview
 * @name memoryGameApp
 * @description
 * Main module of the application.
 */
angular
  .module('memoryGameApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'ui.grid.expandable',
    'ui.grid.selection',
    'ui.grid.pinning'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/alerts', {
        templateUrl: 'pages/alerts.html',
        controller: 'AlertsCtrl',
        controllerAs: 'alerts'
      })
      .when('/game', {
        templateUrl: 'pages/game.html',
        controller: 'GameCtrl',
        controllerAs: 'game'
      })
      .when('/',{
        redirectTo: '/game'
      });
  });
