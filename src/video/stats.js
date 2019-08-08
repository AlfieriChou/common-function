const { ffprobe } = require('./ffmpeg')

const videoInfo = vpath => {
  return new Promise((resolve, reject) => {
    ffprobe(vpath, (err, metadata) => {
      if (err) reject(err)
      resolve(metadata)
    })
  })
}

module.exports = videoInfo
