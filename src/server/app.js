const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');

const PUBLIC_PATH = path.join(__dirname, '..', 'client', 'public');

const IS_PRO = process.env.NODE_ENV === 'production';
const PORT = IS_PRO ? process.env.PORT : 8080;

const app = express();

app.use(morgan('combined'));

app.use(session({
    secret: 'Esto es un secreto',
    resave: false,
    saveUninitialized: false
}));

app.use('/public', express.static(PUBLIC_PATH));
app.use(bodyParser.urlencoded({ extended: true }));

if (!IS_PRO) {
    require('../../build/dev-server.js')(app);
}

app.use(require('./controllers'));

app.listen(PORT, 'localhost', function() {
    console.log('Server running on:', PORT);
});
