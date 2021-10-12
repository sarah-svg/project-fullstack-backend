const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('. routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('adds a map and locations via post', async () => {
    return request(app)
      .post('/api/v1/maps')
      .send({
        image: 'www.ww.com',
        locations: ['1ft', '2ft'],
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          image: 'www.ww.com',
          locations: ['1ft', '2ft'],
        });
      });
  });

});
