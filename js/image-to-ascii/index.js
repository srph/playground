var join = require('path').join;
var toAscii = require('image-to-ascii');

toAscii(join(__dirname, 'jelai.jpg'), function(err, converted) {
  if ( err ) {
    console.log('error: ', err);
  } else {
    console.log(converted);
  }
});
