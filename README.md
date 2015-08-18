#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Weixin basic functions


## Install

```sh
$ npm install --save node-weixin-util
```


## Usage

```js
var nodeWeixinUtil = require('node-weixin-util');
var url, result;
var params = {
  a: '1',
  c: '2',
  '美国': '中国'
};

url = nodeWeixinUtil.toParam(params);
result = nodeWeixinUtil.marshall(params);
result = nodeWeixinUtil.toXml(params);

```


## License

MIT © [node-weixin](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/node-weixin-util.svg
[npm-url]: https://npmjs.org/package/node-weixin-util
[travis-image]: https://travis-ci.org/node-weixin/node-weixin-util.svg?branch=master
[travis-url]: https://travis-ci.org/node-weixin/node-weixin-util
[daviddm-image]: https://david-dm.org/node-weixin/node-weixin-util.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/node-weixin/node-weixin-util
