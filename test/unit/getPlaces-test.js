"use strict";
const getPlaces = require('../../src/static/js/getplaces').getPlaces;
const nock = require('nock');
const expect = require('chai').expect;

describe('getPlaces', function() {
  it("should be a function", function(){
    expect(getPlaces).to.be.a('function');
  });
  it("should return a Promise", function(){
    expect(getPlaces().then).to.be.a('function');
    expect(getPlaces().catch).to.be.a('function');
  })
})
