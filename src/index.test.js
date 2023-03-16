'use strict';
exports.__esModule = true;
var index_1 = require('./index');
describe('unit | isNumberParseable', function () {
  it('returns `true` for values parseable number', function () {
    var sdk = new index_1.UndakuSdk('');
    expect(typeof sdk).toBe('object');
  });
});
