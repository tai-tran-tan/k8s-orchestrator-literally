var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.json({name: 'Flute service'});
});

module.exports = router;
