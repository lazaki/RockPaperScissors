'use strict';

angular.module('RockPaperScissors.version', [
  'RockPaperScissors.version.interpolate-filter',
  'RockPaperScissors.version.version-directive'
])

.value('version', '0.1');
