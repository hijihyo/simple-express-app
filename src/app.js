const express = require('express');
const controller = require('./controller');

const app = express();

app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.use('/', controller);

module.exports = app;