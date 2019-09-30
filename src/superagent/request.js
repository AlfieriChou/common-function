const superagent = require('superagent')

const request = ({
  url,
  method,
  query,
  data,
  headers,
  location,
  fields,
  attach
}) => {
  return new Promise((resolve, reject) => {
    const req = superagent[method](url).set('Connection', 'keep-alive')
    if (attach) {
      req.type('form')
      req.set('Accept', 'application/json')
      req.set('Accept-Encoding', 'gzip')
      Object.keys(attach).forEach(key => {
        req.attach(key, attach[key])
      })
    }
    if (fields) {
      req.type('form')
      Object.keys(fields).forEach(key => {
        req.field(key, fields[key])
      })
    }
    if (query) {
      req.query(query)
    }
    if (headers) {
      req.set(headers)
    }
    if (data) {
      req.send(data)
    }
    if (location) {
      req.location()
    }
    req.end((err, res) => {
      if (err) {
        return reject(err)
      }
      return resolve(res.body)
    })
  })
}

module.exports = request
