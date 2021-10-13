const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Map = require('../lib/models/Maps');

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
  it('gets all the maps in the database', async () => {
    const maps = await Promise.all([
      {
        image: 'www.ww.com',
        locations: ['1ft', '2ft'],
      }, {
        image: 'www.ww.com',
        locations: ['7ft', '8ft'],
      }, {
        image: 'www.ww.com',
        locations: ['4ft', '8ft'],
      }
    ].map(map => Map.post(map)));
    console.log(maps);
    
    return request(app)
      .get('/api/v1/maps')
      .then(res => {
        maps.forEach((map) => {
          expect(res.body).toContainEqual(map);
        });
      });

  });
});
