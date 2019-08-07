const Redis = require('ioredis')

class CommonRedis {
  constructor(config) {
    this.redis = new Redis(config.port, config.host)
  }
  async incr(key, expire) {
    if (expire) {
      const result = await this.redis
        .multi()
        .incr(key)
        .expire(key, expire)
        .exec()
      return result[0][1]
    }
    const result = await this.redis.incr(key)
    return result
  }
}

module.exports = CommonRedis
