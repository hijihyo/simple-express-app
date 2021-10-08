const { Router } = require('express');

const router = Router();

// GET /
// POST /
router.get('/', (req, res) => res.render('index.pug'));

module.exports = router;