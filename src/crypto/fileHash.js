const crypto = require('crypto')
const fs = require('fs')

const fileHash = (filepath, algorithm = 'md5') => {
  return new Promise((resolve, reject) => {
    let shasum = crypto.createHash(algorithm)
    try {
      let s = fs.ReadStream(filepath)
      s.on('data', data => {
        shasum.update(data)
      })
      s.on('end', () => {
        const hash = shasum.digest('hex')
        resolve(hash)
      })
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = fileHash
