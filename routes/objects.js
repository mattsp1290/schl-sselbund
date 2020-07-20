var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');


router.get('/',
  jwt({ secret: 'secret', algorithms: ['HS256'] }),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  });

module.exports = router;
