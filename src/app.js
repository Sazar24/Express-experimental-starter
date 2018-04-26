const express = require('express');
const app = express();
const getData = require('./routes/getData');

app.use('/getAll/', getData);

app.all('*', function (req, res) {
    res.sendStatus(404);
});

module.exports = app; 