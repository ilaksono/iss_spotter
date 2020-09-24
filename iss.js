const request = require('request');
const ipify = 'https://api.ipify.org/?format=json'


const fetchMyIP = (cb) => {
  return new Promise((res, rej) => {
    request(ipify, (err, response, body) => {
      // console.log(body);
      let obj = JSON.parse(body);
      // console.log(obj.ip);
      if (!err)
        res(cb(err, obj.ip));
      else
        rej(cb(err, obj.ip));
    })
  })
}
// fetchMyIP('');

// fetchMyIP('').then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
//   throw new Error(err);
// })

module.exports = { fetchMyIP };