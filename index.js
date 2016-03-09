var FfmpegCommand = require('fluent-ffmpeg')
var path = require('path')

// windows: 32bit / other: x64
var arch = process.platform == 'win32' ? 'ia32' : 'x64';

// only windows has an extension
var ext = process.platform == 'win32' ? '.exe' : '';

FfmpegCommand.setFfmpegPath( path.join(__dirname, 'ffmpeg-' + process.platform, arch, 'ffmpeg' + ext) )

module.exports = FfmpegCommand;