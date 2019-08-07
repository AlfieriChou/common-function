const axios = require('axios')

const getCookie = async (method, url, data) => {
  let cookies
  let params = {
    method: method,
    url: url
  }
  if (data) {
    params.dara = data
  }
  await axios({
    ...params,
    maxRedirects: 0,
    validateStatus: status => {
      return status >= 200 && status < 303
    }
  })
    .then(res => {
      cookies = res.headers['set-cookie']
    })
    .catch(err => {
      throw err
    })
  return cookies
}

module.exports = getCookie
