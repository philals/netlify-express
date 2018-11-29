const strings = require('./htmlStrings');
const shared = require('./shared');

const { client, makeSureDiscover, redirect } = shared;
const { rootHtml, appHtml } = strings;

const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

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
  res.redirect('https://google.com');
});

app.use(bodyParser.json());

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
