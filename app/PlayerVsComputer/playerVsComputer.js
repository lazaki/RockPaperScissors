'use strict';

angular.module('RockPaperScissors.playerVsComputerCtrl', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PlayerVsComputer', {
    templateUrl: 'PlayerVsComputer/playerVsComputer.html',
    controller: 'playerVsComputerCtrl'
  });
}])
.controller('playerVsComputerCtrl',['$scope','$interval','$location','MainFactory',function($scope,$interval,$location,MainFactory) {
  
  // player and computer choicesc init
  $scope.choises = [];
  // win, lose, drawn message
  $scope.message = '';
  //get result from localstorage
  $scope.score = MainFactory.getResult();
  //get player hero
  $scope.player = MainFactory.getHero()[0];
  //get computer hero
  $scope.computer = MainFactory.getHero()[1];
  //get potential action types
  $scope.actions = MainFactory.getActions();

  //reinitial game
  $scope.playAgain = function() {
    $scope.choises = [];
    $scope.message = '';
  }

  //close game and reset result
  $scope.closeGame = function() {
    //reset result
    $scope.score.win = 0;
    $scope.score.lose = 0;
    $scope.score.drawn = 0;
    //save result to local storage
    MainFactory.saveResult($scope.score);
    //go to app start
    $location.path('/StartGame').replace();
  }

  //changin radnom choices on GUI
  $interval(function(){
    $scope.randomChoice = Math.floor((Math.random()*$scope.actions.length));
  },70)

  //chose player and computer action
  $scope.choose = function(playerChoise,computerChoise){
    //push choices to array
    $scope.choises.push(playerChoise);
    $scope.choises.push(computerChoise);
    //compare result and provide action for different situation
    switch(MainFactory.compareResult(playerChoise,computerChoise,$scope.actions)) {
      case 0:
        $scope.message = 'Drawn';
        $scope.score.drawn++;
        break;
      case 1:
        $scope.message = 'You win';
        $scope.score.win++;
        break;
      case 2:
        $scope.message = 'You lose';
        $scope.score.lose++;
        break;
    }
    //saving result to local storage
    MainFactory.saveResult($scope.score);
  }
}]);