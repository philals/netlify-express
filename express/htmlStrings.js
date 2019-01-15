const css = `<style>
  body {
    margin: auto;
  }

  .xui-table {
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
  }
</style>`

function appHtml(email, orgName, invoices) {
  return `<!DOCTYPE html>
<html class="xui-html">

<head>
  <link rel="stylesheet" href="https://edge.xero.com/style/xui/14.1.1/xui.min.css">
  <title>Serverless Netlify Xero SSO App</title>
</head>
${css}
<link rel="stylesheet" href="/css/demo.css">
<link rel="stylesheet" href="/css/header-basic-light.css">
<link href='https://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css'>

<body class="xui-body">

 <header class="header-basic">

    <div class="header-limiter">

      <h1><a href="#">Dino<span>Expenses</span></a></h1>

      <nav>
        <a href="#" class="selected">Expenses</a>
        <a href="#">Comet Monitoring</a>
        <a href="#">Insurance</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </nav>
    </div>

  </header>

  <h1 class="xui-text-align-center">Dinosaur Expenses Monitoring</h1>

  <img class="mountain-logo xui-padding-bottom-large" src="/images/sauropod.png">
  <h3 class="xui-text-align-center">Welcome ${email}</h3>
  <h3 class="xui-text-align-center">Your Organisation is: ${orgName}</h3>

  <div class="xui-table xui-panel xui-table-hasheader">
    <div class="xui-table-wrapper">
      <table class="xui-table-element">
        <thead class="xui-table--head">
          <tr class="xui-table--row xui-text-align-left">
            <th class="xui-table--cell xui-heading-separator xui-table--cell-first xui-table--sortbutton xui-table--sortbutton-active"
              role="button" tabindex="0">
              <div><span>Customer</span></div>
            </th>

            <th class="xui-table--cell xui-heading-separator xui-table--cell-secondtolast xui-table--sortbutton" role="button"
              tabindex="0">
              <div><span>Currency</span><svg focusable="false" class="xui-icon xui-table--sortbutton-icon" width="8"
                  height="11" viewBox="0 0 8 11">
                  <path d="M3 0h2v8l2-2 1 1-4 4-4-4 1-1 2 2z" role="presentation"></path>
                </svg></div>
            </th>
            <th class="xui-table--cell xui-heading-separator xui-table--cell-last xui-table--sortbutton" role="button"
              tabindex="0">
              <div><span>Price</span><svg focusable="false" class="xui-icon xui-table--sortbutton-icon" width="8"
                  height="11" viewBox="0 0 8 11">
                  <path d="M3 0h2v8l2-2 1 1-4 4-4-4 1-1 2 2z" role="presentation"></path>
                </svg></div>
            </th>
          </tr>
        </thead>
        <tbody class="xui-table--body">

          <tr class="xui-table--row">
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-first xui-table--cell-singleline"><span
                class="xui-text-emphasis">${invoices[0].Contact.Name}</span></td>
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-second xui-table--cell-singleline">${invoices[0].CurrencyCode}</td>
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-last xui-table--cell-singleline">$${invoices[0].Total}</td>
          </tr>

          <tr class="xui-table--row">
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-first xui-table--cell-singleline"><span
                class="xui-text-emphasis">${invoices[1].Contact.Name}</span></td>
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-second xui-table--cell-singleline">${invoices[1].CurrencyCode}</td>
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-last xui-table--cell-singleline">$${invoices[1].Total}</td>
          </tr>

          <tr class="xui-table--row">
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-first xui-table--cell-singleline"><span
                class="xui-text-emphasis">${invoices[2].Contact.Name}</span></td>
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-second xui-table--cell-singleline">${invoices[2].CurrencyCode}</td>
            <td tabindex="0" class="xui-table--cell xui-padding-small xui-table--cell-divider xui-table--cell-last xui-table--cell-singleline">$${invoices[2].Total}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
  <h3 class="xui-text-align-center">Looks like you're spending the right amount on dinosaurs!</h3>

</body>

</html>
`



  return `
<!DOCTYPE html>
<html class="xui-html">
<head>
<link rel="stylesheet" href="https://edge.xero.com/style/xui/14.1.1/xui.min.css">
<title>Dinosaur Expenses Monitoring - Before it's too late...</title>
</head>
${css}
<body class="xui-body">
  <h1>Netlify Xero SSO App</h1>
  <img class="mountain-logo" src="/images/t-rex.png">
  <p>Welcome ${email}</p>
  <p>Your Org is: ${orgName}</p>
  <h2>Here are a few of your bank accounts:</h2>

<div class="xui-table xui-panel xui-table-hasheader">
  <div class="xui-table-wrapper xui-padding-large">
    <table class="xui-table-element">
      <thead class="xui-table--head">
        <tr class="xui-table--row xui-text-align-left">
          <th class="xui-table--cell xui-heading-separator xui-table--cell-first" tabindex="0"><span>${invoices[0].Name}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-second" tabindex="0"><span>${invoices[0].BankAccountNumber}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-last" tabindex="0"><span><button class='xui-button xui-button-standard'>Copy</button></span></th>
        </tr>
        <tr class="xui-table--row xui-text-align-left">
      <th class="xui-table--cell xui-heading-separator xui-table--cell-first" tabindex="0"><span>${invoices[1].Name}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-second" tabindex="0"><span>${invoices[1].BankAccountNumber}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-last" tabindex="0"><span><button class='xui-button xui-button-standard'>Copy</button></span></th>        </tr>
        <tr class="xui-table--row xui-text-align-left">
      <th class="xui-table--cell xui-heading-separator xui-table--cell-first" tabindex="0"><span>${invoices[2].Name}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-second" tabindex="0"><span>${invoices[2].BankAccountNumber}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-last" tabindex="0"><span><button class='xui-button xui-button-standard'>Copy</button></span></th>        </tr>
      </thead>
      <tbody class="xui-table--body"></tbody>
    </table>
  </div>
</div>

</body>
</html>`
}

module.exports = { appHtml }
