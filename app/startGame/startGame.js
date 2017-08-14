'use strict';

angular.module('RockPaperScissors.startGameCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/StartGame', {
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

.controller('startGameCtrl', ['$scope','$location','Game','setHero','getHeroes',function($scope,$location,Game,setHero,getHeroes) {
  $scope.chooseGameType = function(game) {
    let location = '';
    switch (game){
      case 1:
        location = 'PlayerOneProfile';
      break;
      case 2: 
        location = 'ComputerVsComputer';
        let heroes = getHeroes();
        //set hero and villain
        setHero(heroes[Math.floor((Math.random()*heroes.length))],heroes[Math.floor((Math.random()*heroes.length))]);
        break;
    }
    $location.path('/'+location).replace();
    return Game.Types[game];
  }
}]);