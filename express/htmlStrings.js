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

function appHtml(email, orgName, acconts) {
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
  <h2>Here are a few of your bank accounts:</h2>
  <ul>
    <li>${acconts[0].Name}</li>
    <li>${acconts[1].Name}</li>
    <li>${acconts[2].Name}</li>
  </ul>
</body>
</html>`
}

module.exports = { appHtml }
