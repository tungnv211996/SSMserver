var request = require('request');

module.exports = {
    getData: function (req, res, ip) {
        request('http://[' + ip + ']/', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            res.end(body);
        });
    }
}