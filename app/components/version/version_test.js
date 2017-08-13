'use strict';

describe('RockPaperScissors.version module', function() {
  beforeEach(module('RockPaperScissors.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
