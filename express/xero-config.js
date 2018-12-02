let config = {};

try {
  // @ts-ignore
  config = require('./config.json');
}
catch{
  config = {
    "appType": "partner",
    "consumerKey": process.env.OA1_CONSUMER_KEY,
    "consumerSecret": process.env.OA1_CONSUMER_SECRET,
    "privateKeyString": process.env.OA1_PRIVATE_KEY,
    "callbackUrl": "https://sso.philalsford.com/.netlify/functions/server/callback-oa1"
  }
}



module.exports = config;
