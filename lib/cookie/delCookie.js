'use strict';

var getCookie = require('./getCookie');
/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
module.exports = function (name) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var domain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var secure = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var value = getCookie(name);
  if (value !== null) {
    var exp = new Date();
    exp.setMinutes(exp.getMinutes() - 1000);
    var pathSelf = ';path=' + path;
    var domainSelf = domain ? ';domain=' + domain : '';
    var secureSelf = secure ? ';secure' : '';
    window.document.cookie = name + '=;expires=' + exp.toGMTString() + pathSelf + domainSelf + secureSelf;
  }
};