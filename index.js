var FfmpegCommand = require('fluent-ffmpeg')
FfmpegCommand.setFfmpegPath(require('path').join(__dirname, 'ffmpeg', process.platform, process.arch))
module.exports = FfmpegCommand
