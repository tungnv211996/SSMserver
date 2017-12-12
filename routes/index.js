var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/temp', function (req, res) {
 var ip = req.query.ip,
      protocol = req.query.protocol
  var libs = require('./../libs/' + protocol);
  libs.getData(req, res, ip)
})
//router.post('/', );
module.exports = router;
