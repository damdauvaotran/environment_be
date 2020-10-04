const express = require('express');

const router = express.Router();
const envRouter = require('./env');

router.use('/', envRouter);

// GET home page.
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
