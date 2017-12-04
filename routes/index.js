var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/temp', function ledOnOff(req, res){
  // console.log('a');
  var coap = require('coap')
  , server = coap.createServer(),
    temp, bl   = require('bl')

  server.on('request', function(req, qes) {
	if (req.headers['Accept'] != 'application/json') {
    res.code = '4.06'
    return res.end()
  }

  res.setOption('Content-Format', 'application/json')

  res.end(JSON.stringify({ hello: "world" }))
  }
   }).listen(function() {
  var req = coap.request('coap://[aaaa::212:7402:2:202]:5683/sensors/light')

  req.on('response', function(res) {
    res.pipe(process.stdout)
   console.log('response code', res.code)
      if (res.code !== '2.05')
        return process.exit(1)

      res.pipe(bl(function(err, data) {
        var json = JSON.parse(data)
        console.log(json)
        process.exit(0)
      }))
  })
  req.end()
  })
  
})

router.post('/', );
module.exports = router;
