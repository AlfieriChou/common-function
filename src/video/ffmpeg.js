const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg')
const ffmpeg = require('fluent-ffmpeg')

const ffprobe = require('node-ffprobe')
const ffprobeInstaller = require('@ffprobe-installer/ffprobe')

ffmpeg.setFfmpegPath(ffmpegInstaller.path)

ffprobe.FFPROBE_PATH = ffprobeInstaller.path

module.exports = {
  ffmpeg,
  ffprobe
}
