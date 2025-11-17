require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bugRoutes = require('./routes/bugs');
const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bugtracker';

app.use(express.json());
app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

mongoose.connect(MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(()=>app.listen(PORT, ()=>console.log(`Server running on ${PORT}`)))
  .catch(err => console.error(err));
