'use strict';

/**
 * @ngdoc function
 * @name scoreStarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scoreStarApp
 */
scoreStarApp.controller('MainCtrl', function ($scope) {
    $scope.isDisabled=true;
    $scope.playerOneScore="";
    $scope.playerTwoScore="";

    $scope.AddOne =function(){
      $scope.$apply($scope.playerOneScore += 1);
    };

    $scope.AddTwo =function(){
        $scope.$apply($scope.playerOneScore += 2);
    };

     $scope.commands = {
      'one':        $scope.AddOne,
      'two': 		  $scope.AddTwo
    };

    $scope.startVoiceCapture=function(){
      if(annyang){
        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start();

        // OPTIONAL: Set a language for speech recognition (defaults to English)
        annyang.setLanguage('en');

        // Add voice commands to respond to
        annyang.addCommands($scope.commands);

        // OPTIONAL: activate debug mode for detailed logging in the console
        annyang.debug();

        $scope.isDisabled=false;
        $scope.playerOneScore=0;
        $scope.playerTwoScore=0;
      }
    };

    $scope.stopVoiceCapture=function(){
      if(annyang){
        annyang.abort();
        $scope.isDisabled=true;
      }
    };

  });
