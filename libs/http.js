var request = require('request');

module.exports = {
    getData: function (req, res, ip) {
var check = false;
        request('http://[' + ip + ']/', function (error, response, body) {
            if(error || !body){
console.log('error:', error); // Print the error if one occurred
res.status(404).end(JSON.stringify({code : '404' , status: 'Sensor not exsited'}));
} else if(!check && body){res.end(body); check = true;} 
        });
setTimeout(function(){
	if(!check) {
res.status(404).end(JSON.stringify({code : '404' , status: 'Sensor not exsited'}));
	check = true;
}
},5000)

    }
}
