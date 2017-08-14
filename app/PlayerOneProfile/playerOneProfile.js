'use strict';

angular.module('RockPaperScissors.playerOneProfileCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PlayerOneProfile', {
    templateUrl: 'PlayerOneProfile/playerOneProfile.html',
    controller: 'playerOneProfileCtrl'
  });
}])
.controller('playerOneProfileCtrl', ['$scope','$location','getHeroes','setHero',function($scope,$location,getHeroes,setHero) {
      $scope.heroes = getHeroes().filter((hero)=>hero.type!='villain');
      $scope.villains = getHeroes().filter((hero)=>hero.type==='villain');
      $scope.choseHero = function(hero) {
          let villain = $scope.villains[Math.floor((Math.random() * $scope.villains.length))];
          setHero(hero,villain);
          $location.path('/PlayerVsComputer').replace();
      }
}]);