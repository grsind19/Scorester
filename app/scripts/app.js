'use strict';

/**
 * @ngdoc overview
 * @name scoreStarApp
 * @description
 * # scoreStarApp
 *
 * Main module of the application.
 */
var scoreStarApp = angular.module('scoreStarApp', ['ngRoute']);

scoreStarApp.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/home',{
    templateUrl:'views/main.html',
    controller:'main',
  });
}]);
