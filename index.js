var FfmpegCommand = require('fluent-ffmpeg')
var path = require('path')

// only one platform  available, but works for both
var arch = process.arch
if (process.platform === 'win32') {
  arch = 'ia32'
}

var p = path.join(__dirname, 'ffmpeg', process.platform, arch, 'ffmpeg')
FfmpegCommand.setFfmpegPath(p)
module.exports = FfmpegCommand