var shold = require('chai').should();
var MovieRepo = require('../index');
var escape = MovieRepo.escape;
var unescape = MovieRepo.unescape;

describe('#escape', function() {
   it('convert & to &amp;', function() {
      escape('&').should.equal('&amp;');
   });
});
