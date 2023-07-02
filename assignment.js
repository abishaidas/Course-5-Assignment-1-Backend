'use strict';

const express = require('express');

var PORT = 3032
var HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('This is part of assignment service response');
});

app.listen(PORT, HOST);

console.log('Assignment service up and running on ' + 'http://${HOST}:${PORT}');

console.log('Version 2 - latest');