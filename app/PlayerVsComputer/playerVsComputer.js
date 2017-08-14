'use strict';

angular.module('RockPaperScissors.playerVsComputerCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PlayerVsComputer', {
    templateUrl: 'PlayerVsComputer/playerVsComputer.html',
    controller: 'playerVsComputerCtrl'
  });
}])

.controller('playerVsComputerCtrl',['$scope','$interval','$location','saveResult','getResult','getActions','compareResult','getHero','getAntiHero',function($scope,$interval,$location,saveResult,getResult,getActions,compareResult,getHero,getAntiHero) {
  
  $scope.choises = [];
  $scope.message = '';
  $scope.score = getResult();
  $scope.player = getHero();
  $scope.computer = getAntiHero();
  $scope.actions = getActions();

  $scope.playAgain = function() {
    $scope.choises = [];
    $scope.message = '';
  }

  $scope.closeGame = function() {
    $scope.score.win = 0;
    $scope.score.lose = 0;
    $scope.score.drawn = 0;
    saveResult($scope.score);
    $location.path('/StartGame').replace();
  }
  
  $interval(function(){
    $scope.randomChoice = Math.floor((Math.random()*$scope.actions.length));
  },70)

  $scope.choose = function(playerChoise,computerChoise){
    $scope.choises.push(playerChoise);
    $scope.choises.push(computerChoise);
    switch(compareResult(playerChoise,computerChoise,$scope.actions)) {
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
    saveResult($scope.score);
  }
}]);