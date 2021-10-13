
   
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

  .delete('/:id', (req, res, next) => {
    Map
      .delete(req.params.id)
      .then(maps => res.send(maps))
      .catch(next);
  })
  .put('/:id', (req, res) => {
    Map
      .update(req.params.id, req.body)
      .then(map => res.send(map));
  });
    

