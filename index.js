// const { fetchMyIP } = require('./iss-prom');
const { fetchMyIP } = require('./iss-cb');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
// .then(error, data => {

// }).catch((error, data) => {

// });