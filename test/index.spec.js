'use strict';

const chai = require('chai'),
  expect = require('chai').expect,
  rewire = require('rewire'),
  gulpish = rewire('../');

describe('Gulpish', function() {

  let defaults,
    app = {
      task: gulpish.__get__('task'),
      plugin: gulpish.__get__('plugin'),
      defaults: gulpish.__get__('defaults')
    };

  before(function() {

  });

  describe('Set up with no options file', function() {

    before(function() {
      defaults = require('./misc/defaults');
      gulpish.__set__('options', app.defaults());
    });

    it('should return default task options', function() {
      expect(app.task()).to.be.eql(defaults.task);
    });

    it('should return default plugin options', function() {
      expect(app.plugin()).to.be.eql(defaults.plugin);
    });

  });

  describe('Set up with options file', function() {

    before(function() {
      gulpish.__set__('options', require('./misc/gulpish'));
    });

  });

});
