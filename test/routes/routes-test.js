const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server/app');
const should = chai.should();
const nock = require('nock');


chai.use(chaiHttp);

describe('Routes', function() {
  it('GET / should respond', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        done();
      })
  })
  describe('GET coordinates/new', function() {
    it('should respond', function(done) {
      var position = {
          longitude: 50,
          latitude: 4
      }
      nock('https://maps.googleapis.com')
      .get('/maps/api/place/nearbysearch/json?location='+position.latitude+'%2C'+position.longitude+'&radius=500&type=restaurant&key='+process.env.PLACES_KEY)
      .reply(200, [{ geometry: ["geometry"],
     icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png',
     id: 'restaurant_id',
     name: 'restaurant name',
     opening_hours: 'times',
     place_id: 'place_id',
     reference: 'REFERENCE',
     scope: 'GOOGLE',
     types: ['restaunt, bar'],
     vicinity: '73 Fake Road, St Fake' }])
      chai.request(server)
      .get('/coordinates/new')
      .query(position)
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.an('array');
        res.body.should.have.property('name');
        res.body.should.have.property('id');
        res.body.should.have.property('vicinity');
        done();
      })
    })
  })
})
