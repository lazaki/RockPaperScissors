'use strict';

// Declare app level module which depends on views, and components
angular.module('RockPaperScissors', [
  'ngRoute',
  'RockPaperScissors.view1',
  'RockPaperScissors.view2',
  'RockPaperScissors.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
