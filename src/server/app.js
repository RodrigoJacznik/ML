const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'Esto es un secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./controllers'));

app.listen('8080', 'localhost', function() {
    console.log('Server running on: 8080');
});
