const gulp = require('gulp')
const runSequence = require('run-sequence')

const config = {
  src: 'src',
  dist: 'dist',
  port: 8080,
}

// load other task definitions
require('./gulp/lint.js')(config)
require('./gulp/misc.js')(config)
require('./gulp/serve.js')(config)
require('./gulp/build.js')(config)

/*
 * Exposed gulp tasks
 */

gulp.task('default', [
  'serve:dev',
])

gulp.task('build', () => {
  runSequence(
    'clean',
    'webpack-build',
    'generate-service-worker'
  )
})

// Lint all js files added and modified in git
gulp.task('lint', [
  'lint:js',
  'lint:scss',
])
