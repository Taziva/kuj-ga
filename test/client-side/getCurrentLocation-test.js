var expect = chai.expect;
describe('getCurrentLocation', function() {
  before(function() {
    var Geoposition = { coords:{latitude:50,longitude:4}}
    navigator.geolocation = sinon.stub(navigator.geolocation, "getCurrentPosition").callsArgWith(0, Geoposition);
  });

  it("should be a function", function(){
    expect(getCurrentLocation).to.be.a('function');
  });
  it("should return a Promise", function(){
    expect(getCurrentLocation().then).to.be.a('function');
    expect(getCurrentLocation().catch).to.be.a('function');
  })
  it("should also return a geolocation object", function(){
    getCurrentLocation().then((response)=>{
      expect(response).to.be.an('object');
      expect(response).to.have.property('coords');
    })
  })
})
