'use strict';

angular.module('RockPaperScissors.startGameCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startGame', {
    templateUrl: 'startGame/startGame.html',
    controller: 'startGameCtrl'
  });
}])

.constant('Game', {
    Types: {
        1: 'Computer to Computer',
        2: 'Player to Computer',
    }
})

.controller('startGameCtrl', ['$scope','$location','Game',function($scope,$location,Game) {
    
  $scope.chooseGameType = function(game) {
    let location = '';
    switch (game){
      case 1:
        location = 'PlayerVsComputer';
      break;
      case 2: 
        location = 'ComputerVsComputer';
        break;
    }
    $location.path('/'+location).replace();
    return Game.Types[game];
  } 

}]);