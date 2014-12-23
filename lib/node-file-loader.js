(function () {

  'use strict';

  var fs = require('fs'),
      q = require('q'),
      path = require('path'),
      yaml = require('js-yaml');

  function Loader () {}

  Loader.prototype.yaml = function (filePath) {
    return this.load(filePath).then(function (file) {
      return yaml.safeLoad(file);
    });
  };

  Loader.prototype.json = function (filePath) {
    return this.load(filePath).then(function (file) {
      return JSON.parse(file);
    });
  };

  Loader.prototype.load = function (filePath) {
    var deferred = q.defer();
    fs.readFile(filePath, 'utf8', function (err, file) {
      if (err) return deferred.reject(err);
      deferred.resolve(file);
    });
    return deferred.promise;
  };

  module.exports = Loader;

})();
