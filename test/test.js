var request = require('supertest');
var app = require('../server');
describe('GET /ss', function() {
 it('respond with hello world', function(done) {
  //navigate to root and check the response is "hello world"
  request(app).get('/ss').expect('hello world', done);
 });
});