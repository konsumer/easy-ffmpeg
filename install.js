var tarball = require('tarball-extract'),
    request = require('request'),
    fs = require('fs');

// in your case it should be:
// var user = 'konsumer';
// var tag = '0.0.8'
// var repoName = 'easy-ffmpeg';

var user = 'jaruba',
    tag = 'v0.0.1',
    repoName = 'ffmpeg-binaries',
    package = 'ffmpeg-' + process.platform + '.tgz';

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
