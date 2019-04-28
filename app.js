const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const dB = require('./config/mongodb');
dB.get();
// getting routes

const {UsersRoutes} = require('./Factories/Routes');
// getting middlewares
const {errorHandler} = require('./middlewares');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// setting routes
app.use('/users', UsersRoutes);

// catch 404 and forward to error handler
app.use(errorHandler);

module.exports = app;