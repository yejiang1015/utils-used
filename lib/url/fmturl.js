'use strict';

/**
 * 获取当前页面或指定页面地址的参数值
 * @param {String} name 参数名
 * @param url {String} url 页面地址，默认当前页面地址
 * @returns {string}
 */
module.exports = function (name, url) {
  // 参数：变量名，url为空则表从当前页面的url中取
  var u = url || window.location.search.replace('&amp;', '&').replace(/\/$/, '');
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = u.substr(u.indexOf('?') + 1).match(reg);
  return r != null ? r[2] : '';
};