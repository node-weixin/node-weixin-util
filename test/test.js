'use strict';
var assert = require('assert');
var nodeWeixinUtil = require('../');

describe('node-weixin-util node module', function () {
  it('should be ablt to generate nonce', function () {
    var length = 11;
    var nonce = nodeWeixinUtil.getNonce(length);
    assert(true, typeof nonce === 'string');
    assert(true, nonce.length === length);
  });
  it('should make url parameters', function () {

    var params = {
      a: '1',
      c: '2',
      'd-c': 'aaa'
    };

    var url = nodeWeixinUtil.toParam(params);
    assert.equal(true, url === 'a=1&c=2&d-c=aaa');
    params = {
      a: '1',
      c: '2',
      '美国': '中国'
    };

    url = nodeWeixinUtil.toParam(params);
    assert.equal(true, url === 'a=1&c=2&%E7%BE%8E%E5%9B%BD=%E4%B8%AD%E5%9B%BD');
  });
});
