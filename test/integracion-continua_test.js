'use strict';

var integracionContinua = require('../');
var assert = require('should');

describe('integracionContinua', function () {

  it('should be awesome v1', function () {
    integracionContinua().should.equal('awesome');
  });

});
