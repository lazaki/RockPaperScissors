'use strict';

// Declare app level module which depends on views, and components
angular.module('RockPaperScissors', [
  'ngRoute',
  'ngMaterial',
  'RockPaperScissors.startGame',
  'RockPaperScissors.view2',
  'RockPaperScissors.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/startGame'});
}]);
