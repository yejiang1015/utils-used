'use strict';

/**
 *
 * @desc 时间格式化
 * @param  {String} name
 * @return {String}
 */
module.exports = function (val, fmt) {
  var date = void 0;
  if (new Date(val)) {
    date = new Date(val);
  } else {
    // IE 格式化字符串时间 NAN 解决办法
    date = new Date(Date.parse(val.replace(/-/g, '/')));
  }
  var lFmt = fmt;
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };

  if (/(y+)/.test(lFmt)) {
    lFmt = lFmt.replace(RegExp.$1, ('' + date.getFullYear()).substr(4 - RegExp.$1.length));
  }

  Object.entries(o).forEach(function (obj) {
    if (new RegExp('(' + obj[0] + ')').test(lFmt)) {
      lFmt = lFmt.replace(RegExp.$1, RegExp.$1.length === 1 ? obj[1] : ('00' + obj[1]).substr(('' + obj[1]).length));
    }
  });

  return lFmt;
};