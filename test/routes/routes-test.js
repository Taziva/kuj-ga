const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../server/app');

chai.use(chaiHttp);

describe('Routes', function() {
  it('should respond', function() {
    chai.request(server)
      .get('/')
      .end(function() {
        res.should.have.status(200);
      })
  })
})
