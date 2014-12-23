# node-file-loader

[![Build Status](https://travis-ci.org/applyr/node-file-loader.svg)](https://travis-ci.org/applyr/node-file-loader)

## Installation

```bash
npm install node-file-loader --save
```

## Usage

To use the loader, first require it:

```
var Loader = require('node-file-loader');
```

## Methods

### load(filePath)

Load file (UTF-8). Returns a promise object containing the file.

```javascript
Loader.load(__dirname+'/example.txt')
.then(function (file) {
  // handle plain-text file
}).catch(function (err) {
  // handle error
});
```

### yaml(filePath)

Load YAML file into a Javascript object. Returns a promise object containing the object.

```javascript
Loader.yaml(__dirname+'/example.yml')
.then(function (obj) {
  // handle the file, as a javascript object
})
.catch(function (err) {
  // handle error
});
```


### json(filePath)

Load JSON file into a Javascript object. Returns a promise object containing the object.

```javascript
Loader.json(__dirname+'/example.json')
.then(function (obj) {
  // handle the file, as a javascript object
})
.catch(function (err) {
  // handle error
});
```
