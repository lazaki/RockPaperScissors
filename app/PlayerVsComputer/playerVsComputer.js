'use strict';

angular.module('RockPaperScissors.playerVsComputerCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PlayerVsComputer', {
    templateUrl: 'PlayerVsComputer/playerVsComputer.html',
    controller: 'playerVsComputerCtrl'
  });
}])

.controller('playerVsComputerCtrl',['$scope','$interval','saveResult','getResult',function($scope,$interval,saveResult,getResult) {
  
  $scope.choises = [];
  $scope.message = '';
  $scope.score = getResult();
  
  $scope.playAgain = function() {
    $scope.choises = [];
    $scope.message = '';
  }

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
    $scope.randomChoice = Math.floor((Math.random()*$scope.actions.length));
  },70)

  $scope.compare = function(playerChoise, computerChoise){

    $scope.choises.push(playerChoise);
    $scope.choises.push(computerChoise);

    
    if(playerChoise===computerChoise){
            $scope.message = 'Drawn';
            $scope.score.drawn++;
    }
    else if(playerChoise === $scope.actions[0]) {
        if(computerChoise === $scope.actions[1]) {
          $scope.message = 'You win';
          $scope.score.win++;
          $scope.score.result+=20;
        }else {
          $scope.message = 'You lose';
          $scope.score.lose++;
           $scope.score.result-=10;
        }
    }
    else if(playerChoise === $scope.actions[1]) {
        if(computerChoise === $scope.actions[2]) {
          $scope.message = 'You win';
          $scope.score.win++;
           $scope.score.result+=20;
        }else {
          $scope.message = 'You lose';
          $scope.score.lose++;
          $scope.score.result-=10;
        }
    }
    else if(playerChoise === $scope.actions[2]) {
        if(computerChoise === $scope.actions[0]) {
          $scope.message = 'You win';
          $scope.score.win++;
           $scope.score.result+=20;
        }else {
          $scope.message = 'You lose';
          $scope.score.lose++;
          $scope.score.result-=10;
        }

    }
      
    saveResult($scope.score);
  }
}]);