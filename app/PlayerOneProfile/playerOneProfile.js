'use strict';

angular.module('RockPaperScissors.playerOneProfileCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PlayerOneProfile', {
    templateUrl: 'PlayerOneProfile/playerOneProfile.html',
    controller: 'playerOneProfileCtrl'
  });
}])
.controller('playerOneProfileCtrl', ['$scope','$location','MainFactory',function($scope,$location,MainFactory) {
      $scope.heroes = MainFactory.getHeroes().filter((hero)=>hero.type!='villain');
      $scope.villains = MainFactory.getHeroes().filter((hero)=>hero.type==='villain');
      $scope.choseHero = function(hero) {
          let villain = $scope.villains[Math.floor((Math.random() * $scope.villains.length))];
          MainFactory.setHero(hero,villain);
          $location.path('/PlayerVsComputer').replace();
      }
}]);