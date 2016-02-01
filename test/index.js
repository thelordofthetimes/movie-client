var shold = require('chai').should();
var MovieClient = require('../index');

describe('#movie client', function() {
   it('create new movie client with api key', function() {
      var apiKey = 'api_key_string';
      var movieClient = new MovieClient(apiKey);
      movieClient.apiKey.should.equal(apiKey);
   });
});
