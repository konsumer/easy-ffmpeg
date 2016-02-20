var FfmpegCommand = require('fluent-ffmpeg')
var path = require('path')

var name = 'ffmpeg'

// only one platform  available, but works for both
var arch = process.arch
if (process.platform === 'win32') {
  arch = 'ia32'
  name = 'ffmpeg.exe'
}

var p = path.join(__dirname, 'ffmpeg', process.platform, arch, name)

FfmpegCommand.setFfmpegPath(p)
module.exports = FfmpegCommand