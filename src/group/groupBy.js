const groupBy = (list, key) => {
  return list.reduce((result, item) => {
    ;(result[item[key]] = result[item[key]] || []).push(item)
    return result
  }, {})
}

module.exports = groupBy
