'use strict';
/* eslint quote-props: [2, "as-needed"] */

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
      d: 3,
      e: 3.1,
      'd-c': 'aaa'
    };

    var url = nodeWeixinUtil.toParam(params);
    console.log(url);
    assert.equal(true, url === 'a=1&c=2&d=3&e=3.1&d-c=aaa');
    params = {
      a: '1',
      c: '2',
      美国: '中国'
    };

    url = nodeWeixinUtil.toParam(params);
    assert.equal(true, url === 'a=1&c=2&%E7%BE%8E%E5%9B%BD=%E4%B8%AD%E5%9B%BD');
  });

  it('should be able to marshall params', function (done) {
    var params = {
      a: 'b',
      d: 'd',
      c: 'd',
      1: 'hello'
    };
    var result = nodeWeixinUtil.marshall(params);
    assert.equal(true, result === '1=hello&a=b&c=d&d=d');
    done();
  });

  it('should be able to convert params to xml', function (done) {
    var params = {
      a: 'b',
      d: 1,
      c: 'd',
      1: 'hello',
      n: ''
    };
    var result = nodeWeixinUtil.toXml(params);
    assert.equal(true, result === '<xml><1><![CDATA[hello]]></1><a><![CDATA[b]]></a><d>1</d><c><![CDATA[d]]></c></xml>');
    done();
  });
});
