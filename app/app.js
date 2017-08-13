'use strict';

// Declare app level module which depends on views, and components
angular.module('RockPaperScissors', [
  'ngRoute',
  'ngMaterial',
  'RockPaperScissors.startGameCtrl',
  'RockPaperScissors.playGameCtrl',
  'RockPaperScissors.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/startGame'});
}]);
