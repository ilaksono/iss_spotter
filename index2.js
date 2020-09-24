const { nextISSTimesForMyLocation  } = require('./iss-prom');

// fetchMyIP()
// .then(body => fetchCoordsByIP(body))
// .then(body => fetchISSFlyOverTimes(body))
// .then(body => print(body));
const print = passes => {
  for (let pass of passes) {
    const date = new Date(0);
    date.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then(data => print(data))
  .catch(err => console.log('It didn\' work: ', err.message));
