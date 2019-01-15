var b64string = process.env.OA1_PRIVATE_KEY;
var buf = Buffer.from(b64string, 'base64');

let config = {
  "appType": "public",
  "consumerKey": process.env.OA1_CONSUMER_KEY,
  "consumerSecret": process.env.OA1_CONSUMER_SECRET,
  // "privateKeyString": buf,
  "callbackUrl": process.env.URL + "/.netlify/functions/server/callback-oa1"
}

module.exports = config;
