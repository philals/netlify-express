# SSO example using Netlify

### One click deploy

[![Deploy to
Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philals/netlify-express)

Add the follow env vars:

```
XERO_CLIENT_ID: {Your client ID},
XERO_CLIENT_SECRET: {Your client secret}
```

You will be given a `Netlify` URL for your app. Replace the callback URL in [Xero's developer portal](https://developer.xero.com/myapps) with this URL and append `/callback` to it.

Forked from: https://github.com/neverendingqs/netlify-express. Check out the readme there for more detials.
