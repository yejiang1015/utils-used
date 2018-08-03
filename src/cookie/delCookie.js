const getCookie = require('./getCookie');
/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
module.exports = function(name, path = '/', domain = null, secure = false) {
  const value = getCookie(name);
  if (value !== null) {
    const exp = new Date();
    exp.setMinutes(exp.getMinutes() - 1000);
    const pathSelf = `;path=${path}`;
    const domainSelf = domain ? `;domain=${domain}` : '';
    const secureSelf = secure ? ';secure' : '';
    window.document.cookie = `${name}=;expires=${exp.toGMTString()}${pathSelf}${domainSelf}${secureSelf}`;
  }
}
