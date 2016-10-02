Refill task jasmine
===================

Jasmine gulp task in [Refill](https://github.com/refilljs/refill) format. Useful for testing your node app.
It uses jasmine API directly, and in watch mode it runs jasmine in separate process to avoid require cache invalidation problem.

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

[Facebook](https://www.facebook.com/zaklinaczekodu)

Shields
-------

[![npm](https://img.shields.io/npm/v/refill-task-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-jasmine)
[![npm](https://img.shields.io/npm/l/refill-task-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-jasmine)
[![npm](https://img.shields.io/npm/dm/refill-task-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/refill-task-jasmine)
[![Travis](https://img.shields.io/travis/refilljs/refill-task-jasmine/master.svg?style=flat-square)](https://travis-ci.org/refilljs/refill-task-jasmine)<br>
[![bitHound Overall Score](https://www.bithound.io/github/refilljs/refill-task-jasmine/badges/score.svg)](https://www.bithound.io/github/refilljs/refill-task-jasmine)
[![bitHound Dependencies](https://www.bithound.io/github/refilljs/refill-task-jasmine/badges/dependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-jasmine/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/refilljs/refill-task-jasmine/badges/devDependencies.svg)](https://www.bithound.io/github/refilljs/refill-task-jasmine/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/refilljs/refill-task-jasmine/badges/code.svg)](https://www.bithound.io/github/refilljs/refill-task-jasmine)<br>
[![GitHub forks](https://img.shields.io/github/forks/refilljs/refill-task-jasmine.svg?style=flat-square)](https://github.com/refilljs/refill-task-jasmine)
[![GitHub stars](https://img.shields.io/github/stars/refilljs/refill-task-jasmine.svg?style=flat-square)](https://github.com/refilljs/refill-task-jasmine)
[![GitHub watchers](https://img.shields.io/github/watchers/refilljs/refill-task-jasmine.svg?style=flat-square)](https://github.com/refilljs/refill-task-jasmine)

Installation
------------

```bash
npm install --save refill-task-jasmine refill gulp
```

Example
-------

Refill task jasmine is used in [Refill for node](https://github.com/refilljs/refill-node)

Quickstart
----------

Just put this code in gulpfile.js

```javaScript
require('refill')({
  'jasmine': {
    task: require('refill-task-jasmine')
  }
}, require('gulp'), {})
```

Usage
-----

Make sure you understand [how Refill works](https://github.com/refilljs/refill)

### Default options

```javaScript
require('refill')({
  'jasmine': {
    task: require('refill-task-jasmine'),
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
  }
}, require('gulp'), {})
```

### globs

Globs that will be used to watch file changes.

### jasmine

this will be passed to `jasmine.loadConfig(jasmine)`. Check [jasmine documentation](http://jasmine.github.io/2.5/node.html) for more informations

Changelog
---------

[Changelog at github](https://github.com/refilljs/refill-task-jasmine/releases)

Sponsors
--------

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)

