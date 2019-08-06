const fileHash = require('../../src/crypto/fileHash')
const path = require('path')

describe('fileHash!!!', () => {
  it('test fileHash!!', async done => {
    const hash = await fileHash(path.resolve(__dirname, './img/test.png'), 'md5')
    const isMd5 = (/[a-fA-F0-9]{32}/).test(hash)
    expect(isMd5).toBeTrue()
    done()
  })
})