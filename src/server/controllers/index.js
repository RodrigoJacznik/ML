const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const CLIENT_SECRET = 'S4YG2IWhBEGtjFpH20DYGZjdKSwGU9KS';

router.all('*', auth);

router.use('/api/v1/items/', require('./items'));

module.exports = router;
