/**
 *
 * @desc 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */

module.exports = function(name) {
  const reg = new RegExp(`(^| )${name}(?:=([^;]*))?(;|$)`);
  const val = window.document.cookie.match(reg);
  if (val) {
    return val[2] ? window.unescape(val[2]) : '';
  }
  return null;
};
