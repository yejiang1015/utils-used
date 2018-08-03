'use strict';

// cookie
var getCookie = require('./cookie/getCookie');
var setCookie = require('./cookie/setCookie');
var delCookie = require('./cookie/delCookie');

// date

var fmtdate = require('./date/fmtdate');
// url
var fmturl = require('./url/fmturl');

module.exports = {
  // cookie
  getCookie: getCookie,
  setCookie: setCookie,
  delCookie: delCookie,
  // date
  fmtdate: fmtdate,
  // url
  fmturl: fmturl
};