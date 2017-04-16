'use strict';
const getCurrentLocation = require('../../src/static/js/getCurrentLocation');
const expect = require('chai').expect;
const sinon = require('sinon');


describe('getCurrentLocation', () => {
  var navigator
    beforeEach(()=>{
      navigator={
        geolocation:{
          getCurrentPosition: function() {

          }
        }
      };
    })
    it("should be a function", () => {
        expect(getCurrentLocation).to.be.a('function');
    });

    it("should return a Promise", () => {
        expect(getCurrentLocation(navigator).then).to.be.a('function');
        expect(getCurrentLocation(navigator).catch).to.be.a('function');
    });

    it("should also return a geolocation object", () => {
        sinon.stub(navigator.geolocation,"getCurrentPosition").callsFake(function() {
          var position = { coords: { latitude: 32, longitude: -96 } };
          arguments[0](position);
        });
        getCurrentLocation(navigator).then((response) => {
            expect(response).to.be.an('object');
            expect(response).to.have.property('coords');
        })
    })
})
