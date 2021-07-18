var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.json({name: 'Violin service', version: 'v2', message: 'This service is containing many mysterious bugs!'});
});

module.exports = router;
