var tarball = require('tarball-extract'),
    request = require('request'),
    fs = require('fs');

// in your case it should be:
// var user = 'konsumer';
// var tag = '0.0.8'
// var repoName = 'easy-ffmpeg';

var user = 'konsumer',
    tag = '0.0.8',
    repoName = 'easy-ffmpeg',
    package = 'ffmpeg-' + process.platform + '.tgz',
    counter = 0,
    errors = 0;

function downloader() {
    // if no ffmpeg and ffprobe are found installed
    // we will download the one for our platform

    var url = 'https://github.com/' + user + '/' + repoName + '/releases/download/' + tag + '/' + package;

    request
      .get(url)
      .on('error', function (err) {
        throw err
      })
      .pipe(fs.createWriteStream( package ))
      .on('close', function () {
        tarball.extractTarball(package, __dirname, function (err, result) {
          if (err) throw err
          fs.unlink(package, function (err) {
            if (err) throw err
          })
        })
      })
}

function checker(err, path) {
    if (err) errors++;
    else if (!err && !path) errors++;

    if (counter) {
        // finished checking for ffmpeg and ffprobe
        if (errors) {
            // could not find ffmpeg and ffprobe installed, downloading
            downloader();
        }
    } else counter++;
}

// let's try to find ffmpeg and ffprobe
var ffmpeg = require('fluent-ffmpeg')();

ffmpeg._getFfmpegPath(checker);
ffmpeg._getFfprobePath(checker);
