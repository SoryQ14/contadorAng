module.exports = function(config) {
    // karma.conf.js
    module.exports = function (config) {
        config.set({
            //browsers: ['Chrome'],
            browsers: ['Edge'],
            plugins: [
                //require('karma-chrome-launcher'),
                require('@chiragrupani/karma-chromium-edge-launcher'),
            ],
            client:{
                jasmine:{

                }
            }
        });
  };
}
/*
config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        './path/to/your/app.js',
        './path/to/your/*.spec.js' // replace '*' with your file name if you have specific test files
      ],
      exclude: [],
      preprocessors: {},
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity
    })
*/ 