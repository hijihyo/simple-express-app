const express = require('express');

const app = express();

app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

module.exports = app;