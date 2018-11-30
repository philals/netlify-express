const strings = require('./htmlStrings');

const { appHtml } = strings;

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const { Issuer } = require('openid-client');

let client;
let callbackURL;

const router = express.Router();

router.get('/callback', async (req, res) => {
  await setUpOIConfig();

  console.log('In query');

  console.log('Query params: ', req.query);
  console.log('callbackUrl: ', callbackURL);

  let tokenSet = await client.authorizationCallback(callbackURL, req.query) // => Promise
  console.log('received and validated tokens %j', tokenSet);
  console.log('validated id_token claims %j', tokenSet.claims);

  let email = tokenSet.claims.email;

  res.send(appHtml(email))
});

router.get('/login', async (req, res) => {
  await setUpOIConfig();
  res.redirect(callbackURL);
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

async function setUpOIConfig() {
  if (!client) {
    let xeroIssuer = await Issuer.discover('https://integration-identity.xero-uat.com/.well-known/openid-configuration') // => Promise
    console.log('well-known has resolved')
    console.log('Discovered issuer %s %O', xeroIssuer.issuer, xeroIssuer.metadata);

    client = new xeroIssuer.Client({
      client_id: process.env.XERO_CLIENT_ID,
      client_secret: process.env.XERO_CLIENT_SECRET
    }); // => Client

    callbackURL = client.authorizationUrl({
      // TODO: resolve this
      // redirect_uri: process.env.URL,
      redirect_uri: 'https://sso.philalsford.com/callback',
      scope: 'openid email profile',
    }); // => String (URL)

    console.log("​redirectUrl: ", callbackURL)
  }
}

module.exports = app;
module.exports.handler = serverless(app);
