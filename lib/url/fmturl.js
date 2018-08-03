'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (name, url) {
  // 参数：变量名，url为空则表从当前页面的url中取
  var u = url || window.location.search.replace('&amp;', '&').replace(/\/$/, '');
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = u.substr(u.indexOf('?') + 1).match(reg);
  return r != null ? r[2] : '';
};