const rootHtml = `
<!DOCTYPE html><html><head><title>My Serverless Application</title><style>body {
  width: 650px;
  margin: auto;
}
h1 {
  text-align: center;
}
.mountain-logo {
  display: block;
  width: 10rem;
  margin: auto;
}
label {
  display: block;
}</style></head><body><h1>Serverless Zeit Xero SSO App</h1><img class="mountain-logo" src="images/mountain.png"><p><a href="login"> <img class="mountain-logo" src="images/xero_login.png"></a></p></body></html>`

function appHtml(email) {
  return `
<!DOCTYPE html><html><head><title>Serverless Zeit Xero SSO App</title><style>body {
  width: 650px;
  margin: auto;
}
h1 {
  text-align: center;
}
p {
  text-align: center;
}
.mountain-logo {
  display: block;
  width: 10rem;
  margin: auto;
}
label {
  display: block;
}</style></head><body><h1>Serverless Zeit Xero SSO App</h1><img class="mountain-logo" src="images/volcano.png"><p>Welcome ${email}</p></body></html>`
}

module.exports = { rootHtml, appHtml }
