// Karma configuration
// Generated on Thu Apr 07 2016 00:46:48 GMT+0900 (JST)

module.exports = function (config) {
  config.set({
    basePath   : '',
    frameworks : ['mocha', 'browserify'],
    files      : ['test/**/*.js', 'test/**/*.html'],
    exclude    : [],

    preprocessors : {
      'test/**/*.js'   : ['browserify'],
      'test/**/*.html' : 'html2js',
    },

    browserify : {
      debug     : true,
      transform : [
        ['babelify', { plugins : ['babel-plugin-espower'] }],
      ],
      paths     : ['./src/'],
    },

    reporters   : ['progress'],
    port        : 9876,
    colors      : true,
    logLevel    : config.LOG_INFO,
    autoWatch   : false,
    browsers    : ['Chrome'],
    singleRun   : true,
    concurrency : Infinity,
  });
};
