'use strict';

var childProcess = require('child_process');
var zkutils = require('gulp-zkflow-utils');
var zkflowWatcher = require('zkflow-watcher');
var Promise = require('pinkie-promise');

function getJasmineTask(options, gulp, mode) {

  return jasmineTask;

  function jasmineTask(next) {

    var logger = zkutils.logger('test');
    var nextHandler;

    nextHandler = new zkutils.NextHandler({
      next: next,
      watch: mode.watch,
      logger: logger
    });

    zkflowWatcher.watch(runJasmine, mode.watch, options.globs, logger);

    function runJasmine() {

      var jasmineChildProcess;
      var promise = new Promise(function(resolve, reject) {

        jasmineChildProcess = childProcess.fork(__dirname + '/jasmine.js');

        jasmineChildProcess.send(options.jasmine);

        jasmineChildProcess.once('message', function(message) {
          if (!message) {
            reject('One or more tests failed');
            return;
          }
          resolve();
        });

      });

      return nextHandler.handle(promise);

    }

  }

}

exports.getTask = getJasmineTask;
exports.defaultOptions = {
  globs: [
    'src/*.js',
    'src/**/*.js'
  ],
  jasmine: {
    spec_dir: './src/',
    spec_files: [
      '*Spec.js',
      '**/*Spec.js'
    ]
  }
};
