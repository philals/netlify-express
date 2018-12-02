// THIS IS A SIMPLE IM MEMORY DB. DON'T USE IT IN PROD (MAYBE...).

let usersTokens = {}

function getAccessToken(userId) {
  return usersTokens[userId].accessToken;
}

function getRequestToken(userId) {
  return usersTokens[userId].requestToken;
}

function saveAcessToken(userId, accessToken) {
  usersTokens[userId].accessToken = accessToken;
}

function saveRequestToken(userId, requestToken) {
  if (!usersTokens[userId]) {
    usersTokens[userId] = {}
  }
  usersTokens[userId].requestToken = requestToken;
}

module.exports = {
  getAccessToken, getRequestToken, saveAcessToken, saveRequestToken
}
