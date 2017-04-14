var expect = chai.expect;

describe('sendCoordinates', function() {
    var post;
    var position
    beforeEach(function() {
        post = sinon.stub($, 'post').callsFake(function(options) {});
        position = {
            coords: {
                longitude: 50,
                latitude: 4
            }
        }
    })

    it('should be a function', function() {
        expect(sendCoordinates).to.be.a('function');
    });
    it('should make an AJAX call', function() {
        sendCoordinates(position);
        expect(post.calledOnce).to.be.true;
    });
    it('should send the correct parameters', function() {
        var expectedUrl = '/coordinates/new';
        var expectedParams = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        };
        sendCoordinates(position);
        sinon.assert.calledWith(post, expectedUrl, expectedParams);

    })
    it('should be called with 1 argument', function() {
        expect(function(){sendCoordinates()}).to.throw(Error);
    });
    afterEach(function() {
        post.restore();
    })
});
