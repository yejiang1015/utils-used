/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days:过期时间
 */
module.exports = function(name, value, expires = null, path = '/', domain = null, secure = false) {
  const exp = new Date();
  const time = expires * 24 * 3600 * 1000;
  let expiresSelf = expires ? exp.setTime(exp.getTime() + time) : '';
  expiresSelf = expires ? `;expires=${exp.toGMTString()}` : '';
  const pathSelf = `;path=${path}`;
  const domainSelf = domain ? `;domain=${domain}` : '';
  const secureSelf = secure ? ';secure' : '';
  window.document.cookie = `${name}=${window.escape(value)}${expiresSelf}${pathSelf}${domainSelf}${secureSelf}`;
}
