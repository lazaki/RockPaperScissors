'use strict';

angular.module('RockPaperScissors.startGame', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startGame', {
    templateUrl: 'startGame/startGame.html',
    controller: 'startGame'
  });
}])

.controller('startGame', [function() {

}]);