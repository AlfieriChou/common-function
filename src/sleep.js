const sleep = async (ms = 0) => {
  return new Promise(r => setTimeout(r, ms))
}

module.exports = sleep
