'use strict';
const request = require('request-promise');

function getPlaces(option) {
    return new Promise(function(resolve, reject) {

        request.get(option).then((response) => {
            if (response) {
                resolve(response)
            }
        })
    });
};
module.exports = {
    getPlaces
}
