var path = require('path');
var FfmpegCommand = require('fluent-ffmpeg');
var p = path.join(__dirname, 'ffmpeg', process.platform, process.arch);
FfmpegCommand.setFfmpegPath(p);
module.exports = FfmpegCommand;