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
}]).factory('saveResult', [function() {
    var result = [];
     return function(res) {
       localStorage.setItem('results',  JSON.stringify(res));
     }
 }]).factory('getResult', [function() {
     return function() {
       let score = JSON.parse(localStorage.getItem('results'));
       if(score===null) {
         return score = {win:0, drawn:0, lose:0, result:0}
       }else return score;
     }
 }]);
