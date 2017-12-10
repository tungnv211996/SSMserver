var coap = require('coap'),
    bl = require('bl')


module.exports = {
    getData: function (req, res, ip) {
        var server = coap.createServer(function (req, res) {
            res.end('Hello ' + json + '\n')
        }).listen(function () {
            var req = coap.request('coap://[' + ip + ']:5683/sensors/light')

            req.on('response', function (re) {
                var tmp = re.payload;
                console.log(tmp);
                res.end(re.payload)
                res.pipe(bl(function (err, data) {
                }))
            })
            req.end()
        })
    }
}