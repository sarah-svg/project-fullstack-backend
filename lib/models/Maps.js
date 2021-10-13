const pool = require('../utils/pool');

module.exports = class Map{
    id;
    image;
    locations;

    constructor(row) {
      this.id = row.id;
      this.image = row.image;
      this.locations = row.locations;
    }

    static async post(map) {
      const { rows } = await pool.query(
        'INSERT INTO maps (image, locations) VALUES ($1, $2) RETURNING * ',
        [map.image, map.locations]
      );
      
      if(!rows[0]) throw new Error('Could not add the new map.');
      return new Map(rows[0]);
    }

    static async find() {
      const { rows } = await pool.query(
        'SELECT * FROM maps',
      );
  
      if(!rows[0]) throw new Error('No maps in database.');
  
      return rows.map(row => new Map(row));
    }
    static async findById(id) {
      const { rows } = await pool.query(
        `SELECT * FROM maps
            WHERE id=$1`,
        [id]
      );
  
      if(!rows[0]) throw new Error(`No map matching id of ${id}.`);
  
      return new Map(rows[0]);
    }
    static async delete(id) {
      const { rows } = await pool.query(
        `DELETE FROM maps
              WHERE id=$1
              RETURNING *`,
        [id]
      );
    
      if(!rows[0]) throw new Error(`No maps matching id of ${id}.`);
    
      return new Map(rows[0]);
    }
};
