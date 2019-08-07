class ObserverList {
  constructor() {
    this.observerList = []
  }
  add(obj) {
    return this.observerList.push(obj)
  }
  empty() {
    return (this.observerList = [])
  }
  count() {
    return this.observerList.length
  }
  get(index) {
    if (index > -1 && index < this.count() - 1) {
      return this.observerList[index]
    }
  }
  insert(obj, index) {
    if (index === 0) {
      this.observerList.unshift(obj)
    }
    if (index === this.count()) {
      this.observerList.push(obj)
    }
    if (index > 0 && index < this.count()) {
      this.observerList.splice(index, 0, obj)
    }
    return index
  }
  indexOf(obj, startIndex) {
    let i = startIndex
    let pointer = -1
    while (i < this.count()) {
      if (this.observerList[i] === obj) pointer = i
      i++
    }
    return pointer
  }
  removeIndexAt(index) {
    if (index === 0) {
      this.observerList.shift()
    }
    if (index === this.count() - 1) {
      this.observerList.pop()
    }
    if (index > 0 && index < this.count() - 1) {
      this.observerList.splice(index, 1)
    }
    return index
  }
  extend(obj, extension) {
    for (var key in obj) {
      extension[key] = obj[key]
    }
  }
}

module.exports = ObserverList
