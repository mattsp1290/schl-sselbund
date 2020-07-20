var express = require('express');
var router = express.Router();

/* GET object listing. */
router.get('/', function(req, res, next) {
  res.send('objects responsee');
});

module.exports = router;
