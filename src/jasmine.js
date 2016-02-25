'use strict';

var Jasmine = require('jasmine');
var jasmineInstance = new Jasmine();
var JasmineSpecReporter = require('jasmine-spec-reporter');

process.once('message', function(options) {

  jasmineInstance.onComplete(function(passed) {
    process.send(passed);
  });

  jasmineInstance.addReporter(new JasmineSpecReporter());

  jasmineInstance.loadConfig(options);
  jasmineInstance.configureDefaultReporter({
    print: function() {}
  });
  jasmineInstance.execute();

});
