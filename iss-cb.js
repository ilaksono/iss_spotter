const request = require('request');
const ipify = 'https://api.ipify.org/?format=json';


const fetchMyIP = (cb) => {

  request(ipify, (err, response, body) => {
    // console.log(body);
    // console.log('RESPONSE STATUS CODE: ',response);
    let obj = JSON.parse(body);
    // console.log(obj.ip);
    if (response.statusCode !== 200) {
      const msg = `Status code: ${response.statusCode} when fetching IP. Reponse: ${body}`;
      return cb(Error(msg), null);
    }
    else
      return cb(err, obj.ip);
  });
};
// fetchMyIP('');

// fetchMyIP('').then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
//   throw new Error(err);
// })

module.exports = { fetchMyIP };