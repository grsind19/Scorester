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
    $scope.hello =function(){
    	$("#section_hello").css("visibility","visible");
    	$("#hello").slideDown("slow");
      	$scope.scrollTo("#section_hello");
    };

    $scope.hide =function(){
    	$("#section_hello").css("visibility","hidden");
    	$("body").slideDown("slow");
      	$scope.scrollTo("body");
    };

     $scope.commands = {
      'start':        $scope.hello,
      'stop': 		  $scope.hide
    };

    $scope.scrollTo = function(identifier, speed) {
    $('html, body').animate({
        scrollTop: $(identifier).offset().top
    }, speed || 1000);
  };
  // OPTIONAL: activate debug mode for detailed logging in the console
    annyang.debug();

    // Add voice commands to respond to
    annyang.addCommands($scope.commands);

    // OPTIONAL: Set a language for speech recognition (defaults to English)
    annyang.setLanguage('en');

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  });
