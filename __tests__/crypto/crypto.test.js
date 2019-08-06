const { encrypted, decrypted } = require('../../src/crypto')

describe('base64 test!!!', () => {
  it('base64 encode and decode!!', (done) => {
    const data = {
      test: 'test'
    }
    const encode = encrypted(JSON.stringify(data))
    const decode = decrypted(encode)
    expect(JSON.parse(decode)).toMatchObject(data)
    done()
  })
})
