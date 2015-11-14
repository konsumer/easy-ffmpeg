var tarball = require('tarball-extract')

tarball.extractTarballDownload('https://github.com/konsumer/easy-ffmpeg/releases/download/0.0.3/ffmpeg.tgz', 'ffmpeg.tgz', __dirname, {}, function (err, result) {
  if (err) throw err
})
