const axios = require('axios')
/**
 * 
 * @param {string} method post
 * @param {string} url url
 * @param {form} formData const form = new FormData() form.set('username', 'alfieri') form.append('image', imageFile)
 */
const sendFormData = async (method, url, formData) => {
  let result
  await axios({
    method: method,
    url: url,
    data: formData,
    config: {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
  }).then(res => {
    result = res.data
  }).catch(err => {
    throw err
  })
  return result
}

module.exports = sendFormData
