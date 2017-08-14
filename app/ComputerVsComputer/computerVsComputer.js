'use strict';

angular.module('RockPaperScissors.computerVsComputerCtrl', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/ComputerVsComputer', {
      templateUrl: 'ComputerVsComputer/computerVsComputer.html',
      controller: 'computerVsComputerCtrl'
    });
  }])

  .controller('computerVsComputerCtrl', ['$scope', '$interval','$location', 'saveResult', 'getResult','compareResult','getActions','getHero','getAntiHero', function ($scope, $interval,$location, saveResult, getResult,compareResult, getActions, getHero, getAntiHero) {
    
    $scope.choises = [];
    $scope.message = '';
    $scope.computer1 = getHero();
    $scope.computer2 = getAntiHero();
    $scope.actions = getActions();
    $scope.score = getResult();

    $scope.closeGame = function() {
      $scope.score.win = 0;
      $scope.score.lose = 0;
      $scope.score.drawn = 0;
      saveResult($scope.score);
      $location.path('/StartGame').replace();
  }

  $interval(function(){
    $scope.randomChoice1 = Math.floor((Math.random()*$scope.actions.length));
    $scope.randomChoice2 = Math.floor((Math.random()*$scope.actions.length));
  },70);

  $scope.playAgain = function() {
    $scope.choises = [];
    $scope.message = '';
  }

  $scope.choose = function(computer1Choice,computer2Choice){
    $scope.choises.push(computer1Choice);
    $scope.choises.push(computer2Choice);
    switch(compareResult(computer1Choice,computer2Choice,$scope.actions)) {
      case 0:
        $scope.message = 'Drawn';
        $scope.score.drawn++;
        break;
      case 1:
        $scope.message = $scope.computer1.name+ ' win!';
        $scope.score.win++;
        $scope.score.result+=20;
        break;
      case 2:
        $scope.message = $scope.computer2.name+ ' win!';
        $scope.score.lose++;
        $scope.score.result-=10;
        break;
    }
  }

  }]);