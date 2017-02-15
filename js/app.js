'use strict';

var MyApp = angular.module("MyApp", ['ngRoute']);

MyApp.config(function($routeProvider) {
  $routeProvider
    .when('/equipos', {
      templateUrl: 'partials/equipos.html',
      controller: 'EquiposCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});