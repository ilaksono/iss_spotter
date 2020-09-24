const request = require('request');
const ipify = 'https://api.ipify.org/?format=json';
const vigil = 'https://ipvigilante.com/';

const fetchMyIP = (cb) => {
  request(ipify, (err, response, body) => {
    // console.log(body);
    // console.log('RESPONSE STATUS CODE: ',response);
    // console.log(obj.ip);
    if (err) return cb(err, null);
    else if (response.statusCode !== 200) {
      const msg = `Status code: ${response.statusCode} when fetching IP. Reponse: ${body}`;
      return cb(Error(msg), null);
    } else {
      let obj = JSON.parse(body);
      return cb(null, obj.ip);
    }
  });
};

const fetchCoordsByIP = (ip, cb) => {
  request(vigil + ip, (err, resp, body) => {
    // console.log(ip);
    if (err) return cb(err, null);
    else if (resp.statusCode !== 200) {
      const msg = `Status code: ${resp.statusCode} when fetching IP. Response: ${body}`;
      return cb(Error(msg), null);
    } else {
      let obj = JSON.parse(body);
      // console.log(obj);
      return cb(null, { "latitude": obj.data.latitude, "longitude": obj.data.longitude });
    }
  });
};

const fetchISSFlyOverTimes = (coords, cb) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (err, resp, body) => {
    if (err) return cb(err, null);
    else if (resp.statusCode !== 200) {
      const msg = `Status code: ${resp.statusCode} when fetching IP. Response: ${body}`;
      return cb(Error(msg), null);
    } else {
      let obj = JSON.parse(body);
      // console.log(obj.response);
      return cb(null, obj.response);
    }
  });
};

const nextISSTimesForMyLocation = (cb) => {
  fetchMyIP((error, ip) => {
    if (error)
      return cb(error, null);

    fetchCoordsByIP(ip, (error, coords) => {
      if (error)
        return cb(error, null);

      fetchISSFlyOverTimes(coords, (error, passes) => {
        if (error)
          return cb(error, null);
        cb(null, passes);
      });
    });
  });
};


//http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON
//example op: Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
};