require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
// const cloudinary = require('cloudinary');


app.use(express.json());
app.use(upload());
app.use(cors());


///
// cloudinary.config({ 
//   cloud_name: process.env.CLOUD_NAME, 
//   api_key: process.env.API_KEY, 
//   api_secret: process.env.API_SECRET
// });

// app.get('/wake-up', (req, res) => res.send('👌'));

// app.post('/image-upload', (req, res) => {

//   const values = Object.values(req.files);
//   const promises = values.map(image => cloudinary.uploader.upload(image.path));
    
//   Promise
//     .all(promises)
//     .then(results => res.json(results))
//     .catch((err) => res.status(400).json(err));
// });
//////this^
app.use('/api/v1/maps', require('./contoller/maps'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
