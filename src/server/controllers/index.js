const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const path = require('path');

const CLIENT_PATH = path.join(__dirname, '..', '..', 'client');

router.use('/api/v1/items/', auth, require('./items'));

router.get('*', auth, (req, res) => {
    res.sendFile(path.join(CLIENT_PATH, 'index.html'));
});

module.exports = router;
