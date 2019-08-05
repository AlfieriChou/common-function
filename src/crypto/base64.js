const crypto = require('crypto')

const encrypted = (data, key, iv) => {
  const cipher = crypto.createCipheriv('des-ede3-cbc', key, iv)
  const ciph = cipher.update(data, 'utf8', 'base64')
  ciph += cipher.final('base64')
  return ciph
}

const decrypted = (encrypted, key, iv) => {
  const decipher = crypto.createDecipheriv('des-ede3-cbc', key, iv)
  const data = decipher.update(encrypted, 'base64', 'utf8')
  data += decipher.final('utf8')
  return data
}

module.exports = {
  encrypted,
  decrypted
}
