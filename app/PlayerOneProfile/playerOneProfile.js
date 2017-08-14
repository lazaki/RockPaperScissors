'use strict';

angular.module('RockPaperScissors.playerOneProfileCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PlayerOneProfile', {
    templateUrl: 'PlayerOneProfile/playerOneProfile.html',
    controller: 'playerOneProfileCtrl'
  });
}])
.controller('playerOneProfileCtrl', ['$scope','$location','getHeroes','setHero',function($scope,$location,getHeroes,setHero) {
     $scope.heroes = getHeroes();
      $scope.choseHero = function(hero) {
          setHero(hero);
          $location.path('/PlayerVsComputer').replace();
      }
}]);