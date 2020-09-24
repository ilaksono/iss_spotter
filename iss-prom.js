const ipify = 'https://api.ipify.org/?format=json';
const request = require('request-promise-native');


const fetchMyIP = () => request(ipify);
const fetchCoordsByIP = body => {
  const ip = JSON.parse(body).ip;
  return request('https://ipvigilante.com/' + ip);
};
const fetchISSFlyOverTimes = body => {
  const coords = {'latitude': JSON.parse(body).data.latitude, 'longitude': JSON.parse(body).data.longitude};
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(data => {
      const {response} = JSON.parse(data); //{response} is same as obj.response.
      return response;
    });
};


module.exports = { nextISSTimesForMyLocation };