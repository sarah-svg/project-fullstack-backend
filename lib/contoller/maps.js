
   
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
    
    
;
