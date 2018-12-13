const db = require('./db');

const strings = require('./htmlStrings');
const { appHtml } = strings;
var session = require('express-session')

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const callbackUrl = process.env.URL + '/callback';

const { Issuer } = require('openid-client');

let client;
let xeroAuthUrl;

const router = express.Router();

const XeroClient = require('xero-node').AccountingAPIClient;

// @ts-ignore
const config = require('./xero-config');
// @ts-ignore
const xero = new XeroClient(config);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

router.get('/callback-oa1', async (req, res) => {
  await setUpOIConfig();

  const userId = req.session.userId;
  const oauth_verifier = req.query.oauth_verifier;

  const savedRequestToken = db.getRequestToken(userId);
  const accessToken = await xero.oauth1Client.swapRequestTokenforAccessToken(savedRequestToken, oauth_verifier);

  const orgResult = await xero.organisations.get();
  const acctRes = await xero.accounts.get();
  const threeAccts = acctRes.Accounts.splice(0, 3);

  res.send(appHtml(req.session.userEmail, orgResult.Organisations[0].Name, threeAccts))
});


router.get('/callback', async (req, res) => {
  await setUpOIConfig();

  console.log('In query');

  console.log('Query params: ', req.query);
  console.log('callbackUrl: ', callbackUrl);

  let tokenSet = await client.authorizationCallback(callbackUrl, req.query) // => Promise
  console.log('received and validated tokens %j', tokenSet);
  console.log('validated id_token claims %j', tokenSet.claims);

  let email = tokenSet.claims.email;
  let userId = tokenSet.claims.xero_userid;

  // Create request token and get an authorisation URL
  const requestToken = await xero.oauth1Client.getRequestToken();
  console.log('Received Request Token:', requestToken);

  db.saveRequestToken(userId, requestToken);

  let authUrl = xero.oauth1Client.buildAuthoriseUrl(requestToken);

  req.session.userId = userId;
  req.session.userEmail = email;

  res.redirect(authUrl);
});

router.get('/login', async (req, res) => {
  await setUpOIConfig();
  res.redirect(xeroAuthUrl);
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

async function setUpOIConfig() {
  if (!client) {
    let xeroIssuer = await Issuer.discover('https://identity.xero.com/.well-known/openid-configuration') // => Promise
    console.log('well-known has resolved')
    console.log('Discovered issuer %s %O', xeroIssuer.issuer, xeroIssuer.metadata);

    client = new xeroIssuer.Client({
      client_id: process.env.XERO_CLIENT_ID,
      client_secret: process.env.XERO_CLIENT_SECRET
    }); // => Client

    xeroAuthUrl = client.authorizationUrl({
      // TODO: resolve this
      // redirect_uri: process.env.URL,
      redirect_uri: callbackUrl,
      scope: 'openid email profile',
    }); // => String (URL)

    console.log("​redirectUrl: ", xeroAuthUrl)
  }
}

module.exports = app;
module.exports.handler = serverless(app);
