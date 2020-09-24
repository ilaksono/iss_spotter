// const { fetchMyIP } = require('./iss-prom');
const { nextISSTimesForMyLocation } = require('./iss-cb');
const {obj} = require('./constants');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(obj.IP, (error, data) => {
//   // console.log(err, data)
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log(data);
// });



// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   // console.log(err, data)
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log(data);
// });

nextISSTimesForMyLocation((error, time) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  print(time);
  
});

const print = passes => {
  for(let pass of passes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
  }
}