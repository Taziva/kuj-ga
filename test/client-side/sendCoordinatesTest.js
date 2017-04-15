'use strict';

var expect = chai.expect;

describe('sendCoordinates', function() {
    var ajax;
    var position
    beforeEach(function() {
        ajax = sinon.stub($, 'ajax').callsFake(function(options){
          var dfd = $.Deferred();
          if(options.success) dfd.done(options.success({status_code:200, data:{restaurant: "Dips"}}));
          if(options.error) dfd.fail(options.error);
          dfd.success = dfd.done;
          dfd.error = dfd.fail;
          return dfd
        });
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
    it('should make an AJAX call', function(done) {
        sendCoordinates(position);
        expect(ajax.calledOnce).to.be.true;
        done();
    });
    it('should send the correct parameters', function(done) {
        var expectedUrl = '/coordinates/new';
        var expectedParams = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
        };
        sendCoordinates(position);
        sinon.assert.calledWith(ajax, { contentType: "application/json; charset=utf-8", data: expectedParams, dataType: "json", url: expectedUrl}  );
        done()
    })
    it('should be called with 1 argument', function() {
        expect(function(){sendCoordinates()}).to.throw(Error);
    });
    afterEach(function() {
        ajax.restore();
    })
});
