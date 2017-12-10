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
//   var server = coap.createServer(function (req, res) {
//     res.end('Hello ' + json + '\n')
//   }).listen(function () {
//     var req = coap.request('coap://[aaaa::212:7402:2:202]:5683/sensors/light')
//     req.on('response', function (re) {
//   var tmp = re.payload;
//   console.log(tmp);
// 	res.end(re.payload)
// res.pipe(bl(function (err, data) {
//         }))
//     })
//     req.end()
//   })
})
router.post('/', );
module.exports = router;