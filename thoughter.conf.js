module.exports = function karmaConfig( config ){

  config.set({
    frameworks:[ 'mocha', 'chai'],
    browsers: ['Chrome'],
    singleRun: true,
    files: [
      'src/**/*.js',
      'node_modules/fectch-mock/es5/client-browserified.js',
      'test/specs/**/*.js'
    ]
  });

};
