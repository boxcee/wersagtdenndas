const { send } = require('micro');
const compose = require('micro-compose');
const microAuthGoogle = require('microauth-google');
const microAuthTwitter = require('microauth-twitter');

const googleOptions = {
  clientId: '983103481806-mdr0vojr5ffhe0e6n288qmgng65ab2ck.apps.googleusercontent.com',
  clientSecret: 'SnFtTqypQqPovfe76LOqf67S',
  callbackUrl: 'http://localhost:3000/auth/google/callback',
  path: '/api/quote',
  scope: 'email,profile,openid',
  url: 'asdasd'
};

const twitterOptions = {
  clientId: 'client_id',
  clientSecret: 'client_secret',
  callbackUrl: 'http://localhost:3000/auth/twitter/callback',
  path: '/auth/twitter',
  scope: 'identity.basic,identity.team,identity.avatar'
};

const googleAuth = microAuthGoogle(googleOptions);
const twitterAuth = microAuthTwitter(twitterOptions);

const auth = handler => (req, res, auth) => {
  console.log("AUTH", auth);

  if (!auth) {
    return send(res, 404, 'Not Found');
  }

  if (auth.err) {
    console.error(auth.err);
    return send(res, 403, 'Forbidden');
  }

  if (auth.result.provider === 'google') {
    return `${auth.result.provider} provider. Hello ${auth.result.info.login}`;
  }
  if (auth.result.provider === 'twitter') {
    return `${auth.result.provider} provider. Hello ${auth.result.info.user.name}`;
  }

  return handler(req, res);
};

module.exports = googleAuth;
