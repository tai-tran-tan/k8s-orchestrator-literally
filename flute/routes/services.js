var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.json({name: 'Flute service', version: 'v1', message: 'This service is running perfectly!'});
});

module.exports = router;
