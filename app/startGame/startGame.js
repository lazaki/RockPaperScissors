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

.controller('startGameCtrl', ['$scope','$location','Game','MainFactory',function($scope,$location,Game,MainFactory) {
  $scope.chooseGameType = function(game) {
    let location = '';
    switch (game){
      case 1:
        location = 'PlayerOneProfile';
      break;
      case 2: 
        location = 'ComputerVsComputer';
        //set Random hero and villain
        let allHeroes = MainFactory.getHeroes();
        let heroes = allHeroes.filter((hero)=>{return hero.type==='hero'});
        let villains = allHeroes.filter((villain)=>{return villain.type==='villain'});
        //set hero and villain
        MainFactory.setHero(heroes[Math.floor((Math.random()*heroes.length))],villains[Math.floor((Math.random()*villains.length))]);
        break;
    }
    $location.path('/'+location).replace();
    return Game.Types[game];
  }
}]);