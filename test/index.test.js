const assert = require('assert');
const utils = require('../lib');
describe('date', function() {
  describe('#fmtdate()', function() {
    it('格式化时间 1533288082092 后为 2018-08', function() {
      assert.equal(utils.fmtdate(1533288082092, 'yyyy-MM'), '2018-08');
    });
    it('格式化时间 Fri Aug 03 2018 17:22:39 GMT+0800 (中国标准时间) 后为 2018-08', function() {
      assert.equal(utils.fmtdate('Fri Aug 03 2018 17:22:39 GMT+0800 (中国标准时间)', 'yyyy-MM'), '2018-08');
    });
  });
});
describe('dates', function() {
  describe('#fmtdates()', function() {
    it('格式化时间 1533288082092 后为 2018-08', function() {
      assert.equal(utils.fmtdate(1533288082092, 'yyyy-MM'), '2018-08');
    });
    it('格式化时间 Fri Aug 03 2018 17:22:39 GMT+0800 (中国标准时间) 后为 2018-08', function() {
      assert.equal(utils.fmtdate('Fri Aug 03 2018 17:22:39 GMT+0800 (中国标准时间)', 'yyyy-MM'), '2018-08');
    });
  });
});
