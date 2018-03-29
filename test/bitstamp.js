process.env.NODE_ENV = 'test';

let chai = require('chai'),
  chaiHttp = require('chai-http'),
  server = require('../app.js'),
  should = chai.should();

chai.use(chaiHttp);

describe('/GET bitstamp', () => {
  it('it should GET ticker from bitstamp', done => {
    chai.request(server)
      .get('/bitstamp?url=https://www.bitstamp.net/api/ticker/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      })
  })
});
