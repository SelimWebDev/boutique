const express = require('express');
const helmet = require("helmet");
const path = require('path');

const articlesRoutes = require('./routes/articles')

const app = express();

app.use(helmet());

app.use((req, res, next) => {                   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(express.json());

  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/articles', articlesRoutes)
  module.exports = app;