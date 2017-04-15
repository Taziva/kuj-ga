'use strict';

var expect = chai.expect;

describe('sendCoordinates', function() {
    var ajax;
    var position
    beforeEach(function() {
        ajax = sinon.stub($, 'ajax').callsFake(function(options) {});
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
        expect(ajax.calledOnce).to.be.true;
    });
    it('should send the correct parameters', function() {
        var expectedUrl = '/coordinates/new';
        var expectedParams = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        };
        sendCoordinates(position);
        sinon.assert.calledWith(ajax, expectedUrl, expectedParams);

    })
    it('should be called with 1 argument', function() {
        expect(function(){sendCoordinates()}).to.throw(Error);
    });
    afterEach(function() {
        ajax.restore();
    })
});
