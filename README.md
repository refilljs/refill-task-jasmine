# ZKflow task jasmine

Jasmine gulp task in [ZKflow](https://github.com/zaklinaczekodu/zkflow) format. Useful for testing your node app.
It uses jasmine API directly, and in watch mode it runs jasmine in separate process to avoid require cache invalidation problem.

[<img alt="Made by Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/madeBy.svg" width="200">](http://zaklinaczekodu.com)

Shields
-------

[![npm](https://img.shields.io/npm/v/zkflow-task-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-jasmine)
[![npm](https://img.shields.io/npm/l/zkflow-task-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-jasmine)
[![npm](https://img.shields.io/npm/dm/zkflow-task-jasmine.svg?style=flat-square)](https://www.npmjs.com/package/zkflow-task-jasmine)<br>
[![Travis](https://img.shields.io/travis/zaklinaczekodu/zkflow-task-jasmine/master.svg?style=flat-square)](https://travis-ci.org/zaklinaczekodu/zkflow-task-jasmine)
[![Code Climate](https://img.shields.io/codeclimate/github/zaklinaczekodu/zkflow-task-jasmine.svg?style=flat-square)](https://codeclimate.com/github/zaklinaczekodu/zkflow-task-jasmine)<br>
[![David](https://img.shields.io/david/zaklinaczekodu/zkflow-task-jasmine.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-task-jasmine)
[![David](https://img.shields.io/david/dev/zaklinaczekodu/zkflow-task-jasmine.svg?style=flat-square)](https://david-dm.org/zaklinaczekodu/zkflow-task-jasmine)<br>
[![GitHub forks](https://img.shields.io/github/forks/zaklinaczekodu/zkflow-task-jasmine.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-jasmine)
[![GitHub stars](https://img.shields.io/github/stars/zaklinaczekodu/zkflow-task-jasmine.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-jasmine)
[![GitHub followers](https://img.shields.io/github/followers/zaklinaczekodu.svg?style=flat-square)](https://github.com/zaklinaczekodu/zkflow-task-jasmine)

Installation
------------

```bash
npm install --save zkflow-task-jasmine zkflow gulp
```

Example
-------

ZKflow task jasmine is used in [ZKflow for node](https://github.com/zaklinaczekodu/zkflow-node)

Quickstart
----------

Just put this code in gulpfile.js

```javaScript
require('zkflow')({
  'jasmine': {
    task: require('zkflow-task-jasmine'),
    jasmine: ['some-task']
  }
}, require('gulp'), {})
```

Usage
-----

Make sure you understand [how ZKflow works](https://github.com/zaklinaczekodu/zkflow)

### Default options

```javaScript
require('zkflow')({
  'jasmine': {
    task: require('zkflow-task-jasmine'),
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

this will be passed to `jasmine.loadConfig(jasmine)`. Check [jasmine documentation](http://jasmine.github.io/2.4/node.html) for more informations

Sponsors
--------

[<img alt="Street Team" src="http://zaklinaczekodu.com/_assets/streetteam.svg" width="200">](http://getstreetteam.com)

[<img alt="Zaklinacze Kodu" src="http://zaklinaczekodu.com/_assets/logo.svg" width="200">](http://zaklinaczekodu.com)
