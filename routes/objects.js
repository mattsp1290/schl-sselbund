var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var base = require('../util/airtable_base');
var secrets = require('../util/secrets');

router.get('/:key',
  jwt({ secret: secrets('JWT_SECRET'), algorithms: ['HS256'] }),
  function(req, res) {
    var requestKey = req.params.key;
    const table = base('objects');
    const getData = key => {
      table.select({
        filterByFormula: `{key} = "${key}"`
      }).firstPage().then(results => {
        if (results.length > 0) {
          res.send(results[0].fields['value'])
        } else {
          res.sendStatus(404)
        }
      });
    }
    var resp = getData(requestKey);
  }
);

router.post('/:key',
  jwt({ secret: 'secret', algorithms: ['HS256'] }),
  function(req, res) {
    var requestKey = req.params.key;
    const table = base('objects');
    const getData = key => {
      table.select({
        filterByFormula: `{key} = "${key}"`
      }).firstPage().then(results => {
        if (results.length > 0) {
          table.update(results[0].id, {
              "value": req.body.value
            }, (err, record) => {
                if (err) {
                  console.error(err);
                  res.sendStatus(500);
                  return;
                }
                res.sendStatus(200);
                return;
            })
        } else {
          table.create({
            "key": requestKey,
            "value": req.body.value,
          }, (err, record) => {
              if (err) {
                console.error(err)
                res.sendStatus(500);
                return;
              }
              console.log(record.getId());
              res.sendStatus(200);
              return;
          })
        }
      });
    }
    var resp = getData(requestKey);
  }
);

module.exports = router;
