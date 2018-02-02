var gulp        = require('gulp'),
    postcss     = require('gulp-postcss'),
    cssvars     = require('postcss-simple-vars'),
    nested      = require('postcss-nested'),
    cssImport   = require('postcss-import'),
    autoprefix  = require('autoprefixer'),
    mixins      = require('postcss-mixins'),
    hexrgba     = require('postcss-hexrgba');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefix]))
      .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
    })
      .pipe(gulp.dest('./app/temp/styles'));
});
