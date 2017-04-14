"use strict";
const getCurrentLocation = require('../../src/static/js/getCurrentLocation').getCurrentLocation;
const nock = require('nock');
const expect = require('chai').expect;

describe('getCurrentLocation', function() {
  it("should be a function", function(){
    expect(getCurrentLocation).to.be.a('function');
  });
  it("should return a Promise", function(){
    console.log(getCurrentLocation());
    expect(getCurrentLocation().then).to.be.a('function');
    expect(getCurrentLocation().catch).to.be.a('function');
  })
})
