'use strict';

/**
 * @ngdoc function
 * @name scoreStarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scoreStarApp
 */
angular.module('scoreStarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
