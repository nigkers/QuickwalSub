const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('sell');
});

module.exports = router;
