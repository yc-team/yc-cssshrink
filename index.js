'use strict';

var cssshrink = require('cssshrink');

module.exports = function (content) {
    //目前的content就是内容
    return cssshrink.shrink(content);
};