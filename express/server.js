const strings = require('./htmlStrings');

const { rootHtml, appHtml } = strings;

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const { Issuer } = require('openid-client');

let client;
let redirect;

const router = express.Router();

router.get('/', async (req, res) => {
  await makeSureDiscover();
  res.send(rootHtml)
});

router.get('/callback', async (req, res) => {
  await makeSureDiscover();

  let tokenSet = await client.authorizationCallback('https://sso.philalsford.com/callback', req.query) // => Promise
  console.log('received and validated tokens %j', tokenSet);
  console.log('validated id_token claims %j', tokenSet.claims);

  let email = tokenSet.claims.email;

  res.send(appHtml(email))
});

router.get('/login', async (req, res) => {
  await makeSureDiscover();
  console.log('in /login and going to ', redirect);
  res.redirect('https://philalford.com/?' + redirect);
});

app.use(bodyParser.json());

app.use('/.netlify/functions/server', router);  // path must route to lambda


async function makeSureDiscover() {
  if (!client) {
    let xeroIssuer = await Issuer.discover('https://integration-identity.xero-uat.com/.well-known/openid-configuration') // => Promise
    console.log('well-known has resolved')
    console.log('Discovered issuer %s %O', xeroIssuer.issuer, xeroIssuer.metadata);

    console.log("​--------------------------------------------------------------------------")
    console.log("​makeSureDiscover -> process.env.XERO_CLIENT_ID", process.env.XERO_CLIENT_ID)
    console.log("​--------------------------------------------------------------------------")

    client = new xeroIssuer.Client({
      client_id: process.env.XERO_CLIENT_ID,
      client_secret: process.env.XERO_CLIENT_SECRET
    }); // => Client

    redirect = client.authorizationUrl({
      redirect_uri: process.env.URL + '/callback',
      scope: 'openid email profile',
    }); // => String (URL)

    console.log("​redirectUrl: ", redirect)
  }
}

module.exports = app;
module.exports.handler = serverless(app);
