// const { fetchMyIP } = require('./iss-prom');
const { fetchMyIP, fetchCoordsByIP } = require('./iss-cb');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('99.229.163.181', (error, data) => {
  // console.log(err, data)
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log(data);
});