function optionsConstructer(uri, qs) {
 return {
   uri: uri,
   qs: qs,
   headers: {
    'User-Agent': 'Request-Promise'
   },
   json: true // Automatically parses the JSON string in the response
  }
}

module.exports = optionsConstructer;
