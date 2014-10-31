'use strict';

// Declare app level module which depends on filters, and services

angular.module('app', [
    'ui.router',
    'home',
    'rule',
    'asset',
    'system'
]).
config(function ($routeProvider, $locationProvider,$stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        controller: 'homeCtrl'
    })
    .state('rule', {
        url: "/rule",
        templateUrl: "views/rule.html",
        controller: 'ruleCtrl'
    })
    .state('asset', {
        url: "/asset",
        templateUrl: "views/asset.html",
        controller: 'assetCtrl'
    })
    .state('system', {
        url: "/system",
        templateUrl: "views/system.html",
        controller: 'systemCtrl'
    })
});
