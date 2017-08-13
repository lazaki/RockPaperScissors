'use strict';

angular.module('RockPaperScissors.playGameCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/playGame', {
    templateUrl: 'playGame/playGame.html',
    controller: 'playGameCtrl'
  });
}])

.controller('playGameCtrl',['$scope','$interval',function($scope,$interval) {

  $scope.actions = [
    {
      icon: '/components/img/paper.png',
      name: 'Paper'
    },
    {
      icon: '/components/img/rock.png',
      name: 'Rock'
    },
        {
      icon: '/components/img/scissors.png',
      name: 'Scissors'
    }
  ]

  $interval(function(){
    $scope.a = Math.floor((Math.random()*$scope.actions.length));
  },70)

  $scope.setAction = function(playerAction, computerAction){
     switch(playerAction) {
        case computerAction:
            $scope.result = 'Drawn'
            break;
        case $scope.actions[0]:
          if(computerAction === $scope.actions[1]){
              $scope.result = 'You win!'
              break;
          }
        case $scope.actions[1]:
          if(computerAction===$scope.actions[2]){
              $scope.result = 'You win!'
              break;
          }
        case $scope.actions[2]:
          if (computerAction === $scope.actions[1]) {
            $scope.result = 'You win!'
            break;
          }
        default:
          $scope.result = 'You lose!'
    }   
  }
}]);