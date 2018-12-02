const css = `<style>body {
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
}</style>`

function appHtml(email, orgName) {
  return `
<!DOCTYPE html>
<html>
<head>
<title>Serverless Netlify Xero SSO App</title></head>
${css}
<body><h1>Netlify Xero SSO App</h1><img class="mountain-logo" src="/images/flywheel.gif"><p>Welcome ${email}</p><p>Your Org us: ${orgName}</p></body></html>`
}

module.exports = { appHtml }
