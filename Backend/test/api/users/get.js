const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../index.js');
const conn = require('../../../config/db');

describe('GET /user/getallusers', () => {

    before((done) => {
      conn.connectDB()
        .then(() => done())
        .catch((err) => done(err));
    })


    after((done) => {
      conn.close()
        .then(() => done())
        .catch((err) => done(err));
    })
    
  
    it('OK, there are 2 users', (done) => {
      request(app).get('/user/getallusers')
        .then((res) => {
          const body = res.body;
          console.log(body);
          expect(body.length).to.equal(2);
          done();
        })
        .catch((err) => done(err));
    });
  
    
  })