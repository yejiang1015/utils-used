'use strict';

/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days:过期时间
 */
module.exports = function (name, value) {
  var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  var domain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var secure = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  var exp = new Date();
  var time = expires * 24 * 3600 * 1000;
  var expiresSelf = expires ? exp.setTime(exp.getTime() + time) : '';
  expiresSelf = expires ? ';expires=' + exp.toGMTString() : '';
  var pathSelf = ';path=' + path;
  var domainSelf = domain ? ';domain=' + domain : '';
  var secureSelf = secure ? ';secure' : '';
  window.document.cookie = name + '=' + window.escape(value) + expiresSelf + pathSelf + domainSelf + secureSelf;
};