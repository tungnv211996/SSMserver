var coap = require('coap'),
    bl = require('bl')

module.exports = {
    getData: function (req, res, ip) {
        var server = coap.createServer(function (req, res) {
            res.end('Hello ' + json + '\n')
        }).listen(function () {
            var req = coap.request('coap://[' + ip + ']:5683/sensors/light')
var check = false;
            req.on('response', function (re) {
                if (!check && re.payload) {
		res.pipe(bl(function (err, data) {}))
let data = re.payload.toString().split(';')
                    res.end('Light: ' + data[0] + '<br>' + 'Temperature: ' + data[1] + '&deg C')
                    check = true;
                } else res.status(404).end(JSON.stringify({ code: '404', status: 'Sensor not exsited' }));
                
		//console.log(re);
            })
            req.end()
setTimeout(function () {
                if (!check) {
                    res.status(404).end(JSON.stringify({ code: '404', status: 'Sensor not exsited' }));
                    check = true;
                }
            }, 10000)
        })
    }
}
