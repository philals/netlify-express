const { Issuer } = require('openid-client');
const port = process.env.PORT || 3000

let client;
let redirect;

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

module.exports = { makeSureDiscover, redirect, client, port }
