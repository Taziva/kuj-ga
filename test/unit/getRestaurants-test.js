'use strict';
const getPlaces = require('../../src/static/js/getPlaces').getPlaces;
const nock = require('nock');
const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('request-promise');
const Bluebird = require('bluebird');

describe('getPlaces', function() {
var position;
beforeEach(function(){
  position = {
          longitude: 50,
          latitude: 4
      }
  })

  it("should be a function", function(){
    expect(getPlaces).to.be.a('function');
  });

  describe('API call', function() {
    var requestGet;
    var url;
    var option;


    beforeEach(function() {
     url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&key='+process.env.PLACES_KEY
        requestGet = sinon.stub(request, 'get')
        .returns(Bluebird.resolve([{ geometry: [Object],
       icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
       id: 'a4c4bcbbf6c21c3269828b0471d9ffd2acead598',
       name: 'al noor cash & carry',
       opening_hours: [Object],
       place_id: 'ChIJi0ReWts-dkgRWDDgRr8Ik6U',
       reference: 'CmRSAAAA3Mn6hq4Dmm66nAQO5pEgQCwyURBGztmUsQ94oOvpd-69gmwh2CggXVvaiO1vlpq7nuxXED8rfK1Bg8gRyuv-tv7RSSgq6OjYxEYcMz1AC2ldwE732bCiBlE5wjDSJRE2EhBO-tYDwNEfc8ovqCwoeCVhGhTSc2koX64ZhGgGs8uPk89QLVAgyw',
       scope: 'GOOGLE',
       types: [Object],
       vicinity: '73 Hatfield Road, St Albans' }])
     );
     option = {
         uri: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
         qs: {
             location: '50,4',
             radius: 500,
             type: "restaurant",
             key: process.env.PLACES_KEY // -> uri + '?access_token=xxxxx%20xxxxx'
         },
         headers: {
             'User-Agent': 'Request-Promise'
         },
         json: true // Automatically parses the JSON string in the response
     };
   });
   it("should return a Promise", function(){
     expect(getPlaces(option).then).to.be.a('function');
     expect(getPlaces(option).catch).to.be.a('function');
   })
      it("should make an external call", function(){
        return getPlaces(option).then((response)=>{
          expect(requestGet.calledOnce).to.be.true;
        });
      })
      it("should return an object", function(){
        return getPlaces(option).then((response)=>{
          expect(response).to.be.an('array')
        });
      })
      afterEach(function() {
        requestGet.restore();
      })
  })
})
