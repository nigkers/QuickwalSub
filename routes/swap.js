const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('swap');
});

module.exports = router;
