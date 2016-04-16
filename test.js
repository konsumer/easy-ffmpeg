var ffmpeg = require('./')

ffmpeg('/Users/konsumer/Desktop/big_buck_bunny.mp4')
  .videoFilters('fade=in:0:30')
  .videoFilters('pad=640:480:0:40:violet')
  .on('end', function () {
    console.log('done processing input stream')
  })
  .on('error', function (err) {
    console.log('an error happened: ' + err.message)
  })
  .save('big_buck_bunny.mp4')
