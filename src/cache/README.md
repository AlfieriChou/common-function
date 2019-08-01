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
  return
  ```

## redis cache

* redisThrottle

  ```javascript
  const CommonRedis = require('./redisThrottle')
  const config = {
    host: '127.0.0.1',
    port: 6379
  }
  const key = `${Date.now() / 1000}`
  const redis = new CommonRedis(config)
  const times = await redis.incr(key, 10)
  if (times > 5) {
    throw new Error('limit 5 times!')
  }
  return
  ```
