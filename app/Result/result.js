'use strict';

angular.module('RockPaperScissors.resultCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Result', {
    templateUrl: 'Result/result.html',
    controller: 'resultCtrl'
  });
}])

.controller('resultCtrl', ['$scope','$location','MainFactory',function($scope,$location,MainFactory) {
  //get score from local storage
  $scope.score = MainFactory.getScore();
  //get players who plays the game
  $scope.players = MainFactory.getHero();
  //initialise winner name to empty string
  $scope.winner = {
    name: ''
  }

  // check winner declaration
  var checkWinner = function() {
    if($scope.score.win===$scope.score.lose){
      $scope.message = 'Game Drawn';
    }else if($scope.score.win>$scope.score.lose){
      $scope.winner = $scope.players[0];
      $scope.message = $scope.winner.name+' win the game!';
    }else {
      $scope.winner = $scope.players[1];
      $scope.message = $scope.winner.name+' win the game!';
    }
  }
  //call check winner function
  checkWinner();

  //add bouncing effect to winner
  $scope.winnerClass = function(player) {
    if($scope.winner.name === player.name) {return "bounce animated"}
    return "";
  }

  //end game result result and change location
  $scope.endGame = function() {
     //reset result
      $scope.score.win = 0;
      $scope.score.lose = 0;
      $scope.score.drawn = 0;
     //save result to local storage
     MainFactory.saveScore($scope.score);
     $location.path('/startGame').replace(); 
    }

}]);