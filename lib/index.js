'use strict';

// cookie
var getCookie = require('./cookie/getCookie');
var setCookie = require('./cookie/setCookie');
var delCookie = require('./cookie/delCookie');

// date

var fmtdate = require('./date/fmtdate');
// url
var fmturl = require('./url/fmturl');

// device
var getBrowser = require('./device/getBrowser');
var getOs = require('./device/getOs');

module.exports = {
  // cookie
  getCookie: getCookie,
  setCookie: setCookie,
  delCookie: delCookie,
  // date
  fmtdate: fmtdate,
  // url
  fmturl: fmturl,
  // device
  getBrowser: getBrowser,
  getOs: getOs
};