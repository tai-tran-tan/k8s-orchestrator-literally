var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.json({name: 'Violin service', version: 'v1', message: 'This service is running perfectly!'});
});

router.get('/play', function(req, res, next) {
  res.json({name: 'Violin service', sound: 'do re mi, do re mi'});
});

module.exports = router;
