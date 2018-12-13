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
<html class="xui-html">
<head>
<link rel="stylesheet" href="https://edge.xero.com/style/xui/14.1.1/xui.min.css">
<title>Serverless Netlify Xero SSO App</title></head>
${css}
<body class="xui-body">
  <h1>Netlify Xero SSO App</h1>
  <img class="mountain-logo" src="/images/flywheel.gif">
  <p>Welcome ${email}</p>
  <p>Your Org is: ${orgName}</p>
  <h2>Here are a few of your bank accounts:</h2>

<div class="xui-table xui-panel xui-table-hasheader">
  <div class="xui-table-wrapper">
    <table class="xui-table-element">
      <thead class="xui-table--head">
        <tr class="xui-table--row xui-text-align-left">
          <th class="xui-table--cell xui-heading-separator xui-table--cell-first" tabindex="0"><span>${acconts[0].Name}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-second" tabindex="0"><span>${acconts[0].BankAccountNumber}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-last" tabindex="0"><span><button class='xui-button xui-button-standard'>Copy</button></span></th>
        </tr>
        <tr class="xui-table--row xui-text-align-left">
      <th class="xui-table--cell xui-heading-separator xui-table--cell-first" tabindex="0"><span>${acconts[1].Name}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-second" tabindex="0"><span>${acconts[1].BankAccountNumber}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-last" tabindex="0"><span><button class='xui-button xui-button-standard'>Copy</button></span></th>        </tr>
        <tr class="xui-table--row xui-text-align-left">
      <th class="xui-table--cell xui-heading-separator xui-table--cell-first" tabindex="0"><span>${acconts[2].Name}</span></th>
          <th class="xui-table--cell xui-heading-separator xui-table--cell-second" tabindex="0"><span>${acconts[2].BankAccountNumber}</span></th>
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
