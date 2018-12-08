var btoa = require('btoa');
var axios = require('axios');
const request = require('superagent');
const qs = require('querystring');
const reddit = require('./reddit.js');

const getAuthKey = function() {
  const { clientId, secretId, username, password } = reddit;

  let data = qs.stringify({
    grant_type: 'client_credentials',
    username,
    password,
  });

  return axios
    .post('https://www.reddit.com/api/v1/access_token', data, {
      headers: {
        'User-Agent': 'JS mechmarketbrowser v1.0 (by /u/mechmarketbrowser)',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: clientId,
        password: secretId,
      },
    })
    .then(({ data }) => console.log(data, 'data', data.body, 'databody'))
    .catch((err, res) => {
      console.log(err, res);
    });
};

// const getAuthKey = function() {
//   const _defaultEndpoint = 'https://www.reddit.com';
//   const { redditClientId, redditSecretId } = keys;

//   request
//     .post(`${_defaultEndpoint}/api/v1/access_token`)
//     .auth(redditClientId, redditSecretId)
//     .type('application/x-www-form-urlencoded')
//     .send(
//       qs.stringify({
//         grant_type: 'client_credentials',
//         username: 'mechmarketbrowser',
//         password: 'fedor12312',
//       })
//     )
//     .set('User-Agent', 'JS mechmarketbrowser v1.0 (by /u/mechmarketbrowser)')
//     .set('accept', 'json')
//     .end((err, res) => {
//       if (err) {
//         console.log(err, 'error');
//         // return cb(err);
//       }
//       console.log(res, 'res');
//       let token = res.body.access_token;
//     });
// };

module.exports = {
  getAuthKey,
};
