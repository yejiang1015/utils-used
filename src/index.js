// cookie
const getCookie = require('./cookie/getCookie');
const setCookie = require('./cookie/setCookie');
const delCookie = require('./cookie/delCookie');

// date

const fmtdate = require('./date/fmtdate');
// url
const fmturl = require('./url/fmturl');

// device
const getBrowser = require('./device/getBrowser');
const getOs = require('./device/getOs');

module.exports = {
  // cookie
  getCookie,
  setCookie,
  delCookie,
  // date
  fmtdate,
  // url
  fmturl,
  // device
  getBrowser,
  getOs
};
