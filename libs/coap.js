var coap = require('coap'),
    bl = require('bl')


module.exports = {
    getData: function (req, res, ip) {
var check = false;
        var server = coap.createServer(function (req, result) {
            result.end('Hello ' + json + '\n')
        }).listen(function () {
            var req = coap.request('coap://[' + ip + ']:5683/sensors/light')
            req.on('response', function (re) {
if(!check && re.payload){
res.end(re.payload)
check = true;
} else res.status(404).end(JSON.stringify({code : '404' , status: 'Sensor not exsited'}));
                res.pipe(bl(function (err, data) {
                }))
            })
            setTimeout(function(){
	if(!check) {
res.status(404).end(JSON.stringify({code : '404' , status: 'Sensor not exsited'}));
	check = true;
}
},5000)
        })
    }
}
