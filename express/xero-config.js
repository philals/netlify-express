// let config = {};

// try {
//   // @ts-ignore
//   config = require('./config.json');
// }
// catch{
var b64string = process.env.OA1_PRIVATE_KEY;
var buf = Buffer.from(b64string, 'base64');

let config = {
  "appType": "partner",
  "consumerKey": process.env.OA1_CONSUMER_KEY,
  "consumerSecret": process.env.OA1_CONSUMER_SECRET,
  "privateKeyString": buf,
  "callbackUrl": "https://sso.philalsford.com/.netlify/functions/server/callback-oa1"
}
// }

module.exports = config;
