const path = require('path');
const bodyParser = require('body-parser');
const { identifyVertices, initialData } = require('../utils/utils')

const { Router } = require('express');
const router = Router();
const jsonParser = bodyParser.json();

router.get('/square', (req, res) => {
    const initial = initialData();

    res.json(initial);
});

router.post('/square', jsonParser, (req, res) => {
    const data = req.body
    const vertices = identifyVertices(data);

    res.json({ vertices });
});

module.exports = router;