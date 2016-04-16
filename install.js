var tarball = require('tarball-extract')
var request = require('request')
var fs = require('fs')

var user = 'konsumer'
var tag = '0.0.13'
var repoName = 'easy-ffmpeg'
var pkg = 'ffmpeg-' + process.platform + '.tgz'
var counter = 0
var errors = 0

function downloader () {
  // if no ffmpeg and ffprobe are found installed
  // we will download the one for our platform

  var url = 'https://github.com/' + user + '/' + repoName + '/releases/download/' + tag + '/' + pkg

  request
    .get(url)
    .on('error', function (err) {
      throw err
    })
    .pipe(fs.createWriteStream(pkg))
    .on('close', function () {
      tarball.extractTarball(pkg, __dirname, function (err, result) {
        if (err) {
          throw err
        }
        fs.unlink(pkg, function (err) {
          if (err) {
            throw err
          }
        })
      })
    })
}

function checker (err, path) {
  if (err) {
    errors++
  } else if (!err && !path) {
    errors++
  }

  if (counter) {
    // finished checking for ffmpeg and ffprobe
    if (errors) {
      // could not find ffmpeg and ffprobe installed, downloading
      downloader()
    }
  } else {
    counter++
  }
}

// let's try to find ffmpeg and ffprobe
var ffmpeg = require('fluent-ffmpeg')()

ffmpeg._getFfmpegPath(checker)
ffmpeg._getFfprobePath(checker)
