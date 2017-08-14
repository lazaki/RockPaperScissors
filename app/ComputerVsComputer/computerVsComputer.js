'use strict';

angular.module('RockPaperScissors.computerVsComputerCtrl', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/ComputerVsComputer', {
      templateUrl: 'ComputerVsComputer/computerVsComputer.html',
      controller: 'computerVsComputerCtrl'
    });
  }])
  .controller('computerVsComputerCtrl', ['$scope','$interval','$location','MainFactory', function ($scope, $interval,$location,MainFactory) {
    //initialise choises to empty array
    $scope.choises = [];
    //message set to empty string
    $scope.message = '';

    //get heroes
    $scope.computer1 = MainFactory.getHero()[0];
    $scope.computer2 = MainFactory.getHero()[1];

    //get potential actions
    $scope.actions = MainFactory.getActions();
    //get result from local storage
    $scope.score = MainFactory.getResult();

    //close game and reinitialize
    $scope.closeGame = function() {
      $scope.score.win = 0;
      $scope.score.lose = 0;
      $scope.score.drawn = 0;
      MainFactory.saveResult($scope.score);
      $location.path('/StartGame').replace();
  }

  //get random values 
  $interval(function(){
    $scope.randomChoice1 = Math.floor((Math.random()*$scope.actions.length));
    $scope.randomChoice2 = Math.floor((Math.random()*$scope.actions.length));
  },70);

  //play again restart the game
  $scope.playAgain = function() {
    $scope.choises = [];
    $scope.message = '';
  }

  //chose and copmpare choises
  $scope.choose = function(computer1Choice,computer2Choice){
    $scope.choises.push(computer1Choice);
    $scope.choises.push(computer2Choice);
    switch(MainFactory.compareResult(computer1Choice,computer2Choice,$scope.actions)) {
      case 0:
        $scope.message = 'Drawn';
        $scope.score.drawn++;
        break;
      case 1:
        $scope.message = $scope.computer1.name+ ' win!';
        $scope.score.win++;
        break;
      case 2:
        $scope.message = $scope.computer2.name+ ' win!';
        $scope.score.lose++;
        break;
    }
     MainFactory.saveResult($scope.score);
  }

  }]);