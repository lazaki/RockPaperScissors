'use strict';

// Declare app level module which depends on views, and components
angular.module('RockPaperScissors', [
  'ngRoute',
  'ngMaterial',
  'RockPaperScissors.startGameCtrl',
  'RockPaperScissors.playerVsComputerCtrl',
  'RockPaperScissors.computerVsComputerCtrl',
  'RockPaperScissors.playerOneProfileCtrl',
  'RockPaperScissors.version'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/StartGame' });
  }])
  .factory('MainFactory', [function () {
    return {
      saveResult: function (res) {
        localStorage.setItem('results', JSON.stringify(res));
      },
      getResult: function () {
        let score = JSON.parse(localStorage.getItem('results'));
        if (score === null) {
          return score = { win: 0, drawn: 0, lose: 0, result: 0 }
        } else return score;
      },
      compareResult: function (firstChoise, secondChoise, actions) {
        if (firstChoise === secondChoise) {
          return 0;
        }
        else if (firstChoise.name === actions[0].name) {
          if (secondChoise.name === actions[1].name) {
            return 1;
          } else {
            return 2;
          }
        }
        else if (firstChoise.name === actions[1].name) {
          if (secondChoise.name === actions[2].name) {
            return 1;
          } else {
            return 2;
          }
        }
        else if (firstChoise.name === actions[2].name) {
          if (secondChoise.name === actions[0].name) {
            return 1;
          } else {
            return 2;
          }
        }
      },
      getHeroes: function () {
        return [
          {
            name: 'Red',
            image: 'components/img/red.png',
            type: 'hero'
          },
          {
            name: 'Hal',
            image: 'components/img/hal.png',
            type: 'hero'
          },
          {
            name: 'Chuck',
            image: 'components/img/chunk.png',
            type: 'hero'
          },
          {
            name: 'The Blues',
            image: 'components/img/blues.png',
            type: 'hero'
          },
          {
            name: 'Stella',
            image: 'components/img/rose.png',
            type: 'hero'
          },
          {
            name: 'King',
            image: 'components/img/king.png',
            type: 'villain'
          },
          {
            name: 'Hiten',
            image: 'components/img/hiten.png',
            type: 'villain'
          },
          {
            name: 'Loser',
            image: 'components/img/loser.png',
            type: 'villain'
          }
        ]
      },
      getActions: function () {
        return [
          {
            icon: 'components/img/paper.png',
            name: 'Paper'
          },
          {
            icon: 'components/img/rock.png',
            name: 'Rock'
          },
          {
            icon: 'components/img/scissors.png',
            name: 'Scissors'
          }
        ]
      },
      setHero: function (hero, villain) {
        localStorage.setItem('hero', JSON.stringify(hero));
        localStorage.setItem('villain', JSON.stringify(villain));
        return [hero, villain];
      },
      getHero: function () {
        return [JSON.parse(localStorage.getItem('hero')), JSON.parse(localStorage.getItem('villain'))];
      }
    }
  }]);



