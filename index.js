
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

const server = app.listen(port);