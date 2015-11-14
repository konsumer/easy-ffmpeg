var tarball = require('tarball-extract')
var request = require('request')
var fs = require('fs')

request
  .get('https://github.com/konsumer/easy-ffmpeg/releases/download/0.0.8/ffmpeg.tgz')
  .on('error', function (err) {
    throw err
  })
  .pipe(fs.createWriteStream('ffmpeg.tgz'))
  .on('close', function () {
    tarball.extractTarball('ffmpeg.tgz', __dirname, function (err, result) {
      if (err) throw err
      fs.unlink('ffmpeg.tgz', function (err) {
        if (err) throw err
      })
    })
  })
