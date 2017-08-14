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
  .factory('saveResult', [function () {
    return function (res) {
      localStorage.setItem('results', JSON.stringify(res));
    }
  }])
  .factory('getResult', [function () {
    return function () {
      let score = JSON.parse(localStorage.getItem('results'));
      if (score === null) {
        return score = { win: 0, drawn: 0, lose: 0, result: 0 }
      } else return score;
    }
  }])
  .factory('compareResult', [function () {

    return function (firstChoise, secondChoise, actions) {
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
    }
  }])
  .factory('getHeroes', [function () {
    return function () {
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
    }
  }])
  .factory('getActions', [function () {
    return function () {
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
    }
  }])
  .factory('setHero', [function () {
    return function (hero, villain) {
      localStorage.setItem('hero', JSON.stringify(hero));
      localStorage.setItem('villain', JSON.stringify(villain));
      return [hero,villain];
    }
  }])
  .factory('getHero', [function () {
    return function () {
      return [JSON.parse(localStorage.getItem('hero')),JSON.parse(localStorage.getItem('villain'))];
    }
  }]);


