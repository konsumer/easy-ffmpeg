var FfmpegCommand = require('fluent-ffmpeg')
// only one platform  available, but works for both
var arch = process.arch
if (process.platform === 'win32') {
  arch = 'ia32'
}
FfmpegCommand.setFfmpegPath(require('path').join(__dirname, 'ffmpeg', process.platform, arch))
module.exports = FfmpegCommand
