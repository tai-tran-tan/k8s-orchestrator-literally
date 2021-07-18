var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.json({name: 'Composer service', version: 'v1', message: 'This service is running perfectly!'});
});

router.get('/play', async function(req, res, next) {
  const violinSound = await axios.get('http://violin:8080/api/v1/services/play'); console.log(violinSound)
  const fluteSound = await axios.get('http://flute:8080/api/v1/services/play'); console.log(fluteSound)
  const sounds = [ violinSound.data, fluteSound.data]
  res.json({name: 'Composer service', version: 'v1', message: 'This service is running perfectly!', sounds: sounds});
});

module.exports = router;
