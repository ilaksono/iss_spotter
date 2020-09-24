// const { fetchMyIP } = require('./iss-prom');
const { fetchMyIP, fetchCoordsByIP } = require('./iss-cb');
const {IP} = require('./constants');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP(IP, (error, data) => {
  // console.log(err, data)
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log(data);
});