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

function appHtml(email, orgName, contacts) {
  return `
<!DOCTYPE html>
<html>
<head>
<title>Serverless Netlify Xero SSO App</title></head>
${css}
<body>
  <h1>Netlify Xero SSO App</h1>
  <img class="mountain-logo" src="/images/flywheel.gif">
  <p>Welcome ${email}</p>
  <p>Your Org is: ${orgName}</p>
  <h2>Here are a few of your contactsL</h2>
  <ul>
    <li>${contacts[0].Name}</li>
    <li>${contacts[1].Name}</li>
    <li>${contacts[2].Name}</li>
    <li>${contacts[3].Name}</li>
  </ul>
</body>
</html>`
}

module.exports = { appHtml }
