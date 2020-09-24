const request = require('request');
const ipify = 'https://api.ipify.org/?format=json';
const vigil = 'https://ipvigilante.com/'

const fetchMyIP = (cb) => {
  request(ipify, (err, response, body) => {
    // console.log(body);
    // console.log('RESPONSE STATUS CODE: ',response);
    // console.log(obj.ip);
    if (err) return cb(err, null);
    else if (response.statusCode !== 200) {
      const msg = `Status code: ${response.statusCode} when fetching IP. Reponse: ${body}`;
      return cb(Error(msg), null);
    }
    else {
      let obj = JSON.parse(body);
      return cb(null, obj.ip);
    }
  });
};

const fetchCoordsByIP = (ip, cb) => {
  request(vigil + ip, (err, resp, body) => {
    if (err) return cb(err, null);
    else if (resp.statusCode !== 200) {
      const msg = `Status code: ${resp.statusCode} when fetching IP. Response: ${body}`;
      return cb(Error(msg), null);
    }
    else {
      let obj = JSON.parse(body);
      // console.log(obj.data.latitude);
      return cb(null, {"latitude": obj.data.latitude, "longitude": obj.data.longitude});
    }
  });
}


module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};