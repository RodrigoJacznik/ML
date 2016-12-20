const express = require('express');
const router = express.Router();
const item = require('../models/item');

router.get('/', (req, res) => {
    item.fuzzy(req.query.q, req.session.token.access_token)
        .then((items) => res.json(items));
});

router.get('/:id', (req, res) => {
    item.get(req.params.id, req.session.token.access_token)
        .then((items) => res.json(items));
});

module.exports = router;
