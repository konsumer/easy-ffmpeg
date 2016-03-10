var FfmpegCommand = require('fluent-ffmpeg')
var path = require('path')

// osx: x64 / other: ia32
var arch = process.platform == 'darwin' ? 'x64' : 'ia32';

// only windows has an extension
var ext = process.platform == 'win32' ? '.exe' : '';

FfmpegCommand.setFfmpegPath( path.join(__dirname, 'ffmpeg-' + process.platform, arch, 'ffmpeg' + ext) )

module.exports = FfmpegCommand;