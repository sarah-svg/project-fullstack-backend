
   
const { Router } = require('express');
const Map = require('../models/Maps');

module.exports = Router()
  .post('/', (req, res, next) => {
    Map.post(req.body).then(index => res.send(index))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Map.find().then(index => res.send(index))
       
      .catch(next);
  })  
  .get('/:id', (req, res, next) => {
    Map
      .findById(req.params.id)
      .then(dogs => res.send(dogs))
      .catch(next);
  })
    
;
