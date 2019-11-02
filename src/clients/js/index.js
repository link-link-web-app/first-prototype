const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// connect to mongodb

// middleware
app.use(bodyParser.json());

// initialize routes

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({
    error: err.message
  });
});

// listen for request
app.listen(process.env.PORT || 8081, () => {
  console.log('Now listening for requests');
});
