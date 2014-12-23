(function () {

  'use strict';

  var fs = require('fs'),
      q = require('q'),
      path = require('path'),
      yaml = require('js-yaml');

  module.exports = Object.create({
    yaml: function (filePath) {
      return this.load(filePath).then(function (file) {
        return yaml.safeLoad(file);
      });
    },
    json: function (filePath) {
      return this.load(filePath).then(function (file) {
        return JSON.parse(file);
      });
    },
    load: function (filePath) {
      var deferred = q.defer();
      fs.readFile(filePath, 'utf8', function (err, file) {
        if (err) return deferred.reject(err);
        deferred.resolve(file);
      });
      return deferred.promise;
    }
  });

})();
