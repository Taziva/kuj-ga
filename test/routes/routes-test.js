const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server/app');
const should = chai.should();

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
  describe('POST coordinates/new', function() {
    it('should respond', function(done) {
      chai.request(server)
      .post('/coordinates/new')
      .send({
          coords: {
              longitude: 50,
              latitude: 4
          }
      })
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      })
    })
  })
})
