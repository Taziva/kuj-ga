const expect = require('chai').expect;
const optionsConstructer = require('../../src/static/js/optionsConstructer');

describe('optionsConstructer', ()=>{
  it('returns an object', ()=>{
    expect(optionsConstructer()).to.be.a('object');
  })
  describe('the returned object',()=>{
    var result, uri, qs;
    beforeEach(()=>{
      uri = "https://fake.googleapi.com/fake";
      qs = {
        location: 'fakelocation',
        key: '1'
      }

      result = optionsConstructer(uri, qs)
    })
    it('should have a uri property', ()=>{
      expect(result).to.have.property('uri');
      expect(result.uri).to.equal(uri);
    });
    it('should have a query string property', ()=>{
      expect(result).to.have.property('qs');
      expect(result.qs).to.be.a('object')
      expect(result.qs.location).to.equal('fakelocation')
      expect(result.qs.key).to.equal("1")
    });

    it('should have a headers property', ()=>{
      expect(result).to.have.property('headers');
    });
    it('should have a json property', ()=>{
      expect(result).to.have.property('json');
    });
  })
})
