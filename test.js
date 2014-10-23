'use strict';

var cssshrink = require('cssshrink');

var content = '.test{color: #ff0000;} .test{font-size:12px;}';
console.log(cssshrink.shrink(content));
