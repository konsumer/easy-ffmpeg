var FfmpegCommand = require('fluent-ffmpeg')
var path = require('path')

var p = path.join(__dirname, 'ffmpeg', process.platform, arch, 'ffmpeg')

// only one platform  available, but works for both
var arch = process.arch
if (process.platform === 'win32') {
  arch = 'ia32'
  p += '.exe'
}

FfmpegCommand.setFfmpegPath(p)
module.exports = FfmpegCommand