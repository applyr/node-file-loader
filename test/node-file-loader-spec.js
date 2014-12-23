/* jshint -W030 */

require('./helpers');

var Loader = require('../lib');

describe('Loader', function () {

  describe('.load', function () {
    it('loads the file, if the file exists', function (done) {
      Loader.load(__dirname+'/fixtures/.demo')
      .then(function (file) {
        var expected = "line1\nline2\nline3\n";
        expect(file).to.deep.equal(expected);
        done();
      });
    });

    it('returns an error, if the file does not exist', function (done) {
      Loader.load(__dirname+'/fixtures/does-not-exist')
      .fail(function (err) {
        expect(err).to.be.ok;
        done();
      });
    });
  });

  describe('.yaml', function () {
    it('loads the file, if the file exists', function (done) {
      Loader.yaml(__dirname+'/fixtures/demo.yml')
      .then(function (file) {
        var expected = {
          users: ["jpstevens", "applyr"],
          languages: ["javascript", "coffeescript"],
          projects: { javascript: 12, coffeescript: 7 }
        };
        expect(file).to.deep.equal(expected);
        done();
      });
    });

    it('returns an error, if the file does not exist', function (done) {
      Loader.yaml(__dirname+'/fixtures/does-not-exist')
      .fail(function (err) {
        expect(err).to.be.ok;
        done();
      });
    });

    it('returns an error, if the file cannot be parsed', function (done) {
      Loader.yaml(__dirname+'/fixtures/bad-demo.yml')
      .fail(function (err) {
        expect(err).to.be.ok;
        done();
      });
    });
  });

  describe('.json', function () {
    it('loads the file, if the file exists', function (done) {
      Loader.json(__dirname+'/fixtures/demo.json')
      .then(function (file) {
        var expected = {
          users: ["jpstevens", "applyr"],
          languages: ["javascript", "coffeescript"],
          projects: { javascript: 12, coffeescript: 7 }
        };
        expect(file).to.deep.equal(expected);
        done();
      });
    });

    it('returns an error, if the file does not exist', function (done) {
      Loader.json(__dirname+'/fixtures/does-not-exist')
      .fail(function (err) {
        expect(err).to.be.ok;
        done();
      });
    });

    it('returns an error, if the file cannot be parsed', function (done) {
      Loader.json(__dirname+'/fixtures/bad-demo.yml')
      .fail(function (err) {
        expect(err).to.be.ok;
        done();
      });
    });
  });

});
