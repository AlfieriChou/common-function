const path = require('path')
const shell = require('shelljs')
const resize = require('../../src/video/resize')
const getVideoInfo = require('../../src/video/stats')

const videoPath = path.resolve(__dirname, './test.mp4')
const outputPath = path.resolve(__dirname, './output.mp4')

describe('video!!!', () => {
  it('test no inputPath!!', async done => {
    try {
      await resize({
        outputPath,
        format: 'mp4',
        size: '640x480'
      })
    } catch (e) {
      expect(e.message).toBe('please add video inputPath!!')
    }
    done()
  })
  it('test no outputPath!!', async done => {
    try {
      await resize({
        inputPath: videoPath,
        format: 'mp4',
        size: '640x480'
      })
    } catch (e) {
      expect(e.message).toBe('please add video outputPath!!')
    }
    done()
  })
  it('test no format!!', async done => {
    try {
      await resize({
        inputPath: videoPath,
        outputPath,
        size: '640x480'
      })
    } catch (e) {
      expect(e.message).toBe('please add video format!!')
    }
    done()
  })
  it('test no bitRate!!', async done => {
    try {
      await resize({
        inputPath: videoPath,
        outputPath,
        format: 'mp4'
      })
    } catch (e) {
      expect(e.message).toBe('please add video bitRate!!')
    }
    done()
  })
  it('test video resize!!', async done => {
    await resize({
      inputPath: videoPath,
      outputPath,
      format: 'mp4',
      size: '640x480'
    })
    const videoInfo = await getVideoInfo(outputPath)
    expect(videoInfo.streams[0].width).toEqual(640)
    expect(videoInfo.streams[0].height).toEqual(480)
    shell.rm('-rf', outputPath)
    done()
  })
})
