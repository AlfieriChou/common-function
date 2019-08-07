/**
 * @param {object} obj global object
 * @param {key} key obj key
 */

const objThrottle = (obj, key) => {
  if (obj[key] > 0) {
    obj[key]++
  } else {
    Object.keys(obj)
      .filter(i => i < key)
      .forEach(v => {
        delete obj[v]
      })
    obj[key] = 1
  }
  return obj
}

module.exports = objThrottle
