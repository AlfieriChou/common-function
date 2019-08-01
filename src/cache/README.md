# throttle

## object memory cache

* objThrottle

  ```javascript
  const throttle = require('./objThrottle')
  const testObj = {}
  const key = `${Date.now() / 1000}`
  const throttleObj = throttle(testObj, key)
  if (throttleObj[key] > 5) {
    throw new Error('limit 5 times!')
  }
  return;
