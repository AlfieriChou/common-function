const ObserverList = require('./observer')

class Subject {
  constructor() {
    this.observers = new ObserverList()
  }
  addObserver(observer) {
    this.observers.Add(observer)
  }
  removeObserver(observer) {
    this.observers.removeIndexAt(this.observers.IndexOf(observer, 0))
  }
}

module.exports = Subject
