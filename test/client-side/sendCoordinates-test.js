'use strict';
const sendCoordinates = require('../../src/static/js/sendCoordinates');
const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('request-promise');
const Bluebird = require('bluebird');

describe('sendCoordinates', function() {
    var url;
    var position;
    var xhr;
    var requests


  beforeEach(function () {
    position = {
      coords:{
        longitude: 50,
        latitude:4
      }
    }
    url = '/restaurants/new';
    XMLHttpRequest = sinon.useFakeXMLHttpRequest();
    requests = [];
    XMLHttpRequest.onCreate = function (req) { requests.push(req); };
  });

  afterEach(function () {
    XMLHttpRequest.restore();
  });

    it('should be a function', function() {
        expect(sendCoordinates).to.be.a('function');
    });

    it('should make an XMLHttpRequest', function (done) {
      sendCoordinates(url, position)
      expect(requests.length).to.equal(1)
      done()
    });
    describe('when responding', ()=>{
      var xmlhttp;

      beforeEach(()=>{
        xmlhttp = new XMLHttpRequest()
        sendCoordinates(url, position, xmlhttp);
        requests[0].respond(200, { "Content-Type": "application/json" }, '[{ "id": 1, "name": "KFC" }]' );
      })

      it('should respond with an object', ()=>{
        expect(xmlhttp.response).to.equal('[{ "id": 1, "name": "KFC" }]')
      })
    })
});
