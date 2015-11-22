var fs = require('fs');
var postcss = require('postcss');
var cssnext = require('postcss-cssnext');
var autoprefixer = require('autoprefixer');
var reporter = require('postcss-reporter');

postcss([reporter, autoprefixer, cssnext])
  .process(fs.readFileSync('styles/main.css'), { from: 'styles/main.css', to: 'style.css'})
  .then(function(result) {
    fs.writeFileSync('style.css', result.css);
    if ( result.map ) fs.writeFileSync('style.css.map', result.map);
  })
  .catch(console.log);